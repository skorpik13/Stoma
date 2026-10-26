import os
import configparser

# Умная подгрузка драйвера базы данных для дома и работы
try:
    import pyodbc
except ModuleNotFoundError:
    import pypyodbc as pyodbc # Если тяжелого драйвера нет (как дома), берем легкий аналог!

from datetime import datetime
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

# Читаем config.ini
config = configparser.ConfigParser()
ini_path = os.path.join(os.path.dirname(__file__), 'config.ini')
if os.path.exists(ini_path):
    config.read(ini_path)

try:
    DB_FILE = config.get('Base', 'Path')
except Exception:
    DB_FILE = r"D:\Rabota\Base.mdb"

CONN_STR = f"Driver={{Microsoft Access Driver (*.mdb, *.accdb)}};DBQ={DB_FILE};"

# Функция точного расчета возраста
def calculate_exact_age(birthday_raw):
    if not birthday_raw:
        return "—"
    try:
        if hasattr(birthday_raw, 'date'):
            birthday = birthday_raw.date()
        else:
            birthday = datetime.strptime(str(birthday_raw)[:10], "%Y-%m-%d").date()
        today = datetime.today().date()
        return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
    except:
        return "—"

@app.route('/')
def index():
    return render_template('index.html')

# 1. API: СПИСОК ПАЦИЕНТОВ (Исправлен SQL запрос - добавлены все нужные поля!)
@app.route('/api/patients', methods=['GET'])
def get_patients():
    conn = None
    try:
        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()
        
        # Выбираем ID, Фамилию, Имя, Отчество и Мобильный телефон (всего 5 полей)
        cursor.execute("SELECT ID, SURNAME, NAME, PATRONYMIC, MOBILE1 FROM CLIENTS ORDER BY SURNAME, NAME")
        
        patients = []
        for row in cursor.fetchall():
            fio_str = f"{row[1] or ''} {row[2] or ''} {row[3] or ''}".strip()
            patients.append({
                "id": int(row[0]) if row[0] is not None else 0,
                "fio": fio_str if fio_str else "Без имени",
                "phone": str(row[4]).strip() if row[4] else ""
            })
        return jsonify(patients)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

# 2. API: КАРТОЧКА ПАЦИЕНТА И ЕГО ВИЗИТЫ
@app.route('/api/patient/<int:client_id>', methods=['GET'])
def get_patient_details(client_id):
    conn = None
    try:
        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()

        cursor.execute("""
            SELECT SURNAME, NAME, PATRONYMIC, BIRTHDAY, CITY, PR, STREET, HOUSE, FLAT, MOBILE1, MOBILE2, TEL 
            FROM CLIENTS WHERE ID = ?
        """, (client_id,))
        p = cursor.fetchone()
        if not p:
            return jsonify({"error": "Пациент не найден"}), 404

        fio_str = f"{p[0] or ''} {p[1] or ''} {p[2] or ''}".strip()
        age_calculated = calculate_exact_age(p[3])
        address_str = f"г. {p[4] or 'Лида'}, {p[5] or 'ул.'} {p[6] or ''}, д. {p[7] or ''}, кв. {p[8] or ''}".strip()
        phones_str = ", ".join(filter(None, [
            str(p[9]).strip() if p[9] else None,
            str(p[10]).strip() if p[10] else None,
            str(p[11]).strip() if p[11] else None
        ]))

        patient_info = {
            "fio": fio_str,
            "age": age_calculated,
            "phones": phones_str if phones_str else "не указаны",
            "address": address_str,
            "id": client_id,
            "surname": str(p[0]).strip(),
            "name": str(p[1]).strip(),
            "patronymic": str(p[2]).strip() if p[2] else "",
            "birthday": p[3].strftime("%Y-%m-%d") if p[3] else "",
            "city": str(p[4]).strip() if p[4] else "Лида",
            "pr": str(p[5]).strip() if p[5] else "ул.",
            "street": str(p[6]).strip() if p[6] else "",
            "house": str(p[7]).strip() if p[7] else "",
            "flat": str(p[8]).strip() if p[8] else "",
            "mobile1": str(p[9]).strip() if p[9] else "",
            "mobile2": str(p[10]).strip() if p[10] else "",
            "tel": str(p[11]).strip() if p[11] else ""
        }

        cursor.execute("""
            SELECT V.ID, V.DATA, V.TIME, S.DISEASE, V.DIAGNOZ, V.TREATMENT
            FROM VISITS AS V
            LEFT JOIN SPR AS S ON V.ID_SPR = S.ID
            WHERE V.ID_CLNT = ? ORDER BY V.DATA DESC, V.ID DESC
        """, (client_id,))

        visits = []
        for v in cursor.fetchall():
            v_id = v[0]
            v_date = v[1].strftime("%d.%m.%Y") if v[1] else "Нет даты"
            visits.append({
                "id": v_id,
                "date": v_date,
                "time": str(v[2]).strip() if v[2] else "",
                "disease": str(v[3]).strip() if v[3] else "Не указано",
                "diagnoz": str(v[4]).strip() if v[4] else "",
                "treatment": str(v[5]).strip() if v[5] else ""
            })

        return jsonify({"patient": patient_info, "visits": visits})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

# 3. API: СПРАВОЧНИК СИСТЕМЫ
@app.route('/api/spr', methods=['GET'])
def get_spr():
    conn = None
    try:
        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()
        cursor.execute("SELECT ID, CODE, DISEASE FROM SPR ORDER BY DISEASE")
        spr = [{"id": int(row[0]), "code": str(row[1]).strip(), "disease": str(row[2]).strip()} for row in cursor.fetchall()]
        return jsonify(spr)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

# 4. API: СОХРАНЕНИЕ ПАЦИЕНТА
@app.route('/api/patient/save', methods=['POST'])
def save_patient():
    conn = None
    try:
        data = request.json or {}
        print("SAVE PATIENT REQUEST:", data)  # диагностически

        # Обязательные поля
        surname = data.get('surname')
        name = data.get('name')
        birthday_raw = data.get('birthday')

        if not surname or not name or birthday_raw in (None, '', []):
            return jsonify({"error": "Нужно заполнить фамилию, имя и дату рождения."}), 400

        # Конвертация даты рождения (строка "YYYY-MM-DD") -> date
        b_date = None
        if birthday_raw:
            try:
                b_date = datetime.strptime(birthday_raw, "%Y-%m-%d").date()
            except ValueError:
                return jsonify({"error": "Неверный формат даты рождения. Ожидается YYYY-MM-DD"}), 400

        patronymic = data.get('patronymic')
        city = data.get('city')
        pr = data.get('pr')
        street = data.get('street')
        house = data.get('house')
        flat = data.get('flat')
        mobile1 = data.get('mobile1')
        mobile2 = data.get('mobile2')
        tel = data.get('tel')
        client_id = int(data['id']) if data.get('id') else None

        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()

        if client_id:
            # РЕДАКТИРОВАНИЕ существующего пациента
            cursor.execute("""
                UPDATE CLIENTS SET 
                    SURNAME=?, NAME=?, PATRONYMIC=?, BIRTHDAY=?, CITY=?, PR=?, 
                    STREET=?, HOUSE=?, FLAT=?, MOBILE1=?, MOBILE2=?, TEL=?
                WHERE ID=?
            """, (
                surname, name, patronymic, b_date, city, pr,
                street, house, flat, mobile1, mobile2, tel,
                client_id
            ))
        else:
            # СОЗДАНИЕ нового пациента
            cursor.execute("SELECT MAX(ID) FROM CLIENTS")
            max_id_row = cursor.fetchone()
            next_id = (int(max_id_row[0]) + 1) if (max_id_row and max_id_row[0] is not None) else 1

            cursor.execute("""
                INSERT INTO CLIENTS (ID, SURNAME, NAME, PATRONYMIC, BIRTHDAY, CITY, PR, STREET, HOUSE, FLAT, MOBILE1, MOBILE2, TEL)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                next_id, surname, name, patronymic, b_date, city, pr,
                street, house, flat, mobile1, mobile2, tel
            ))

        conn.commit()
        return jsonify({"success": True})
    except Exception as e:
        print("Ошибка при сохранении пациента:", e)
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

# 5. API: ДОБАВЛЕНИЕ ПРИЕМА
@app.route('/api/visit/add', methods=['POST'])
def add_visit():
    conn = None
    try:
        data = request.json or {}

        # Подключение к БД
        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()

        # ID пациента обязателен
        client_id = int(data['id_clnt']) if data.get('id_clnt') else None
        if not client_id:
            return jsonify({"error": "Не указан ID пациента"}), 400

        # ID_SPR может быть пустым
        id_spr = int(data['id_spr']) if data.get('id_spr') else None

        # Дата визита (YYYY-MM-DD) → datetime.date
        date_str = data.get('date')
        v_date = None
        if date_str:
            try:
                v_date = datetime.strptime(date_str, "%Y-%m-%d").date()
            except ValueError:
                return jsonify({"error": "Неверный формат даты. Ожидается YYYY-MM-DD"}), 400
        else:
            v_date = datetime.today().date()

        # TIME хранится как строка (HH:MM)
        v_time = data.get('time') if data.get('time') else ""

        # Поле VISIT (описание визита)
        visit_note = data.get('visit')
        if visit_note is None:
            visit_note = f"Посещение {v_date.isoformat()} {v_time}".strip()

        diagnoz = data.get('diagnoz')
        treatment = data.get('treatment')

        cursor.execute("""
            INSERT INTO VISITS ([ID_CLNT], [ID_SPR], [DATA], [TIME], [VISIT], [TREATMENT], [DIAGNOZ])
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            client_id,
            id_spr,
            v_date,
            v_time,
            visit_note,
            treatment,
            diagnoz
        ))

        conn.commit()
        return jsonify({"success": True})
    except Exception as e:
        print(f"Ошибка при добавлении визита: {str(e)}")
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

# 6. API: УДАЛЕНИЕ ПРИЕМА
@app.route('/api/visit/delete', methods=['POST'])
def delete_visit():
    conn = None
    try:
        data = request.json or {}

        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()

        visit_id = int(data.get('visit_id')) if data.get('visit_id') else None
        if not visit_id:
            return jsonify({"error": "Не указан ID визита"}), 400

        cursor.execute("DELETE FROM VISITS WHERE ID = ?", (visit_id,))
        conn.commit()
        return jsonify({"success": True})
    except Exception as e:
        print(f"Ошибка при удалении визита: {str(e)}")
        return jsonify({"error": str(e)}), 500
    finally:
        if conn: conn.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)

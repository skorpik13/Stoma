unit Unit3;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Mask, DBCtrls, Grids, DBGrids, ExtCtrls, DB, ComCtrls,
  dblookup;

type
  TEditFormClient = class(TForm)
    GroupBox1: TGroupBox;
    Label1: TLabel;
    Label11: TLabel;
    Label10: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    Label6: TLabel;
    Label7: TLabel;
    Label8: TLabel;
    Label9: TLabel;
    DBEditSurname: TDBEdit;
    DBEditName: TDBEdit;
    DBEditPatronymic: TDBEdit;
    DBEditStreet: TDBEdit;
    DBEditHouse: TDBEdit;
    DBEditBuilding: TDBEdit;
    DBEditFlat: TDBEdit;
    DBEditTel: TDBEdit;
    ButtonSaveClient: TButton;
    ButtonCancel: TButton;
    ButtonDelete: TButton;
    Button2: TButton;
    Label12: TLabel;
    DBEditAge: TDBEdit;
    Label13: TLabel;
    GroupBox2: TGroupBox;
    DBEdit2: TDBEdit;
    DBEdit3: TDBEdit;
    Label14: TLabel;
    Label15: TLabel;
    Label16: TLabel;
    Label17: TLabel;
    Label19: TLabel;
    DBNavigator1: TDBNavigator;
    ComboBox1: TComboBox;
    ComboBox2: TComboBox;
    Button3: TButton;
    Button1: TButton;
    DBEdit4: TDBRichEdit;
    ComboBoxTreatment: TComboBox;
    DBEdit5: TDBRichEdit;
    Label18: TLabel;
    DBEditCity: TDBComboBox;
    DBEditMobile1: TDBComboBox;
    DBEditMobile2: TDBComboBox;
    DBEdit1: TDBRichEdit;
    Label20: TLabel;
    ComboBox3: TComboBox;
    procedure ButtonSaveClientClick(Sender: TObject);
    procedure ButtonCancelClick(Sender: TObject);
    procedure ButtonDeleteClick(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure ComboBox1Change(Sender: TObject);
    procedure ComboBox2Change(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure ComboBoxTreatmentChange(Sender: TObject);
    procedure DBEdit1Change(Sender: TObject);
    procedure DBEditMobile1Change(Sender: TObject);
    procedure DBEditMobile2Change(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  EditFormClient: TEditFormClient;

implementation

uses Unit2, Unit1, Unit4;

{$R *.dfm}

procedure TEditFormClient.ButtonCancelClick(Sender: TObject);
begin
 fDM.IBQueryClients.Cancel;
 fDM.IBQueryVisits.Cancel;
  // Мгновенно отменяем все изменения в локальном буфере памяти Delphi
  fDM.IBQueryClients.CancelBatch;
  fDM.IBQueryVisits.CancelBatch;
  EditFormClient.Close;
end;

procedure TEditFormClient.Button1Click(Sender: TObject);
begin
// fDM.IBQueryVisits.Close;
// fDM.IBQueryVisits.SQL.Text:='select * from visits order by ID,ID_CLNT';
// fDM.IBQueryVisits.Open;
 fDM.IBQueryVisits.Append;
// fDM.IBQueryVisits.Edit;
// fDM.IBQueryVisits.FieldByName('ID').Value:=fDM.IBQueryVisits.RecordCount+1;
 fDM.IBQueryVisits.FieldByName('ID_CLNT').Value:=fDM.IBQueryClients.FieldByName('ID').Value;
 fDM.IBQueryVisits.FieldByName('DATA').Value:=DateToStr(Date);
 fDM.IBQueryVisits.FieldByName('TIME').Value:=Copy(TimeToStr(Time),1,5);
 fDM.IBQueryVisits.Post;
 ComboBox1.ItemIndex:=0;
 ComboBox2.ItemIndex:=0;
end;

procedure TEditFormClient.Button2Click(Sender: TObject);
begin
 MainForm.RecCount.Caption:=IntToStr(FDM.IBQueryClients.RecordCount);
 fDM.IBQueryClients.Cancel;
 EditFormClient.Close;
end;

procedure TEditFormClient.Button3Click(Sender: TObject);
begin
 if Application.MessageBox('Вы действительно хотите удалить текущую запись?', '', MB_ICONQUESTION + MB_YESNO) = IDNO then
  Exit;
 try
  fDM.IBQueryVisits.Delete;
 Except
  on E: exception do
   begin
    Application.MessageBox(Pchar(E.Message), 'Ошибка', MB_Iconerror);
   end;
 end;
end;

procedure TEditFormClient.ButtonDeleteClick(Sender: TObject);
begin
 if Application.MessageBox('Вы действительно хотите удалить текущую запись? Вместе с ней удалятся и все визиты этого пациента.', '', MB_ICONQUESTION + MB_YESNO) = IDNO then
  Exit;

 try
   // 1. УДАЛЯЕМ ТЕКУЩЕГО КЛИЕНТА В ПАМЯТИ
   fDM.IBQueryClients.Delete;

   // 2. ФИЗИЧЕСКИ УДАЛЯЕМ ИЗ ФАЙЛА БАЗЫ ДАННЫХ
   // Сбрасываем изменения пачкой на диск.
   // Если в Access настроено "Каскадное удаление", база сама сотрет все его визиты.
   fDM.IBQueryClients.UpdateBatch;

   // 3. Закрываем форму редактирования, так как пациента больше нет
   EditFormClient.Close;

 Except
  on E: exception do
   begin
    // В случае сбоя (например, файл заблокирован) возвращаем клиента на место в памяти
    fDM.IBQueryClients.CancelBatch;
    Application.MessageBox(Pchar(E.Message), 'Ошибка', MB_Iconerror);
   end;
 end;
end;

procedure TEditFormClient.ButtonSaveClientClick(Sender: TObject);
var
  s: string;
  id1, id2: integer;
  UserAge, BirthYear: Integer;
begin
  id1 := 0; // Инициализируем переменные для компилятора
  id2 := 0;
  GroupBox2.Visible := true;

  fDM.IBQueryClients.Edit;

  // --- Расчет BIRTHDAY на основе AGE для Delphi 2010 ---
  if not fDM.IBQueryClients.FieldByName('AGE').IsNull then
  begin
    UserAge := fDM.IBQueryClients.FieldByName('AGE').AsInteger;
    if UserAge > 0 then
    begin
      // В Delphi 2010 CurrentYear работает напрямую из коробки
      BirthYear := CurrentYear - UserAge;
      fDM.IBQueryClients.FieldByName('BIRTHDAY').AsDateTime := EncodeDate(BirthYear, 1, 1);
    end;
  end;

  fDM.IBQueryClients.FieldByName('PR').Value := EditFormClient.ComboBox3.Text;

  // Фиксируем черновики изменений в оперативной памяти
  if fDM.IBQueryClients.Modified then
    fDM.IBQueryClients.Post;

  if fDM.IBQueryVisits.Modified then
    fDM.IBQueryVisits.Post;

  // Железобетонно запоминаем ID записей ДО отправки пакета в базу
  if fDM.IBQueryClients.FieldByName('ID').Value <> Null then
    id1 := fDM.IBQueryClients.FieldByName('ID').Value;

  if fDM.IBQueryVisits.FieldByName('ID').Value <> Null then
    id2 := fDM.IBQueryVisits.FieldByName('ID').Value;

  // --- МГНОВЕННАЯ ЗАПИСЬ В ФАЙЛ БАЗЫ ДАННЫХ ---
  // Отправляем пакет изменений из памяти прямо в физический файл .mdb
  fDM.IBQueryClients.UpdateBatch;
  fDM.IBQueryVisits.UpdateBatch;

  s := '' + MainForm.DBEdit1.text;

  // Обновляем запрос визитов
  with fDM.IBQueryVisits do
  begin
    Close;
    SQL.Clear;
    SQL.Text := 'select * from visits where id_clnt like ' + s + ' order by ID,ID_CLNT';
    Open;
  end;

  // Возвращаем фокус на те строки сетки, где стоял пользователь
  fDM.IBQueryClients.Locate('ID', id1, [LoPartialKey]);
  fDM.IBQueryVisits.Locate('ID', id2, [LoPartialKey]);
end;

procedure TEditFormClient.ComboBox1Change(Sender: TObject);
begin
 ComboBox2.ItemIndex:=ComboBox1.ItemIndex;
 fDM.DSVisits.Edit;
 DBEdit1.Text:=ComboBox1.Text;
 fDM.DSVisits.DataSet.Post;
// DBAddCode1.Text:=ComboBox2.Text;
 fDM.IBQueryVisits.Edit;
 fDM.IBQueryVisits.FieldByName('ID_SPR').Value:=ComboBox1.ItemIndex+1;
 fDM.IBQueryVisits.Post;
end;

procedure TEditFormClient.ComboBox2Change(Sender: TObject);
begin
 ComboBox1.ItemIndex:=ComboBox2.ItemIndex;
 fDM.DSVisits.DataSet.Edit;
 DBEdit1.Text:=ComboBox1.Text;
 fDM.DSVisits.DataSet.Post;
// DBAddCode1.Text:=ComboBox2.Text;
 fDM.IBQueryVisits.Edit;
 fDM.IBQueryVisits.FieldByName('ID_SPR').Value:=ComboBox2.ItemIndex+1;
 fDM.IBQueryVisits.Post;
end;

procedure TEditFormClient.ComboBoxTreatmentChange(Sender: TObject);
begin
 fDM.DSVisits.Edit;
 if DBEdit4.Text=''
 then DBEdit4.Text:=DBEdit4.Text+ComboBoxTreatment.Text
 else DBEdit4.Text:=DBEdit4.Text+', '+ComboBoxTreatment.Text;
 fDM.DSVisits.DataSet.Post;
end;



procedure TEditFormClient.DBEditMobile2Change(Sender: TObject);
begin
 if length(DBEditMobile2.Text)>13
  then
   begin
    DBEditMobile2.Text:=copy(DBEditMobile2.Text,1,13);
    DBEditMobile2.SelStart:=length(DBEditMobile2.Text);
   end;
end;

procedure TEditFormClient.DBEdit1Change(Sender: TObject);
begin
// ComboBox1.Text:=DBEdit1.Text;
// ComboBox2.Text:=DBEdit6.Text;
end;

procedure TEditFormClient.DBEditMobile1Change(Sender: TObject);
begin
 if length(DBEditMobile1.Text)>13
  then
   begin
    DBEditMobile1.Text:=copy(DBEditMobile1.Text,1,13);
    DBEditMobile1.SelStart:=length(DBEditMobile1.Text);
   end;
end;

Procedure TEditFormClient.FormActivate(Sender: TObject);
var id:String;
begin
 if EditFormClient.ComboBox3.ItemIndex<>0 then
 if fDM.IBQueryClients.FieldByName('PR').AsString<>''
  then EditFormClient.ComboBox3.Text:=fDM.IBQueryClients.FieldByName('PR').AsString
  else EditFormClient.ComboBox3.Text:='';
 if (fDM.IBQueryVisits.RecordCount=0) or (fDM.IBQueryVisits.FieldByName('ID_SPR').AsString='')
  then id:='1'
  else id:=fDM.IBQueryVisits.FieldByName('ID_SPR').AsString;
 ComboBox1.ItemIndex:=StrToInt(id)-1;
 ComboBox2.ItemIndex:=StrToInt(id)-1;
// DBEdit1.Text:=ComboBox1.Text;
// DBAddCode1.Text:=ComboBox2.Text;
//   fDM.DSEditSpr.DataSet.Filter:='ID='+id+'';
//   fDM.DSEditSpr.DataSet.Filtered:=true;
//   DBAddDisease1.Text:=fDM.DSEditSpr.DataSet.FieldByName('DISEASE').AsString;
//   DBAddCode1.Text:=fDM.DSEditSpr.DataSet.FieldByName('CODE').AsString;
//   fDM.DSEditSpr.DataSet.Filter:='';
//   fDM.DSEditSpr.DataSet.Filtered:=false;
end;

procedure TEditFormClient.FormClose(Sender: TObject; var Action: TCloseAction);
var id:Integer;
begin
 EditFormClient.ComboBox3.ItemIndex:=-1;
 id:=MainForm.DBGridClients.DataSource.DataSet.FieldByName('ID').Value;
 fDM.IBQueryClients.Close;
 fDM.IBQueryClients.SQL.Text:='select * from clients order by SURNAME,ID';
 fDM.IBQueryClients.Open;
 fDM.IBQueryVisits.Close;
 fDM.IBQueryVisits.SQL.Text:='select * from visits where id_clnt like ' + MainForm.DBEdit1.text + ' order by DATA,ID,ID_CLNT';
 fDM.IBQueryVisits.Open;
 GroupBox2.Visible:=false;
 fDM.IBQueryClients.Locate('ID',id,[LoPartialKey]);
end;

procedure TEditFormClient.FormCreate(Sender: TObject);
begin
 ComboBox1.Items.Clear;
 ComboBox2.Items.Clear;
 fDM.DSEditSpr.DataSet.First;
 while not fDM.DSEditSpr.DataSet.Eof do
  begin
   ComboBox1.Items.Add(fDM.DSEditSpr.DataSet.FieldByName('DISEASE').AsString);
   ComboBox2.Items.Add(fDM.DSEditSpr.DataSet.FieldByName('CODE').AsString);
   fDM.DSEditSpr.DataSet.Next;
  end;
end;

end.

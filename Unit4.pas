unit Unit4;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, DBCtrls, Mask, ComCtrls, dblookup, DB;

type
  TEditFormVisit = class(TForm)
    GroupBox1: TGroupBox;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label12: TLabel;
    DBEditData: TDBEdit;
    DBEditTime: TDBEdit;
    ButtonSaveVisit: TButton;
    ButtonDelete: TButton;
    BtCancel: TButton;
    Button2: TButton;
    Button3: TButton;
    DBEditID: TDBEdit;
    DBEditDiSease1: TEdit;
    DBEditCode1: TEdit;
    ComboBox1: TComboBox;
    ComboBox2: TComboBox;
    DBEditVisit: TDBRichEdit;
    DBEdit5: TDBRichEdit;
    Label18: TLabel;
    ComboBoxTreatment: TComboBox;
    Label17: TLabel;
    DBEdit1: TDBRichEdit;
    procedure Button2Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Button3Click(Sender: TObject);
    procedure ButtonSaveVisitClick(Sender: TObject);
    procedure ButtonDeleteClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure ComboBox1Change(Sender: TObject);
    procedure ComboBox2Change(Sender: TObject);
    procedure BtCancelClick(Sender: TObject);
    procedure ComboBoxTreatmentChange(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  EditFormVisit: TEditFormVisit;

implementation

uses Unit1, Unit2, Unit3;

{$R *.dfm}

procedure TEditFormVisit.BtCancelClick(Sender: TObject);
begin
  // Мгновенно отменяем все пакетные изменения текущего визита в памяти компьютера
  fDM.IBQueryVisits.CancelBatch;
  EditFormVisit.Close;
end;

procedure TEditFormVisit.Button2Click(Sender: TObject);
begin
 MainForm.RecCount.Caption:=IntToStr(FDM.IBQueryClients.RecordCount);
 fDM.IBQueryVisits.Cancel;
 EditFormVisit.Close;
end;

procedure TEditFormVisit.Button3Click(Sender: TObject);
begin
 fDM.DSEditSpr.DataSet.Filter:='';
 fDM.DSEditSpr.DataSet.Filtered:=false;
end;

procedure TEditFormVisit.ButtonDeleteClick(Sender: TObject);
begin
 if Application.MessageBox('Вы действительно хотите удалить текущую запись?', '', MB_ICONQUESTION + MB_YESNO) = IDNO then
  Exit;

 try
   // 1. УДАЛЯЕМ СТРОКУ (метод Edit перед этим вызывать НЕЛЬЗЯ)
   fDM.IBQueryVisits.Delete;

   // 2. МГНОВЕННО УДАЛЯЕМ ИЗ ФИЗИЧЕСКОГО ФАЙЛА БАЗЫ ДАННЫХ
   // Сбрасываем команду удаления пакетом прямо в файл Access
   fDM.IBQueryVisits.UpdateBatch;

   // 3. Закрываем форму после успешного удаления
   EditFormVisit.Close;

 Except
  on E: exception do
   begin
    // Если что-то пошло не так (например, база заблокирована), отменяем удаление в памяти
    fDM.IBQueryVisits.CancelBatch;
    Application.MessageBox(Pchar(E.Message), 'Ошибка', MB_Iconerror);
   end;
 end;
end;

procedure TEditFormVisit.ButtonSaveVisitClick(Sender: TObject);
begin
 try
   // Проверяем, находится ли таблица в режиме редактирования/добавления.
   // Если нет — принудительно включаем режим редактирования.
   if not (fDM.IBQueryVisits.State in [dsEdit, dsInsert]) then
     fDM.IBQueryVisits.Edit;

   // Заполняем поля данными из элементов интерфейса
   if DBEditID.Text <> '' then
     fDM.IBQueryVisits.FieldByName('ID_SPR').Value := StrToInt(DBEditID.Text);

   fDM.IBQueryVisits.FieldByName('DATA').Value := DBEditData.Text;
   // fDM.IBQueryVisits.FieldByName('TIME').Value := DBEditTime.Text;
   fDM.IBQueryVisits.FieldByName('TREATMENT').Value := DBEditVisit.Text;

   // Фиксируем изменения в локальном буфере памяти компьютера
   fDM.IBQueryVisits.Post;

   // --- МГНОВЕННАЯ ЗАПИСЬ В ФАЙЛ БАЗЫ ДАННЫХ ---
   // Пачкой сбрасываем сохраненный визит из оперативной памяти в файл Access
   fDM.IBQueryVisits.UpdateBatch;

   // Закрываем форму редактирования визита после успешного сохранения
   EditFormVisit.Close;

 Except
  on E: exception do
   begin
    // В случае сбоя сети или файла отменяем незаписанный черновик в памяти
    fDM.IBQueryVisits.CancelBatch;
    Application.MessageBox(Pchar(E.Message), 'Ошибка при сохранении визита', MB_Iconerror);
   end;
 end;
end;

procedure TEditFormVisit.ComboBox1Change(Sender: TObject);
begin
 ComboBox2.ItemIndex:=ComboBox1.ItemIndex;
// DBEditDisease1.Text:=ComboBox1.Text;
// DBEditCode1.Text:=ComboBox2.Text;
 fDM.DSVisits.DataSet.Edit;
 DBEdit1.Text:=ComboBox1.Text;
 fDM.DSVisits.DataSet.Post;
 fDM.IBQueryVisits.Edit;
 fDM.IBQueryVisits.FieldByName('ID_SPR').Value:=ComboBox1.ItemIndex+1;
 fDM.IBQueryVisits.Post;
  // В самом конце процедуры подтверждаем транзакцию:
  if fDM.IBDataBase.InTransaction then
    fDM.IBDataBase.CommitTrans;
end;

procedure TEditFormVisit.ComboBox2Change(Sender: TObject);
begin
 ComboBox1.ItemIndex:=ComboBox2.ItemIndex;
 fDM.DSVisits.DataSet.Edit;
 DBEdit1.Text:=ComboBox1.Text;
 fDM.DSVisits.DataSet.Post;
// DBEditDisease1.Text:=ComboBox1.Text;
// DBEditCode1.Text:=ComboBox2.Text;
 fDM.IBQueryVisits.Edit;
 fDM.IBQueryVisits.FieldByName('ID_SPR').Value:=ComboBox2.ItemIndex+1;
 fDM.IBQueryVisits.Post;
end;

procedure TEditFormVisit.ComboBoxTreatmentChange(Sender: TObject);
begin
 fDM.DSVisits.Edit;
 if DBEditVisit.Text=''
 then DBEditVisit.Text:=DBEditVisit.Text+ComboBoxTreatment.Text
 else DBEditVisit.Text:=DBEditVisit.Text+', '+ComboBoxTreatment.Text;
 fDM.DSVisits.DataSet.Post;
end;

procedure TEditFormVisit.FormActivate(Sender: TObject);
var id:String;
begin
 if (fDM.IBQueryVisits.RecordCount=0) or (fDM.IBQueryVisits.FieldByName('ID_SPR').AsString='')
  then id:='1'
  else id:=fDM.IBQueryVisits.FieldByName('ID_SPR').AsString;
 ComboBox1.ItemIndex:=StrToInt(id)-1;
 ComboBox2.ItemIndex:=StrToInt(id)-1;
 DBEditDisease1.Text:=ComboBox1.Text;
 DBEditCode1.Text:=ComboBox2.Text;
end;

procedure TEditFormVisit.FormClose(Sender: TObject; var Action: TCloseAction);
begin
 fDM.DSEditSpr.DataSet.Filter:='';
 fDM.DSEditSpr.DataSet.Filtered:=false;
end;

procedure TEditFormVisit.FormCreate(Sender: TObject);
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

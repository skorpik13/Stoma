unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Inifiles, DB, IBDatabase, Grids, DBGrids, IBCustomDataSet, IBQuery,
  ExtCtrls, DBCtrls, IBTable, StdCtrls, Mask, Menus, ShellAPI;

type
  TMainForm = class(TForm)
    DBGridClients: TDBGrid;
    DBGridVisits: TDBGrid;
    ButtonEditClient: TButton;
    EditFindSurname: TEdit;
    DBEdit1: TDBEdit;
    ButtonAddClient: TButton;
    Panel1: TPanel;
    Splitter1: TSplitter;
    Panel2: TPanel;
    Splitter2: TSplitter;
    Label12: TLabel;
    Button1: TButton;
    ButtonEditVisit: TButton;
    MainMenu1: TMainMenu;
    N1: TMenuItem;
    N2: TMenuItem;
    N3: TMenuItem;
    N4: TMenuItem;
    N5: TMenuItem;
    N7: TMenuItem;
    N6: TMenuItem;
    N8: TMenuItem;
    N9: TMenuItem;
    PDF1: TMenuItem;
    RTF1: TMenuItem;
    N10: TMenuItem;
    N11: TMenuItem;
    N12: TMenuItem;
    PDF2: TMenuItem;
    RTF2: TMenuItem;
    N13: TMenuItem;
    N14: TMenuItem;
    N15: TMenuItem;
    CheckBox1: TCheckBox;
    RecCount: TLabel;
    procedure FormCloseQuery(Sender: TObject; var CanClose: Boolean);
    procedure ButtonEditClientClick(Sender: TObject);
    procedure EditFindSurnameChange(Sender: TObject);
    procedure DBEdit1Change(Sender: TObject);
    procedure ButtonAddClientClick(Sender: TObject);
    procedure DBGridClientsCellClick(Column: TColumn);
    procedure Button1Click(Sender: TObject);
    procedure DBGridClientsDblClick(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure ButtonEditVisitClick(Sender: TObject);
    procedure DBGridVisitsCellClick(Column: TColumn);
    procedure DBGridVisitsDblClick(Sender: TObject);
    procedure N3Click(Sender: TObject);
    procedure PDF1Click(Sender: TObject);
    procedure RTF1Click(Sender: TObject);
    procedure N8Click(Sender: TObject);
    procedure N10Click(Sender: TObject);
    procedure N11Click(Sender: TObject);
    procedure PDF2Click(Sender: TObject);
    procedure RTF2Click(Sender: TObject);
    procedure N13Click(Sender: TObject);
    procedure N7Click(Sender: TObject);
    procedure DBGridClientsDrawColumnCell(Sender: TObject; const Rect: TRect;
      DataCol: Integer; Column: TColumn; State: TGridDrawState);
    procedure DBGridVisitsDrawColumnCell(Sender: TObject; const Rect: TRect;
      DataCol: Integer; Column: TColumn; State: TGridDrawState);
    procedure N15Click(Sender: TObject);
    procedure CheckBox1Click(Sender: TObject);
  private

  public
    { Public declarations }
  end;

var
  MainForm: TMainForm;

implementation

uses Unit2, Unit3, Unit4, Unit5, Unit6;

{$R *.dfm}

procedure TMainForm.ButtonEditClientClick(Sender: TObject);
begin
 EditFormClient.Caption:='Редактирование информации о пациенте';
 EditFormClient.ShowModal;
end;

procedure TMainForm.ButtonEditVisitClick(Sender: TObject);
begin
 EditFormVisit.Show;
end;

procedure TMainForm.CheckBox1Click(Sender: TObject);
begin
 if CheckBox1.Checked=true
  then
   begin
    DBGridClients.Columns[0].Visible:=true;
    DBGridVisits.Columns[0].Visible:=true;
   end
  else
   begin
    DBGridClients.Columns[0].Visible:=false;
    DBGridVisits.Columns[0].Visible:=false;
   end;
end;

procedure TMainForm.Button1Click(Sender: TObject);
begin
 fDM.IBQueryClients.Close;
 fDM.IBQueryClients.Open;
 fDM.IBQueryVisits.Close;
 fDM.IBQueryVisits.Open;
 DBGridClients.Update;
 DBGridVisits.Update;
end;

procedure TMainForm.ButtonAddClientClick(Sender: TObject);
var {id,}id_max:integer;
begin
 EditFormClient.ComboBox3.ItemIndex:=0;
 with fDM.IBQueryClients do
  begin
   Close;
   SQL.Text:='select * from clients order by ID,SURNAME';
   Open;
   Last;
  end;
 if fDM.IBQueryClients.RecordCount=0
  then
   begin
//    id:=1;
    id_max:=0;
   end
  else
   begin
//    id:=fDM.IBQueryClients.FieldByName('ID').Value;
    id_max:=fDM.IBQueryClients.FieldByName('ID').Value;
   end;
// fDM.IBQueryClients.Locate('ID',id,[LoPartialKey]);
 fDM.IBQueryClients.Append;
 fDM.IBQueryClients.Edit;
 fDM.IBQueryClients.FieldByName('ID').Value:=id_max+1;
 with fDM.IBQueryVisits do
  begin
   Close;
   SQL.Text:='select * from visits order by ID,ID_CLNT';
   Open;
  end;
 fDM.IBQueryVisits.Append;
 fDM.IBQueryVisits.Edit;
 fDM.IBQueryVisits.FieldByName('ID_CLNT').Value:=fDM.IBQueryClients.FieldByName('ID').Value;
 fDM.IBQueryVisits.FieldByName('DATA').Value:=DateToStr(Date);
// fDM.IBQueryVisits.FieldByName('TIME').Value:=Copy(TimeToStr(Time),1,5);
// fDM.DSEditClients.DataSet.Locate('ID',id,[LoPartialKey]);
 EditFormClient.Caption:='Добавление пациента';
 EditFormClient.Show;
end;

procedure TMainForm.DBEdit1Change(Sender: TObject);
var s: string;
begin
 s:='' + DBEdit1.text;
 s := QuotedStr(s);
 with fDM.IBQueryVisits do
  begin
   Close;
   SQL.Clear;
   SQL.Text := 'select * from visits where id_clnt like ' + s + ' order by DATA,ID,ID_CLNT';
   Open;
  end;
end;

procedure TMainForm.DBGridClientsCellClick(Column: TColumn);
var id:String;
begin
 id:=DBGridClients.DataSource.DataSet.FieldByName('ID').AsString;
 fDM.DSEditClients.DataSet.Locate('ID',id,[LoPartialKey]);
end;

procedure TMainForm.DBGridClientsDblClick(Sender: TObject);
begin
 EditFormClient.GroupBox2.Visible:=true;
 EditFormClient.Caption:='Редактирование информации о пациенте';
 EditFormClient.ShowModal;
end;

procedure TMainForm.DBGridClientsDrawColumnCell(Sender: TObject;
  const Rect: TRect; DataCol: Integer; Column: TColumn; State: TGridDrawState);
var holdColor: TColor;
begin
holdColor := DBGridClients.Canvas.Brush.Color;
with DBGridClients.Canvas do
    begin
      if (gdSelected in State) or (gdFocused in State) or (gdRowSelected in State) then
       begin
        Brush.Color:=128;
        Font.Color:=16777215;
       end else
      if (DBGridClients.DataSource.DataSet.RecNo mod 2)=0
      then
       begin
        Brush.Color := holdColor;
       end else Brush.Color:=15780518;
     end;
  DBGridClients.DefaultDrawColumnCell(Rect, DataCol, Column, State);
end;

procedure TMainForm.DBGridVisitsCellClick(Column: TColumn);
var id:String;
begin
 if fDM.IBQueryVisits.RecordCount<>0
  then
   begin
    id:=DBGridVisits.DataSource.DataSet.FieldByName('ID').AsString;
    fDM.DSEditVisits.DataSet.Locate('ID',id,[LoPartialKey]);
   end;
end;

procedure TMainForm.DBGridVisitsDblClick(Sender: TObject);
begin
 if fDM.IBQueryVisits.RecordCount<>0
  then EditFormVisit.Show;
end;

procedure TMainForm.DBGridVisitsDrawColumnCell(Sender: TObject;
  const Rect: TRect; DataCol: Integer; Column: TColumn; State: TGridDrawState);
var holdColor: TColor;
begin
holdColor := DBGridVisits.Canvas.Brush.Color;
with DBGridVisits.Canvas do
    begin
      if (gdSelected in State) or (gdFocused in State) or (gdRowSelected in State) then
       begin
        Brush.Color:=128;
        Font.Color:=16777215;
       end else
      if (DBGridVisits.DataSource.DataSet.RecNo mod 2)=0
      then
       begin
        Brush.Color := holdColor;
       end else Brush.Color:=15780518;
    end;
  DBGridVisits.DefaultDrawColumnCell(Rect, DataCol, Column, State);
end;

procedure TMainForm.EditFindSurnameChange(Sender: TObject);
var s: string;
begin
 s := QuotedStr('%' + AnsiUpperCase(EditFindSurname.Text) + '%');
 with fDM.IBQueryClients do
  begin
   Close;
   SQL.Clear;
   SQL.Text := 'select * from clients where surname like ' + s + 'order by SURNAME,ID';
   Open;
  end;
end;

procedure TMainForm.FormActivate(Sender: TObject);
begin
 EditFindSurname.SetFocus;
 RecCount.Caption:=IntToStr(FDM.IBQueryClients.RecordCount);
end;

procedure TMainForm.FormCloseQuery(Sender: TObject; var CanClose: Boolean);
begin
 fDM.IBQueryClients.Close;
 fDM.IBQueryVisits.Close;
 fDM.IBDataBase.Connected:=false;
end;

procedure TMainForm.N10Click(Sender: TObject);
begin
 ReportForm.Show;
 ReportForm.frxReport1.Print;
end;

procedure TMainForm.N11Click(Sender: TObject);
begin
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='ID='''+DBGridClients.DataSource.DataSet.FieldByName('ID').AsString+'''';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=true;
// ReportForm.frxDBDSSpr.DataSource.DataSet.Filter:='ID='''+DBGridVisits.DataSource.DataSet.FieldByName('ID_SPR').AsString+'''';
// ReportForm.frxDBDSSpr.DataSource.DataSet.Filtered:=true;
 ReportForm.Show;
 ReportForm.frxReport1.ShowReport();
 ReportForm.Close;
end;

procedure TMainForm.N13Click(Sender: TObject);
begin
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='ID='''+DBGridClients.DataSource.DataSet.FieldByName('ID').AsString+'''';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=true;
 ReportForm.Show;
 ReportForm.frxReport1.Print;
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=false;
end;

procedure TMainForm.N15Click(Sender: TObject);
begin
 ShellExecute(0, nil,'bd.bat',nil,nil,1);
end;

procedure TMainForm.N3Click(Sender: TObject);
begin
 Close;
end;

procedure TMainForm.N7Click(Sender: TObject);
begin
 SPRForm.Show;
end;

procedure TMainForm.N8Click(Sender: TObject);
begin
 ReportForm.Show;
 ReportForm.frxReport1.ShowReport();
 ReportForm.Close;
end;

procedure TMainForm.PDF1Click(Sender: TObject);
begin
 ReportForm.frxReport1.ShowReport();
 ReportForm.frxReport1.Export(ReportForm.frxPDFExport1);
 ReportForm.Close;
end;

procedure TMainForm.PDF2Click(Sender: TObject);
begin
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='ID='''+DBGridClients.DataSource.DataSet.FieldByName('ID').AsString+'''';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=true;
 ReportForm.frxReport1.ShowReport();
 ReportForm.frxReport1.Export(ReportForm.frxPDFExport1);
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=false;
 ReportForm.Close;
end;

procedure TMainForm.RTF1Click(Sender: TObject);
begin
 ReportForm.frxReport1.ShowReport();
 ReportForm.frxReport1.Export(ReportForm.frxRTFExport1);
 ReportForm.Close;
end;

procedure TMainForm.RTF2Click(Sender: TObject);
begin
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='ID='''+DBGridClients.DataSource.DataSet.FieldByName('ID').AsString+'''';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=true;
 ReportForm.frxReport1.ShowReport();
 ReportForm.frxReport1.Export(ReportForm.frxRTFExport1);
 ReportForm.frxDBDSClients.DataSource.DataSet.Filter:='';
 ReportForm.frxDBDSClients.DataSource.DataSet.Filtered:=false;
 ReportForm.Close;
end;

end.

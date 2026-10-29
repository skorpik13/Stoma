unit Unit2;

interface

uses
  SysUtils, Classes, IBTable, DB, IBDatabase, IBCustomDataSet, IBQuery, Inifiles, StdCtrls,Windows, Messages, Variants, Graphics, Controls, Forms,
  Dialogs, Grids, DBGrids,  ExtCtrls, DBCtrls, ADODB;

type
  TFdm = class(TDataModule)
    DSClients: TDataSource;
    DSVisits: TDataSource;
    DSEditClients: TDataSource;
    DSEditVisits: TDataSource;
    DSEditSpr: TDataSource;
    IBDataBase: TADOConnection;
    IBQueryClients: TADOQuery;
    IBQueryVisits: TADOQuery;
    IBTableClients: TADOTable;
    IBTableAccount: TADOTable;
    IBTableSpr: TADOTable;
    IBQueryVisitsID: TSmallintField;
    IBQueryVisitsID_CLNT: TSmallintField;
    IBQueryVisitsDATA: TDateTimeField;
    IBQueryVisitsTREATMENT: TWideStringField;
    IBQueryVisitsVISIT: TWideStringField;
    IBQueryVisitsID_SPR: TSmallintField;
    IBQueryVisitsTIME: TWideStringField;
    IBTableSprID: TSmallintField;
    IBTableSprCODE: TWideStringField;
    IBTableSprDISEASE: TWideStringField;
    ADOTableSPR2: TADOTable;
    DSSpr: TDataSource;
    ADOTableSPR2ID: TSmallintField;
    ADOTableSPR2CODE: TWideStringField;
    ADOTableSPR2DISEASE: TWideStringField;
    IBQueryVisitsDIAGNOZ: TWideStringField;
    IBQueryClientsID: TSmallintField;
    IBQueryClientsSURNAME: TWideStringField;
    IBQueryClientsNAME: TWideStringField;
    IBQueryClientsPATRONYMIC: TWideStringField;
    IBQueryClientsAGE: TSmallintField;
    IBQueryClientsCITY: TWideStringField;
    IBQueryClientsPR: TWideStringField;
    IBQueryClientsSTREET: TWideStringField;
    IBQueryClientsHOUSE: TWideStringField;
    IBQueryClientsBUILDING: TWideStringField;
    IBQueryClientsFLAT: TWideStringField;
    IBQueryClientsMOBILE1: TWideStringField;
    IBQueryClientsMOBILE2: TWideStringField;
    IBQueryClientsTEL: TWideStringField;
    IBQueryClientsBIRTHDAY: TDateTimeField;
    IBTableClientsID: TSmallintField;
    IBTableClientsSURNAME: TWideStringField;
    IBTableClientsNAME: TWideStringField;
    IBTableClientsPATRONYMIC: TWideStringField;
    IBTableClientsAGE: TSmallintField;
    IBTableClientsCITY: TWideStringField;
    IBTableClientsPR: TWideStringField;
    IBTableClientsSTREET: TWideStringField;
    IBTableClientsHOUSE: TWideStringField;
    IBTableClientsBUILDING: TWideStringField;
    IBTableClientsFLAT: TWideStringField;
    IBTableClientsMOBILE1: TWideStringField;
    IBTableClientsMOBILE2: TWideStringField;
    IBTableClientsTEL: TWideStringField;
    IBTableClientsBIRTHDAY: TDateTimeField;
    procedure DataModuleCreate(Sender: TObject);
    procedure DataModuleDestroy(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Fdm: TFdm;

implementation

Uses Unit1, Unit3, Unit4, Unit5, Unit6;

{$R *.dfm}

procedure TFdm.DataModuleCreate(Sender: TObject);
var
 s: string;
 FIniFile: TInifile;
begin
 try
  FInifile := TIniFile.Create(ExtractFilePath(Application.ExeName) + 'config.ini');
  try
//   fDM.IBDataBase.DataBaseName := FIniFile.ReadString('Base', 'Path', '');
  if fDM.IBDataBase.Connected=true then fDM.IBDataBase.Connected:=false;
  fDM.IBDataBase.ConnectionString:='Provider=Microsoft.Jet.OLEDB.4.0;Password="";Data Source='+FIniFile.ReadString('Base', 'Path', '')+';Persist Security Info=False;'
  finally
   FIniFile.Free;
  end;
   if fDM.IBDatabase.Connected=false
   then fDM.IBDatabase.Connected:=true;
   // Этот запрос пройдется по всей базе и пересчитает AGE на актуальный текущий год компьютера
   fDM.IBDataBase.Execute('UPDATE clients SET AGE = DateDiff("yyyy", [BIRTHDAY], Date())');
   if fDM.IBTableClients.Active=false
   then fDM.IBTableClients.Active:=true;
   if fDM.IBTableAccount.Active=false
   then fDM.IBTableAccount.Active:=true;
   if fDM.IBTableSpr.Active=false
   then fDM.IBTableSpr.Active:=true;
   fDM.IBQueryClients.Close;
   fDM.IBQueryVisits.Close;
   with fDM.IBQueryClients do begin
                     SQL.Text:='select * from clients order by SURNAME,ID';
                     Open;
                    end;
   s:='' + MainForm.DBEdit1.text;
   if s='' then s:='0';
   with fDM.IBQueryVisits do begin
                     SQL.Text:='select * from visits where id_clnt like ' + s + ' order by DATA,ID,ID_CLNT';
                     Open;
                    end;
 Except
  on E: exception do
   begin
    Application.MessageBox(Pchar(E.Message), 'Ошибка', MB_Iconerror);
    Halt;
   end;
 end;
end;

procedure TFdm.DataModuleDestroy(Sender: TObject);
begin
 fDM.IBDataBase.Connected := false;
end;

end.

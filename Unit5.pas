unit Unit5;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Unit2, Unit3, Unit4, Unit1, frxClass, frxPreview, frxDBSet,
  frxExportPDF, frxExportRTF;

type
  TReportForm = class(TForm)
    frxReport1: TfrxReport;
    frxDBDSClients: TfrxDBDataset;
    frxRTFExport1: TfrxRTFExport;
    frxPDFExport1: TfrxPDFExport;
    frxDBDataset2: TfrxDBDataset;
    frxDBDSSpr: TfrxDBDataset;
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  ReportForm: TReportForm;

implementation

{$R *.dfm}

procedure TReportForm.FormClose(Sender: TObject; var Action: TCloseAction);
begin
 frxDBDSClients.DataSource.DataSet.Filter:='';
 frxDBDSClients.DataSource.DataSet.Filtered:=false;
 frxDBDSSpr.DataSource.DataSet.Filter:='';
 frxDBDSSpr.DataSource.DataSet.Filtered:=false;
end;

end.

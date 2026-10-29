unit Unit6;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Grids, DBGrids, ExtCtrls, Unit2;

type
  TSPRForm = class(TForm)
    Panel1: TPanel;
    Panel2: TPanel;
    Splitter1: TSplitter;
    DBGrid1: TDBGrid;
    Button4: TButton;
    procedure Button4Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  SPRForm: TSPRForm;

implementation

{$R *.dfm}

procedure TSPRForm.Button4Click(Sender: TObject);
begin
 Close;
end;

procedure TSPRForm.FormActivate(Sender: TObject);
begin
 fDM.ADOTableSPR2.Active:=true;
end;

end.

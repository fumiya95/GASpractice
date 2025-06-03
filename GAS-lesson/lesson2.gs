function func2_3_1() {
  //アクティブなスプレットシートを取得する
  let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  //取得したスプレットシートの名前
  console.log(spreadSheet.getName());
}

function func2_3_2(){
  //スプレットシートID
  let id = '1YtXtJzt7IT1tOM9R14enFdnWKZWKjuJhpm0ivBXr3do'
  //idでスプレッドシートを取得する
  let spreadSheet = SpreadsheetApp.openById(id);
  //取得したスプレッドシートの名前を出力する
  console.log('IDで取得' + spreadSheet.getName());
}

function func2_3_3(){
  //スプレッドシートのURL
  let url = 'https://docs.google.com/spreadsheets/d/1YtXtJzt7IT1tOM9R14enFdnWKZWKjuJhpm0ivBXr3do/edit?gid=0#gid=0'
  //URLでスプレットシートを取得する
  let spreadSheet = SpreadsheetApp.openByUrl(url);
  //取得したスプレットシートの名前を出力する
  console.log('URLで取得'+ spreadSheet.getName());
}

function func2_3_4(){
  //アクティブなスプレットシートを取得
  let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  //アクティブなシートを取得する
  let sheet = spreadSheet.getActiveSheet();
  //取得したシートの名前を出力する
  console.log(sheet.getName());
}

function func2_3_5(){
  //アクティブなシートを取得する
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //B4の値を取得する
  let value = sheet.getRange('B4').getValue();
  console.log(' B4の値:' + value); 
  //B6の値を変更する
  sheet.getRange('B6').setValue('算数');
  }


function example2_3(){
    //アクティブなシートを取得する
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    //english,japanese,mathの宣言と値の代入
    let english = sheet.getRange('C4').getValue();
    let japanese = sheet.getRange('C5').getValue();
    let math = sheet.getRange('C6').getValue();
    //3つの数の合計
    let sum = english + japanese + math;
    //C7に合計値を設定する
    sheet.getRange('C7').setValue(sum);  
    }
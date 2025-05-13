function func2_1_1() {
  //変数aの宣言
  let a;
  //変数の代入
  a = 10;
  console.log('a=' + a);
  }

  function func2_2_2(){
    //変数の宣言、初期化
    let a = 1;
    console.log('a=' + a);
    //変数a の値を変更する
    a = 10;
    console.log('a=' + a);
    //変数a の値を変更する
    a = 'Hello';
    console.log('a='+ a);
  }

  function func2_2_3(){
  let n1 = 5;
  let n2 = 3;
  let ans = n1 + n2;
  console.log(ans);
  }

function func2_2_9(){
  let s1 = 'Hello';
  let s2 = s1.toUpperCase();
  let length = s1.length
  console.log('元の単語' + s1);
  console.log('大文字に変換' + s2);
  console.log('文字列の長さ' + length);
}
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
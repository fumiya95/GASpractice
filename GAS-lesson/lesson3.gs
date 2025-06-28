function func3_1_1() {
  let num = 100;
  //条件分岐
  if (num >= 100){
    console.log('numは100以上');
    }
    console.log('処理終了')
}

function func3_1_2(){
  let num = 100;
  console.log(num >= 100);
}

function func3_1_5(){
  let num = 100;
  //条件分岐
  if (num >= 100) {
    console.log('numは100以上');
    }else{
      console.log('numは100未満');
    }
    console.log('処理が終了');
}

function func3_1_9(){
  let n = 2;
  //条件分岐
  switch (n){
    case 1:
     console.log('ONE');
     break;
    case 2:
     console.log('TWO');
     break
    case 3:
     console.log('THREE')
     break;
    default:
     console.log('OTHER')
     break;
  }
}

function func3_1_9(){
  let n = 8;
  //条件分岐
  if (n == 1){
    console.log('ONE')
  }else if (n == 2){
    console.log('TWO')
  }else if (n == 3){
    console.log('THREE')
  }else{
    console.log('other')
  }
}

function func3_2_1(){
  let i = 0;
  //while文
  while (i < 5){
    console.log('i=' + i);
    i++;
  }
}

function func3_2_2(){
  let i = 0;
  //while文による繰り返し
  while (i < 5){
    console.log('i=' + i);
    i++;
    //iが２のときにループを抜ける。
    if (i == 2){
      break;
    }
  }
}

function func3_2_3(){
  let i = 0;
  //while文にによる繰り返し。
  while (i < 5){
    i++;
    //iが２のときループの先頭に戻る
    if (i == 2){
      continue;
    }
    console.log('i=' + i);
  }
}

function func3_3_1() {
  //アクティブなシートの取得
  let sheet = SpreadsheetApp.getActiveSheet();
  //シートをクリア
  sheet.clear()
  //1~5の数値をセルに書き込む
  for (let i = 1; i <= 5; i++){
    sheet.getRange(1, i).setValue(i); //1行目、i列目に値を設定
  }
}

function func3_3_2(){
  //アクティブなシートの取得
  let sheet = SpreadsheetApp.getActiveSheet();
  //シートをクリア
  sheet.clear();
  let number = 1;
  //5行4列のデータを出力する（row:行,column:列）
  for (let row = 1; row <= 5; row++){
   for (let column = 1; column <=4 ; column++){
    //column行、row列目に値を設定
    sheet.getRange(row, column).setValue(number);
    number++;
   }

  }
  //データが入力されているRageを取得
  let range = sheet.getDataRange();
  //データの範囲を出力
  console.log('データの存在範囲:' +range.getA1Notation());
  console.log('データの最終列:' +sheet.getLastColumn());
  console.log('データの最終行:' +sheet.getLastRow());
}

function func3_3_3(){
let sheet = SpreadsheetApp.getActiveSheet();
sheet.clear();
let number = 1;
//５行目４列目のデータを出力する(row:行、column列)
for (let row = 1; row <= 5; row++){
  for (let column = 1; column <= 4; column++){
    //column行,row列目に値を設定
    sheet.getRange(row,column).setValue(number);
    number++;
  }
}
let range = sheet.getDataRange();
//表に線を追加する
range.setBorder(true, true, true,true, true,true);
//表の文字を中央寄せにする
range.setHorizontalAlignment("center");
//左上の文字をふと文字に
sheet.getRange('A1').setFontWeight('bold');
//最後の行の見た目をめゾッドちぇーんで変更
sheet.getRange('A5:D5').setFontStyle('italic')
.setFontFamily('Courier New')
.setFontSize(12)
.setFontColor('blue')
.setBackground('silver');
}
function problem1() {
  //アクティブなシートの取得
  let sheet = SpreadsheetApp.getActiveSheet();
  let value =sheet.getRange('A1').getValue();
  
  if(value % 2 == 0){
  sheet.getRange('B1').setValue('偶数');
  }else{
    sheet.getRange('B1').setValue('奇数');
  }
console.log('syuuryou')
}

function problem2(){
  //アクティブなシートの取得
  let sheet = SpreadsheetApp.getActiveSheet();
   sheet.clear()

  let row = 1；；
  while (row <= 3){
    sheet.getRange(row, 1).setValue("GAS!");
    row++;
  }
}


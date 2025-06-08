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
    //iが２のときループの先頭に戻る。
    if (i == 2){
      continue;
    }
    console.log('i=' + i);
  }
}
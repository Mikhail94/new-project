let player1 = 0;
let player2 = 0; 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for ( let i = 1; i<4; i++) {
let throw1Player1 = getRandomIntInclusive(1, 6)
console.log(throw1Player1)
player1 += throw1Player1
let throw1Player2 = getRandomIntInclusive(1, 6)
console.log(throw1Player2)
player2 += throw1Player2
 }
console.log(player1)
console.log(player2)

if (player1 > player2){
    console.log("Player 1 win")
}
else if (player2 > player1){
    console.log("Player 2 win")
}
else {
    console.log('No one')
}
/////////////////////////////////////////////////////////////////////////////////////////////////



function Friday13th() {
  let count = 0;
  //let today = Date.now();
  let date = new Date(2000, 0, 13);  
  while (date < Date.now()) {
    if (date.getDay() === 5 && date.getDate() === 13) {
      count ++;      
    }
        
         date.setMonth(date.getMonth() + 1);
  }  
  return count;
}
console.log (Friday13th())


//////////////////////////////////////////////////////////////////////////////////////////
function splitNumber(num, parts) {
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      let randomNum = Math.floor(Math.random() * num);
      result.push(randomNum);
      num -= randomNum;
    }
    result.push(num);
    return console.log(result);
  }
  splitNumber(15, 3)


function splitNumber(num, parts) {
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      let randomNum = Math.random() * num;
      result.push(randomNum.toFixed(2));
      num -= randomNum;
    }
    result.push(num.toFixed(2));
    return console.log(result);
  }
  splitNumber(15, 3)
/////////////////////////////////////////////////////////////////////////


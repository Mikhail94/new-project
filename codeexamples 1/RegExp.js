let newStr = 'limitli';

console.log(newStr.replace(/li$/, 'e'));          /// меняем буквы в строке $ в конце строки говорит о том что мы меняем в конце 
console.log(newStr.replace(/^li/, 'e'));            /// меняем буквы в строке ^ в конце строки говорит о том что мы меняем в начале строки 

const reg = /i/;
const regObj = RegExp("\w.\d");
const reg1 = /limit|profit/;
const reg2 = /[0-9]+/;
let newStr1 = 'profit limit';
console.log(newStr1.replace(reg1, 'e'));
let newStr2 = '123';
console.log(newStr2.replace(reg2, 'fff'));

const reg3 = /.+/;
newStr3 = 'Hello \nWorld';
console.log(newStr3.replace(reg3, 'fff'));

const reg4 = /l{1,3}/;
newStr4 = 'Heddlol ddfd ll l';
console.log(newStr4.replace(reg4, 'fff'));
///
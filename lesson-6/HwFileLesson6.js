let strToNum = '123321';
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i<3; i++) {
     sum1 += parseInt(strToNum[i]);     
}
for (let i = 3; i<strToNum.length; i++) {
    sum2 += parseInt(strToNum[i]);     
}
if (sum1 === sum2 ) {
    console.log('Yes');
}
else {
    console.log ('No');
}


let n = 1000;
let counter = 0;
while (n>=50) {
    n/=2
    counter++
}
console.log(counter)
console.log(n);



 let arr = [12, 25, 20, 25, 59, 79];
 let sum = 0;
 let averageValue = 0;
 for (let i = 0; i<arr.length; i++) {
    sum += parseInt(arr[i]);
    averageValue = sum/(i+1);     
 }
 console.log(averageValue);



let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c');
console.log (arr1);



let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 0, 'a', 'b');
arr2.splice(6, 0, 'c');
arr2.push('e');
console.log (arr2);

let arr3 = [3, 4, 1, 2, 7];
arr1.sort((a,b) => a-b);
console.log (arr3);



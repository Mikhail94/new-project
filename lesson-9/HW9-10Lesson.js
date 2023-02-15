function getRandomArbitrary(min, max) {
    min = 1000;
    max = 5000;
    return Math.random() * (max - min) + min;
  }

let pr1 = new Promise((res, rej) =>                      
    setTimeout(() => {                                      
        res(1)
    }, getRandomArbitrary () )
);

let pr2 = new Promise((res, rej) =>                      
    setTimeout(() => {                                      
        res(2)
    }, getRandomArbitrary ())
);

let pr3 = new Promise((res, rej) =>                      
    setTimeout(() => {                                      
        res(3)
    }, getRandomArbitrary ())
);

  Promise.race([pr1, pr2, pr3])                     
      .then(data => {
          console.log(data)
      })
     .catch(err => {
         console.log(`error ${err}`)
     })




  
 function getNum () {
 return new Promise ((res, rej) => {
     setTimeout(() => {
          min = 1;
          max = 5;                             
         res(Math.floor(Math.random() * (max -  min + 1) + min))
              }, 3000)             
 })
 }
 async function squart() {
     let num = await getNum()
     console.log(num*num);
 }
 squart();



function getNum () {
    return new Promise ((res, rej) => {
        setTimeout(() => {
             min = 1;
             max = 5;                             
            res(Math.floor(Math.random() * (max -  min + 1) + min))
                 }, 3000)
                })
            }
function getNum2 () {
    return new Promise ((res, rej) => {
        setTimeout(() => {
                min = 6;
                max = 10;                             
                res(Math.floor(Math.random() * (max -  min + 1) + min))
                    }, 5000)
                    })
                }
async function Sum () {
    let num1 = await getNum2();
    let num2 = await getNum();
    console.log(num1 + num2)
}
Sum();
let ssa = [{name: "a", width: "10", len:"12"},                                                /// дам массив
    {name: "b", width: "12", len:"14"},
    {name: "c", width: "15", len:"11"}];

// [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}];       /// нужно получить такой ответ

// const newSsa = ssa.map(obj => {                                                           /// создаем новый массив перебором из старого
//     return {                                                                              /// функция которая вернет две переменных
//         name: obj.name,
//         square: +obj.width * +obj.len
//     }
// })//
// console.log(newSsa);
//
///////////////////////////////////////////////        2 ой способ решения //////////////////////////////////////////////////
// 
//let newArr = [];//
// ssa.forEach(obj => {
//     newArr.push({
//         name: obj.name,
//         square: (obj.width * obj.len).toString()
//     })
// })
// console.log(newArr);
const obj = {
    name: 'Yauhen',
    getName: function () {                      //// пишем функцию которая вернет нам имя
        return this.name;
    },
    setName: function (newName) {              //// с помощью этой функции мы можем передать новое имя
        this.name = newName;
    }
}
// obj.name = 'Dasha';                          //// обращаемся на смену имени на прямую
// console.log(obj.name);
obj.setName('New Name');                        //// обращаемся на смену имени через функцию SET
console.log(obj.getName());

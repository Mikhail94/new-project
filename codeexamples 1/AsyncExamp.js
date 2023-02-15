////////////////// эта штука называется Callback Hell
//const fse = require('fs-extra');

fse.ensureDir('./DirOne', () => {                                             //// таким образом гарантируется что вызовется функция после того как создастся файл
    console.log('Dir one created');
    fse.ensureDir('./DirTwo', () => {
        console.log('Dir two created');
        fse.createFile('./DirOne/test.txt', () => {
            console.log('File txt created');
            fse.move('./DirOne/test.txt', './DirTwo/test.txt', () => {
                console.log('File moved from dir one to dir two');
                fse.ensureDir('./DirThree', () => {
                    console.log('Dir three created');
                    fse.copy('./DirTwo/test.txt', './DirThree/test.txt', () => {
                        console.log('File was copied from dir two to dir three');
                        fse.remove('./DirOne');
                        fse.remove('./DirTwo');
                        fse.remove('./DirThree');
                    });
                });
            });
        });
    });
});

//////////////////////////создание папки с помощью промисов //////////////////////////////// то же самое 
// Promise.resolve(fse.ensureDir('./DirOne'))                              //// создает сразу отрезолвленный промис 
//     .then(() => {
//         return fse.ensureDir('./DirTwo')
//     })
//     .then(() => {
//         return fse.createFile('./DirOne/test.txt')
//     })
//     .then(() => {
//         return fse.move('./DirOne/test.txt', './DirTwo/test.txt')
//     })
//     .then(() => {
//         return fse.ensureDir('./DirThree')
//     })
//     .then(() => {
//         return fse.copy('./DirTwo/test.txt', './DirThree/test.txt')
//     })
//     .then(() => {
//         fse.remove('./DirOne');
//         fse.remove('./DirTwo');
//         fse.remove('./DirThree');
//     })

// Promise.reject('This promise rejected')                                         /// промис если отклонено
//     .catch(err => {                                                             /// отлавливаем и обрабатываем ошибки
//         console.log(`Error ${err}`)
//     });

/////////////////////////////////////////////// Через Async Await////////////////////////////////////////////////////
// const fse = require('fs-extra')

// async function workWithFolders() {                                          /// говорим о том что функция будет асинхронна
//     await fse.ensureDir('./DirOne');                                        /// Await говорит о том что мы дожидаемся результата
//     await fse.ensureDir('./DirTwo');
//     await fse.createFile('./DirOne/test.txt');
//     await fse.move('./DirOne/test.txt', './DirTwo/test.txt');
//     await fse.ensureDir('./DirThree');
//     await fse.copy('./DirTwo/test.txt', './DirThree/test.txt');
//     await fse.remove('./DirOne');
//     await fse.remove('./DirTwo');
//     await fse.remove('./DirThree');
// }

// workWithFolders()
///







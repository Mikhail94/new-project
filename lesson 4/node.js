const fs = require('fs-extra')

fs.mkdirp('NewFolder')

const file = 'C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder/file.txt'
fs.ensureFileSync(file)

fs.mkdirp('NewFolder2')

fs.moveSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder/file.txt', 'C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder2/file.txt')

fs.mkdirp('NewFolder3')

fs.copySync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder2/file.txt', 'C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder3/file.txt')

fs.removeSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder2/file.txt')
fs.removeSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder3/file.txt')

fs.removeSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder')
fs.removeSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder2')
fs.removeSync('C:/Users/Nekl0/it-academy-/new-project/lesson 4/NewFolder3')


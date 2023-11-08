const fs = require('node:fs/promises')

console.log('Reading file...')
fs.readFile('./archivo.txt', 'utf-8').then(text => {
  console.log('File readed')
  console.log(text)
}).catch(err => {
  console.log('Error reading file:', err)
})

console.log('Do other things...')

console.log('Reading 2 file...')
fs.readFile('./archivo2.txt', 'utf-8').then(text => {
  console.log('Second file readed')
  console.log(text)
}).catch(err => {
  console.log('Error reading file:', err)
})
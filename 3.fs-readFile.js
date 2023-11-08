const fs = require('node:fs')

console.log('Reading file...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('Error reading file:', err)
    return
  }

  console.log(text)
})

console.log('Do other things...')

console.log('Reading 2 file...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('Error reading file:', err)
    return
  }

  console.log(text)
})
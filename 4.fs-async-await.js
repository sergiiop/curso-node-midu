const fs = require('node:fs/promises')

// Para no tener problemas con la IIFE Se debe a;adir un punto y coma al inicio
;(
  async () => {
    console.log('Reading file...')
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    
    console.log('File readed')
    console.log(text)
    
    console.log('Do other things...')
    
    console.log('Reading 2 file...')
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    
    console.log('Second file readed')
    console.log(text2)
  }
)()
// Para usar await en un archivo, este debe ser un módulo, ya que en los modulos existe el top level await
// Para poder usar await en un commonjs, se debe usar un IIFE (Immediately Invoked Function Expression)
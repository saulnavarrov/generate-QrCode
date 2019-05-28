var QRCode = require('qrcode')

// Opciones
var opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    scale: 10,
    rendererOpts: {
      quality: 0.3
    },
    color: {
      dark: '#000', // color Module
      light: '#FFFF' // Transparent background
    }
  }

// Generando datos
var text = 'Hola mundo!';
var path = './tmp.png';


// Creación de archivos
QRCode.toFile(path, text, opts, function (err) {
  if (err) throw err
  console.log('saved.')
})

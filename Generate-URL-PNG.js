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
var text = 'Hola esta es una prueba de conexion';

// Creación de url para usar en <img src="Codigo QR"/>
QRCode.toDataURL(text, opts, function (err, url) {
    console.log(url)
})

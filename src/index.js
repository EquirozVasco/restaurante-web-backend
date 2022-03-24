// Importación del framework de express
const express = require('express')

// Creando o instanciando la app de express
const app = express()

//  Integrando el router con la app
const router = require("./routers/index.router")
app.use(router)

// Puerto donde se levanta el servidor web
// Puerto donde está escuchando la API.
const PORT = 3000

// Levantar la API que estará escuchando en el puerto.
// 1. Primer parámetro: Puerto
// 2. Segundo parámetro: callback - función
app.listen (PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`)
})
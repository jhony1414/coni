const express = require( 'express' )
const app = express()
const rutas = require( './Routes' )
const morgan = require( 'morgan' )
const bodyParser = require( 'body-parser' )
const path = require( 'path' )
const db = require( './config/db' )
const PORT = process.env.PORT || 3000


// Comprobamos que hay conexion a la DB y creamos las tablas si no existen
db.sync()
    .then( () => console.log('Conectado a la DB') )
    .catch( error => console.log( error ) )

// Bootstrap
app.use(express.static(`${__dirname}/node_modules/bootstrap/dist`));

// Morgan
app.use(morgan('tiny'))


//Habilitar pug
app.set( 'view engine', 'pug' )

// Habilitar bodyParser para leer datos de formularios
app.use(bodyParser.urlencoded( { extends:true } ))
//app.use(express.urlencoded()) // Utilizar esto en vez de body-parser

// Carpeta de vistas
app.set('views', path.join(__dirname, './Views'))

//Archivos estaticos
app.use(express.static('./public'))

// Si quiero usar JSON
app.use(express.json())

//Rutas
app.use( '/', rutas())







app.listen( PORT, () => {

    console.log(`Servidor corriendo en -> 127.0.0.1:${PORT}`)

})
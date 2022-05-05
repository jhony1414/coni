const express = require( 'express' )
const router = express.Router()
const MovController = require( '../Controllers/MovController' )
const { body, validationResult } = require( 'express-validator' )

module.exports = () => {


    //Movimientos
    
    router.get('/', MovController.index)

    //Formulario nuevo
    router.get('/nuevo', MovController.nuevo)

    //Crear nuevo
    router.post('/nuevo', 

        /* body( 'fecha' ).not().isEmpty(),
        body( 'importe' ).not().isEmpty(),
        body( 'tipo' ).not().isEmpty(),
        body( 'concepto' ).not().isEmpty().trim().escape(), */
        MovController.guardar
    )
    //Formulario editar
    router.get('/editar/:id', MovController.formularioActualizar)

    //Actualizar
    router.post('/nuevo/:id', MovController.actualizar)


    return router
}
const express = require( 'express' )
const router = express.Router()
const MovController = require( '../Controllers/MovController' )
const { body, validationResult } = require( 'express-validator' )

module.exports = () => {


    //Movimientos
    
    router.get('/', MovController.index)
    router.get('/nuevo', MovController.nuevo)

    router.post('/nuevo', 

        /* body( 'fecha' ).not().isEmpty(),
        body( 'importe' ).not().isEmpty(),
        body( 'tipo' ).not().isEmpty(),
        body( 'concepto' ).not().isEmpty().trim().escape(), */
        MovController.guardar
    )


    return router
}
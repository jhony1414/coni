const { validationResult } = require('express-validator')
const Movimientos = require( '../Models/Movimientos' )

exports.index = ( req, res ) => {
    res.render( 'home', { titulo: 'Movimientos' } )
}

exports.nuevo = ( req, res ) =>{
    res.render('crear-nuevo', { titulo: 'Nuevo Movimiento' })
}

exports.guardar = async( req, res ) => {

    const { fecha, importe, tipo, concepto } = req.body

    console.log( { datos: req.body } )

    const errores = []

    if ( !fecha ){
        errores.push( { msg: 'Los campos no pueden estar vacios' } )
    }
    
    if  ( errores.length > 0 ) {
        res.render('crear-nuevo', { errores })
    }else{

        await Movimientos.create(
            {
                fecha,
                importe,
                tipo,
                concepto
            }
        )

        res.redirect('/')
    }
    
}
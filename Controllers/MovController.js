const { validationResult } = require('express-validator')
const Movimientos = require( '../Models/Movimientos' )


exports.index = async ( req, res ) => {
    const movimientos = await Movimientos.findAll()
    let ingresos = 0
    let gastos = 0
    movimientos.forEach((el)=>{
        if(el.tipo === 'Ingreso'){
            ingresos += el.importe
        }else{
            gastos += el.importe
        }
    })
    const total = ingresos - gastos
    /*console.log({Ingresos: ingresos})
    console.log({Gastos: gastos});  */
    
   

    
    res.render( 'home', { titulo: 'Movimientos', movimientos, ingresos, gastos, total } )
}

exports.nuevo = async( req, res ) =>{
    const movimientos = await Movimientos.findAll()
    let ingresos = 0
    let gastos = 0
    movimientos.forEach((el)=>{
        if(el.tipo === 'Ingreso'){
            ingresos += el.importe
        }else{
            gastos += el.importe
        }
    })
    const total = ingresos - gastos
    res.render('crear-nuevo', { titulo: 'Nuevo Movimiento', movimientos, ingresos, gastos, total })
}

exports.guardar = async( req, res ) => {

    const { fecha, importe, tipo, concepto } = req.body

    console.log( fecha )

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
exports.formularioActualizar = async ( req, res ) => {
    const movimientos = await Movimientos.findAll()
    let ingresos = 0
    let gastos = 0
    movimientos.forEach((el)=>{
        if(el.tipo === 'Ingreso'){
            ingresos += el.importe
        }else{
            gastos += el.importe
        }
    })
    const total = ingresos - gastos
    const movimiento = await Movimientos.findByPk(req.params.id)
    res.render('crear-nuevo', {titulo: 'Editar', movimiento, ingresos, gastos, total })

}
exports.actualizar = async ( req, res ) => {
    const { fecha, importe, tipo, concepto } = req.body

    console.log( fecha )

    const errores = []

    if ( !fecha ){
        errores.push( { msg: 'Los campos no pueden estar vacios' } )
    }
    
    if  ( errores.length > 0 ) {
        res.render('crear-nuevo', { errores })
    }else{

        await Movimientos.update(
            {
                fecha,
                importe,
                tipo,
                concepto
            },
            { where: { id: req.params.id } }
        )

        res.redirect('/')
    }
}

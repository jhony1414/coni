const { Sequelize, DataTypes } = require('sequelize')
const db = require( '../config/db' )

const Movimientos = db.define('movimientos', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },

        fecha: {
            type: DataTypes.STRING,
            },

        importe: {
            type: DataTypes.DOUBLE
            },

        tipo: {
            type: DataTypes.STRING
        },

        concepto: {
            type: DataTypes.STRING
        },
        
        url: {
            type: DataTypes.STRING
        }
    }
)

module.exports = Movimientos

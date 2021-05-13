const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const searchResultsController ={

    search:function(req,res){
    let listaProductos = productos.lista;
    return res.render('search-results.ejs',{
        title: "Search",    
        listaProducts: listaProductos,
        })
    }
};

module.exports = searchResultsController;
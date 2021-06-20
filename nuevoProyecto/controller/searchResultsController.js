const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const searchResultsController ={

    // search:function(req,res){
    // let listaProductos = productos.lista;
    // return res.render('search-results.ejs',{
    //     title: "Search",    
    //     listaProducts: listaProductos,
    //     })
    // },

    search:function(req,res){
        let productSearch = req.query.search; //Obtengo la informacion de la querystring

        db.Product.findAll({
            where: [
                { productName: {[op.like]: '%'+productSearch+'%'}},
            ]})
            .then( data => {
                // return res.send (data);
                return res.render('search-results',{listaProducts: data});
            })
            .catch( error => {
                console.log(error);
            })
        },
        
}

module.exports = searchResultsController;
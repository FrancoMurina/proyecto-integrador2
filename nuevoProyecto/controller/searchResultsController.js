const productos = require('../data/datos');

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
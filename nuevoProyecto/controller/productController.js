const productos = require('../data/datos');

const productController = {

    todosLosProductos: function(req,res){
        let listaProductos = productos.lista;  
        return res.render('product',{
            title: "Todos los productos",
            listaProducts: listaProductos,
            })
    },
    detalleDeLosProductos: function(req,res){
        let listaProductos = productos.lista;
        return res.render('product-add',{
            title: "Detalle de un producto",
            listaProducts: listaProductos,
            })
    }
};


module.exports = productController;
const productos = require('../data/datos');

const productController = {

    detalleDeLosProductos: function(req,res){
        let listaProductos = productos.lista;  
        let resultado =[];
        for(let i=0; i<listaProductos.length; i++){
            if(req.params.id == listaProductos[i].id){
                resultado.push(listaProductos[i])
            }
        }
        return res.render('product',{
            title: "Detalle de un producto",
            listaProducts: resultado,
            })
    },
    agregarProductos: function(req,res){
        let listaProductos = productos.lista;
        return res.render('product-add',{
            title: "Agregar un producto",
            listaProducts: listaProductos,
            })
    }
};


module.exports = productController;
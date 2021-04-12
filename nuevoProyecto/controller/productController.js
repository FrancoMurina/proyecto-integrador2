const productos = require('../data/datos');

const productController = {
todosLosProductos: function(req,res){
  let listaProductos = productos.lista;  
return res.render('product.ejs',{
    title: "Todos los productos de noe",
    listaProducts: listaProductos,
})
},
detalleDeLosProductos: function(req,res){
    let listaProductos = productos.lista;
return res.render('product-add.ejs',{
    title: "Detalle de un producto",
    listaProductos: listaProductos,
    
})
}


    


// Aca van las funciones


};


module.exports = productController;
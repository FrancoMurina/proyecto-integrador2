const productos = require('../data/datos');

const productController = {
todosLosProductos: function(req,res){
  let listaProductos = productos.lista;  
return res.render('product',{
    listaProducts: productos.lista,
    title: "Todos los productos de noe",
})
    


// Aca van las funciones

}}


module.exports = productController
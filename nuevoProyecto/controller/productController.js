const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


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
    },
    create: function(req,res){
        db.Product.findAll()
        .then(data =>{
            return res.render('product-add', {users:data})
        })
        .catch(error =>{
            console.log(error);
        })
    },
    store: function(req,res){
        
        let data = req.body;

        let products = {
            userId: data.userId,
            productName: data.productName,
            img: data.img,
            createdAt: data.createdAt,

        };
        db.Product.create(products)
        .then((productCreado)=>{
            return res.redirect('/users');
        })
        .catch(error => {
            console.log(error);
        })
    },

};


module.exports = productController;
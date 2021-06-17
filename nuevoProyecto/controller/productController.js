const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const productController = {

    // detalleDeLosProductos: function(req,res){
    //     let listaProductos = productos.lista;  
    //     let resultado =[];
    //     for(let i=0; i<listaProductos.length; i++){
    //         if(req.params.id == listaProductos[i].id){
    //             resultado.push(listaProductos[i])
    //         }
    //     }
    //     return res.render('product',{
    //         title: "Detalle de un producto",
    //         listaProducts: resultado,
    //         })
    // },

    detalleDeLosProductos: function(req,res){
        db.Product.findByPk(req.params.id,{
            include: [  
            // relación comentario producto.
            { association:'coments',
              include:{ association: 'user'}
            },
           // relación producto usuario                                
            { association: 'user' }, ] })

            .then(data =>{
                // return res.send (data)
                //return res.send(data)
                return res.render('product', {product:data})
            })
            .catch(error =>{
                console.log(error);
            })
    },

    // agregarProductos: function(req,res){
    //     let listaProductos = productos.lista;
    //     return res.render('product-add',{
    //         title: "Agregar un producto",
    //         listaProducts: listaProductos,
    //         })
    // },

    create: function(req,res){
        db.Product.findAll()
        .then(data =>{
            return res.render('product-add', {product:data})
        })
        .catch(error =>{
            console.log(error);
        })
    },

    store: function(req,res){
        
        let data = req.body;

        if(req.body.productname == ""){
            errors.message = "Debe estar completo";
            res.locals.errors = errors;
            return res.render('/product/add')
        } else if (req.file.mimetype !== 'image/png'&& req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "El archivo debe ser png o jpg o jpeg";
            res.locals.errors = errors;
            return res.render('/product/add')
        } else { 

            let products = {
                userId: req.session.user.id,
                productName: data.productName,
                img: req.file.filename,
                description: data.description,
            };

            db.Product.create(products)
                .then((productCreado) => {
                    return res.redirect(`/users/${req.session.user.id}`);
                    
                })
                .catch(error => {
                    console.log(error);
                })

        }
    },

    editProduct: function(req,res){
        // let listaProductos = productos.lista;  
        let productId = req.params.id;
        
        // console.log(productId)
        // console.log(req.session.user.id)



        // Revisar esto

        // if(productId != req.params.id){
        //     return res.redirect(`/product/editproduct/${req.params.id}`)
        // } else {
        //     //Recuperar los datos  y pasarlo al form de edición
        //     db.Product.findByPk(productId)
        //         .then( function(product){
        //             return res.render('product-edit', { editProduct: product})
        //         })
        //         .catch( e => {console.log(e)}) 
        // }
    },

    updateProduct:  function(req, res){
        let data = req.body;
         //Vamos a a actualizar un producto
         let product = { 
                id: req.params.id,
                userId: req.session.user.id,
                productName: data.productName,
                img: req.file.filename,
                description: data.description,
            }
 
         db.Product.update(product, {
             where:{
                 id: req.params.id
             }
         })
             .then(function(product){
                 //Actualizar los datos del producto y redirecciona al detalle
                 product.id = req.params.id;
                 req.params.id = product;
                 return res.redirect('/');    
             })
             .catch( e => {console.log(e)})
 
     },


    addComment:function(req,res){
        let data = req.body;
        // let query = location.search;
        // let queryString = new URLSearchParams(query);
        // let id = queryString.get("id");

        // Revisar como se le manda el productId
        let comentario = {
            productId: req.params.id ,
            userId:req.session.user.id,
            textoComentario: data.textoComentario,
        }

        db.Coment.create(comentario)
        .then(function(comentarioCreado){
            // Revisar el nuemro del Id en la ruta
            
            return res.redirect(`/product/id/${req.params.id}`)
        })
        .catch(function(error){
            console.log(error)
        })
    },

};


module.exports = productController;

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const productController = {
    detalleDeLosProductos: function(req,res){

        db.Product.findByPk(req.params.id,{
            include: [  
            // Relación comentario producto.
                { association:'coments',
                include:{ association: 'user'}
                },
           // Relación producto usuario                                
                { association: 'user' }],
                order: [['coments','id','DESC']]
        })

            .then(data =>{
                return res.render('product', {product:data})
            })
            .catch(error =>{
                console.log(error);
            })
    },

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

        if(req.body.productName == ""){
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
         
        let productId = req.params.id;
        
        // Revisar esto - Creo que ya esta
        //Recuperar los datos  y pasarlo al form de edición
        db.Product.findByPk(productId)            
            .then( function(product){
                if(req.session.user != undefined && product.userId != req.session.user.id){
                    return res.redirect(`/users/${req.session.user.id}`)
                }else if(req.session.user == undefined){
                    return res.redirect('/account/login')
                }
                return res.render('product-edit', { editProduct: product})
            })
            .catch( e => {console.log(e)
        }) 
    },
    
    updateProduct:  function(req, res){
        
        let id = req.params.id;
        
        db.Product.findByPk(id)

            .then( function(product){

            let data = req.body;
            //Vamos a a actualizar un producto
            let productToUpdate = { 
                id: req.params.id,
                userId: req.session.user.id,
                productName: data.productName,
                img: '', 
                description: data.description,
            }

        
            if(req.file == undefined){
                 productToUpdate.img = product.img;
            } else {
                productToUpdate.img = req.file.filename;
            } 
                
            db.Product.update(productToUpdate, {
                where:{
                    id: req.params.id
                }
                })
                    .then(function(){
                        //Actualizar los datos del producto y redirecciona al detalle
                        let id = req.params.id;
                        return res.redirect(`/product/id/${id}`);    
                    })
                    .catch( e => {console.log(e)})
            })
            
            .catch( e => {console.log(e)
        })    
    },

    deleteProduct: function(req, res){

        let productoABorrar = req.params.id;
        // return res.send(productoABorrar)
        
        db.Product.destroy({
            where: [
                {id : productoABorrar}
            ]
        })
            .then( () => {
                return res.redirect('/');
            })
            .catch( error => { 
                console.log(error);
            })
    },

    addComment:function(req,res){
        let data = req.body;
//Aca va el if
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
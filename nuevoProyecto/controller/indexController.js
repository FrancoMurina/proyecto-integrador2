const productos = require('../data/datos');
const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const indexController = { 

     indexProductos: function(req, res) {
    
      let id = req.params.id;
      
        db.Product.findAll({
            
          order:[
            ['createdAt','DESC']
            ],
          include:[
              {association: 'user'}
            ]
        })
        
        .then(function(data){
          return res.render('index', {title: 'Express', listaProducts: data});    
        })

        .catch(function(error){
          console.log(error);
      })
    },

    indexMasComentados:function(req, res) {
      let id = req.params.id;
      
      db.Product.findAll({
        order:[
          ['La cantidad de comentarios','DESC']
        ]
      })

      .then(function(data){
          return res.render('index', {title: 'Express', listaProducts: data});    
      })
      .catch(function(error){
         console.log(error);
        })
    },

};


module.exports = indexController;


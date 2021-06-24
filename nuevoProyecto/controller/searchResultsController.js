const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const searchResultsController ={
    search:function(req,res){
        let productSearch = req.query.search; //Obtengo la informacion de la querystring

        db.Product.findAll({
            include: [  
                // Relación comentario producto.
                    { association:'coments',
                    include:{ association: 'user'}
                    },
               // Relación producto usuario                                
                    { association: 'user' }],
                    order: [['coments','id','DESC']],
            
            where: {
                [op.or]:[{
                     productName: {
                         [op.like]: '%'+productSearch+'%'
                        }
                    },
                {  
                  description: {
                      [op.like]: '%'+productSearch+'%'
                    }
            },
        ]
            },
            })
            .then( data => {
                let errors = {}
            if (data == ''){
                errors.message = "No existe este producto";
                res.locals.errors = errors;
                return res.render('search-results')

            } else {
            
                //return res.send (data);
                return res.render('search-results',{listaProducts: data});
            }
            })
        
            .catch( error => {
                console.log(error);
            })
        },       
}

module.exports = searchResultsController;
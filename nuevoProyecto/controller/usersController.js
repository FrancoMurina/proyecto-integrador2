const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op
const users = db.User;


const usersController = {

    user: function(req,res){
        let listaProductos = productos.lista;  
        
        return res.render('profile',{
            title: "profile",
            listaProducts: listaProductos,
            })
    },
    editUser: function(req,res){
        // let listaProductos = productos.lista;  
        let userId = req.params.id;
        
        if(userId != req.session.user.id){
            return res.redirect(`/users/edit/${req.session.user.id}`)
        } else {
            //Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(userId)
                .then( function(user){
                    return res.render('profile-edit', { profileEdit:user})
                })
                .catch( e => {console.log(e)})

           
        }
    },
};

module.exports = usersController;
const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op
const users = db.User;
const bcrypt = require('bcryptjs');


const usersController = {

    user: function(req,res){
        let listaProductos = productos.lista; 
        db.User.findByPk(req.params.id,  {
            include:[{
                association:'product'
            }]
         })
        .then((user) => {
            return res.render('profile', {user: user, title: "profile"})
        })
        .catch( e => console.log(e))
        
    },
    editUser: function(req,res){
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
    update:  function(req, res){
       let data = req.body;
        //Vamoa a actualizar un usuario
        let user ={
                username: data.username,
                email: data.email,
                userimg: '',
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                password: '',
            }

        //Tenemos que pensar como completar password y la imagen.
        if(req.body.password == ''){
            user.password = req.session.user.password;
        } else {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }
        if(req.file == undefined){
            user.userimg = req.session.user.userimg;
        } else {
            user.userimg = req.file.filename;
        }

        db.User.update(user, {
            where:{
                id: req.session.user.id
            }
        })
            .then(function(id){
                //Vemos... Actualizar los datos de session y redirecciona a la home.
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect('/');
                
            })
            .catch( e => {console.log(e)})



    }
};

module.exports = usersController;
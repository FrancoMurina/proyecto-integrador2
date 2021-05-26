const productos = require('../data/datos');

const bcrypt = require('bcryptjs');
const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const loginRegisterController = {

    // Esto es login
    index:function(req,res){
    let listaProductos = productos.lista;
    return res.render('login.ejs',{
        title: "Login",
        })
    },
    login:function(req,res){
        db.User.findOne({
            where:[{email:req.body.email}]
        })
        .then(function(user){
            req.session.user = user;

            // Si tildo recordame => creamos las cookies

        if(req.body.rememberme != undefined){
            res.cookie('userId', user.id, { maxAge: 100 * 60 * 5})
        }
        return res.redirect('/');
        })
        .catch(function(error){
            console.log(error)
        })
    },

    // Esto es registro
    register:function(req,res){
        let listaProductos = productos.lista;
        return res.render('register.ejs',{
            title: "Register",
        })
    },
    // create: function(req,res){
    // db.User.findAll()
    // .then(data =>{
    //     return res.render('register', {users:data})
    // })
    // .catch(error =>{
    //     console.log(error);
    // })
    // },
    store: function(req,res){
        
        let data = req.body;

        let user = {
            username: data.username,
            email: data.email,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            password: bcrypt.hashSync(data.password, 10),
            // checkPassword: bcrypt.compareSync(data.password, users), // true
            // checkPassword: bcrypt.compareSync(data.password, users.password), // false
        }
        db.User.create(user)
        .then(function(user){
            req.session.user = user;
            return res.redirect('/users');
        })
       
        
       
    },


    
    logout: function(req,res){
                //Destruir la sesion
        req.session.destroy();
        //Destruir la cookie
        res.clearCookie('userId');
        //Redireccionar a home
    return res.redirect('/')
    
    },

};


module.exports = loginRegisterController;

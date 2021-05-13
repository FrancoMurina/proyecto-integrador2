const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const loginRegisterController = {

    login:function(req,res){
    let listaProductos = productos.lista;
    return res.render('login.ejs',{
        title: "Login",
        })
    },
    register:function(req,res){
        let listaProductos = productos.lista;
        return res.render('register.ejs',{
            title: "Register",
        })
    },
create: function(req,res){
    db.Users.findAll()
    .then(data =>{
        return res.render('register', {users:data})
    })
    .catch(error =>{
        console.log(error);
    })
},

    store: function(req,res){
        
        let data = req.body;

        let users = {
            username: data.username,
            email: data.email,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            password: data.password,

        };
        db.Users.create(users)
        .then((userCreado)=>{
            return res.redirect('/users');
        })
        .catch(error => {
            console.log(error);
        })
    },
};

module.exports = loginRegisterController;

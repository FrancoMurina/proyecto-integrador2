const productos = require('../data/datos');

const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const usersController = {

    user: function(req,res){
        let listaProductos = productos.lista;  
        return res.render('profile.ejs',{
            title: "profile",
            listaProducts: listaProductos,
            })
    },
    editUser: function(req,res){
        let listaProductos = productos.lista;  
        return res.render('profile-edit.ejs',{
            title: "profile edit",
            listaProducts: listaProductos,
        })
    },
};

module.exports = usersController;
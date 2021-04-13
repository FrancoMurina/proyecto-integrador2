const productos = require('../data/datos');

const usersController ={
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
const productos = require('../data/datos');

const loginRegisterController ={
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
};
module.exports = loginRegisterController;

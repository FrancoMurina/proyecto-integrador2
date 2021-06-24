

const bcrypt = require('bcryptjs');
const { Sequelize } = require('../database/models');
const db = require('../database/models') // Requerimos la conexion a la base de datos y todos los modelos.
const op = db.Sequelize.Op;
const users = db.User;

const loginRegisterController = {
    // Login
    index:function(req,res){
        // Control de acceso
        if (req.session.user != undefined){
            return res.redirect('/')
        } else{
        //Mostramos el form de login
        return res.render('login.ejs',{
            title: "Login",
        })
        }
    },

    login:function(req,res){
        db.User.findOne({
            where:[{email:req.body.email}]
        })
        
        .then(function(user){
        let errors ={};
        // 1 Esta ese email en la base de datos?
        if(user == null){
            //Crear un mensaje de error
            errors.message = "El email no existe";
            //Pasar el mensaje a la vista
            res.locals.errors = errors
            //Renderizar la vista
            return res.render('login');
        }else if(bcrypt.compareSync(req.body.password, user.password)== false){
            //Crear un mensaje de error
            errors.message = "La contraseña es incorrecta";
            //Pasar el mensaje a la vista
            res.locals.errors = errors
            //Renderizar la vista
            return res.render('login');
        }else{
            req.session.user = user;

            // Si tildo recordame => creamos las cookies

        if(req.body.rememberme != undefined){
            res.cookie('userId', user.id, { maxAge: 100 * 60 * 5})
        }
        return res.redirect('/');
        }})
        .catch(function(error){
            console.log(error)
        })
    },

    // Registro
    register:function(req,res){
        // Contorl de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        }else{
            // Mostramos el form
            return res.render('register.ejs',{
                title: "Register",
            })
        }
    },

    store: function(req,res){
        let data = req.body;
        let errors = {}
        // chequear que los campos no esten vacios
        if(req.body.username == ""){
            errors.message = "El nombre es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.phoneNumber == ""){
            errors.message = "El numero telefonico es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.dateOfBirth == ""){
            errors.message = "La fecha de nacimiento es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.checkpassword == ""){
            errors.message = "Repetir la contraseña";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.password.length <= 3){
            errors.message = "La contraseña debe tener mas de tres caracteres";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.checkpassword != req.body.password){
            errors.message = "La contraseña debe ser la misma";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.file == undefined){
            errors.message = "Debe agregar una imagen";
            res.locals.errors = errors;
            return res.render('register')
        }
        else{//Una vez que tenemos la informacion completa entonces podemos pasar a chequear con base de datos
            db.User.findOne({
            where:[{email:req.body.email}]
        })
        
        .then(function(user){
            if(user != null){
                errors.message = "el email ya esta registrado por favor elija otro.";
                res.locals.errors = errors;
                return res.render('register')  
            }else{
                let user = {
                    username: data.username,
                    email: data.email,
                    userimg: req.file.filename,
                    phoneNumber: data.phoneNumber,
                    dateOfBirth: data.dateOfBirth,
                    password: bcrypt.hashSync(data.password, 10),
                }
                db.User.create(user)
                .then(function(user){
                    return res.redirect('/account/login');
                })
            }
        })
    
    }   
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

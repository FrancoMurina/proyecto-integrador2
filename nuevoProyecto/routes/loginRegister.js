const express = require('express');
const router = express.Router();
const loginRegisterController = require('../controller/loginRegisterController');
const multer = require('multer');
const path = require('path');
//Multer
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../public/images/users'))
    },
    filename:function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage:storage})

//Login
router.get('/login', loginRegisterController.index);
router.post('/', loginRegisterController.login);
//Registro
router.get('/register', loginRegisterController.register);
router.post('/register',upload.single('userimg'), loginRegisterController.store);
//Logout
router.post('/logout', loginRegisterController.logout);




module.exports = router;
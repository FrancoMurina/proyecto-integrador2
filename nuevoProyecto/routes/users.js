const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')
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


router.get('/edit/:id', usersController.editUser);
router.post('/edit/:id', upload.single("userimg"), usersController.update);

router.get('/:id', usersController.user); //Esta ruta por ser solo un paráetro debe ser la última de las rutas por get.
module.exports = router;

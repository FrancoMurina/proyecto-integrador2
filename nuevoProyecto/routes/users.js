const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../public/images/users'))
    },
    filename:function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage:storage})


router.get('/', usersController.user);
router.get('/edit/:id', usersController.editUser);
router.post('/edit', upload.single("userimg"), usersController.update);

// router.get('/login', functionLogin.show );

module.exports = router;

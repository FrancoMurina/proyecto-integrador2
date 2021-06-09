const express = require('express');
const router = express.Router();
const loginRegisterController = require('../controller/loginRegisterController');
// const multer = require('multer');
// const path = require('path');

// var storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,path.join(__dirname, '../public/images/users'))
//     },
//     filename:function(req, file, cb){
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })
// var upload = multer({storage:storage})



router.get('/login', loginRegisterController.index);
router.post('/', loginRegisterController.login);


router.get('/register', loginRegisterController.register);

// router.get('/create', loginRegisterController.create);
// upload.single('userimg')
router.post('/register',loginRegisterController.store);

router.post('/logout', loginRegisterController.logout);




module.exports = router;
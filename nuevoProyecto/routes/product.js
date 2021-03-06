const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const multer = require('multer');
const path = require('path');
//Multer
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../public/images/products'))
    },
    filename:function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage:storage})
//Detalle de un producto
router.get('/id/:id', productController.detalleDeLosProductos);
//Creacion de un producto
router.get('/add', productController.create);
router.post('/add', upload.single('img'), productController.store);
//Modificacion de un producto
router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/:id', upload.single('img'), productController.updateProduct);
//Eliminacion de un producto
router.post('/delete/:id', productController.deleteProduct);
//Creacion de un comentario
router.post('/comment/:id', productController.addComment);

module.exports = router;
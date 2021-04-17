const productos = require('../data/datos');

const indexController = { 

  indexProductos: function(req, res) {
      let listaProductos = productos.lista;
      return res.render('index', { 
        title: 'Express',
        listaProducts: listaProductos,
      });
    },
};


module.exports = indexController;


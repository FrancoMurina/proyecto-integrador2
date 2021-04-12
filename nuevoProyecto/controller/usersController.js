const productos = require('../data/datos');

const usersController ={
user: function(req,res){
     
  return res.render('profile.ejs',{
      title: "profile",

  })
  },
editUser: function(req,res){
     
    return res.render('profile-edit.ejs',{
        title: "profile edit",
  
    })
    },
};
module.exports = usersController;
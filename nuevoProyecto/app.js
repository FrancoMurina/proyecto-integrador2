var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const loginRegisterRouter = require('./routes/loginRegister');
const searchResultsRouter = require('./routes/searchResults');
const db = require('./database/models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'proyecto2db',
  resave: false,
  saveUninitialized: true,
}
));


// Dejar disponible datos de session para todas las vistas
app.use(function(req,res,next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    console.log(res.locals.user);
    console.log("holaa")
    return next();
  }
  
  return next();
 
});

//Gestionar la cookie
app.use(function(req,res,next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
  let idDeLaCookie = req.cookies.userId
  db.User.findByPk(idDeLaCookie)
    .then(function(user){
      req.session.user = user;
     // req.locals =user;

      return next()
  })
  .catch(function(error){
    console.log(error)
  })
  } else{ 
    return next();
  }
});




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/account', loginRegisterRouter);
app.use('/search', searchResultsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

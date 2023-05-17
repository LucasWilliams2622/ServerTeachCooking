var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// session,cookies
const session=require('express-session');
const mongoose=require('mongoose');
// import cac model
require('./components/controller/productModel');

const ProductAPIRouter=require('./routes/api/ProductApi');

var app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//http:localhost:3000/product
app.use('/product',ProductAPIRouter);


// khai bao thong tin cua session
app.use(session({
  secret: 'iloveyou',//bi mat.
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
mongoose.connect('mongodb+srv://nguyenvanson2622003:123abc@cluster0.gbwvqp4.mongodb.net/TeachCookingApp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

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

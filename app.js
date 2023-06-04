var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// session,cookies
const session=require('express-session');

// API
var UserAPIRouter = require('./routes/api/UserAPI')
var CommentAPIRouter = require('./routes/api/CommentAPI')
var FavoriteAPIRouter = require('./routes/api/FavoriteAPI')
var IngredientAPIRouter = require('./routes/api/IngredientAPI')
var CategoryAPIRouter = require('./routes/api/CategoryAPI')
var RecipeAPIRouter = require('./routes/api/RecipeAPI')
var StepAPIRouter = require('./routes/api/StepAPI')


require('./components/User/UserModel');


// CPANEL

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


//http:localhost:3000/product
app.use('/', indexRouter);
app.use('/users', usersRouter);

// API 
// http://localhost:3001/user/api
app.use('/user/api', UserAPIRouter);

// http://localhost:3000/category/api
app.use('/category/api', CategoryAPIRouter);

// http://localhost:3000/comment/api
app.use('/comment/api', CommentAPIRouter);

// http://localhost:3001/user/api
app.use('/favorite/api', FavoriteAPIRouter);

// http://localhost:3001/ingredient/api
app.use('/ingredient/api', IngredientAPIRouter);

// http://localhost:3001/recipe/api
app.use('/recipe/api', RecipeAPIRouter);

// http://localhost:3001/step/api
app.use('/step/api', StepAPIRouter);







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

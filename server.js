/////////////////
//REQUIREMENTS//
///////////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    db = require('./models');
    session = require('express-session');
///////////
//MIDDLE//
/////////
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookie',
    cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
}));

app.use('/', function (req, res, next) {    
    req.currentUser = function (callback) {
      db.User.findOne({_id: req.session.userId}, function (err, user) {
        if (!user) {
          callback("No User Found", null)
        } else {
          req.user = user;
          callback(null, user);
        }
      });
    };

    next();
  });

app.get('/', function (req,res) {
	res.render('index');
})
///////////
//SIGNUP//
/////////
app.get('/signup', function (req, res) {
    res.render('signup');
});

app.post('/signup', function (req, res) {
    db.User.createSecure(req.body.username, req.body.email, req.body.password, function (err, user) {
    res.json(user);
  });
});
////////////
//PROFILE//
//////////
app.get('/profile', function (req, res) {
    db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
    res.render('profile', {user: currentUser})
  });
});
//////////
//LOGIN//
////////
app.get('/login', function (req, res) {
    res.render('login');
});
////////////
//SESSION//
//////////
app.post('/sessions', function (req, res) {
	db.User.authenticate(req.body.email, req.body.password, function (err, exUser) {
		req.session.userId = exUser._id;
    		res.json(exUser);
   });
 });
///////////
//LOGOUT//
/////////
app.get('/logout', function (req, res) {
    req.user = null;
    res.redirect('/login');
});
///////////
//LISTEN//
/////////
app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })
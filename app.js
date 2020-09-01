var express 	             = require("express"),
    request                  = require("request"),
    mongoose                 = require("mongoose"),
    multer                   = require('multer'),
    flash                    = require("connect-flash"),
    methodOverride           = require("method-override"),  
    bodyParser               = require("body-parser"),
    expressSession           = require("express-session");


mongoose.Promise = global.Promise; 
// mongoose.connect("mongodb://laganch:wisdom4190@ds255797.mlab.com:55797/property");

mongoose.connect("mongodb://localhost/eaatng");
// mongoose.connect("mongodb://laganch:wisdom4190@ds119662.mlab.com:19662/eaatng");
// mongodb://<dbuser>:<dbpassword>@ds119662.mlab.com:19662/cryptoapp
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("images"));
app.use(methodOverride("_method"));

app.use(expressSession({
    secret: "this will help me out",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use(function(req, res, next){
res.locals.success = req.flash("success");
res.locals.error = req.flash("error");
res.locals.info = req.flash("info");
next();
})

app.get('/', function(req, res){
    res.render('index')
})
// app.get('/pages/team', function(req, res){
//     res.render('team')
// })
app.get('/pages/contact', function(req, res){
    res.render('contact')
})
app.post('/contact', function(req, res){
    res.redirect('/pages/contact')
})
app.get('/pages/e-commerce', function(req, res){
    res.render('ecommerce')
})
app.get('/pages/e-learning', function(req, res){
    res.render('elearning')
})
app.get('/pages/register', function(req, res){
    res.render('register')
})
app.get('/pages/training', function(req, res){
    res.render('training')
})
app.get('*', function(req, res){
    res.redirect('/')
})


app.listen(3000, function(req, res){
    console.log("server connected")
})
// app.listen(process.env.PORT, process.env.IP)

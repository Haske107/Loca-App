var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// API ROUTES
var collectionRoutes = require('./routes/collection');
var userRoutes = require('./routes/user');
var locationRoutes = require('./routes/locations');
var appRoutes = require('./routes/app');
var fileRoutes = require('./routes/files');
var pdfRoutes = require('./routes/pdf');
var chatRoutes = require('./routes/chat');

var app = express();
mongoose.connect('mongodb://Haske107:Applegate451!@projectx-shard-00-00-y8jpz.mongodb.net:27017,projectx-shard-00-01-y8jpz' +
  '.mongodb.net:27017,projectx-shard-00-02-y8jpz.mongodb.net:27017/projectx?ssl=true&replicaSet=projectx-shard-0&authSource=admin');

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
};


app.use(forceSSL());






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Content');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/chat', chatRoutes);
app.use('/pdf', pdfRoutes);
app.use('/files', fileRoutes);
app.use('/user', userRoutes);
app.use('/collection', collectionRoutes);
app.use('/location', locationRoutes);
app.use('/', appRoutes);
console.log("SERVER INITIATED: RUNNING ON PORT 3000");

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.render('index');
});


module.exports = app;

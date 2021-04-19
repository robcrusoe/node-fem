/* NodeJS core imports */
const path = require('path');

/* 3rd party imports */
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

/* Registering our app */
const app = express();

/* Registering for our static files */
app.use(express.static(path.join(__dirname, 'public')));

/* Registering a (req) body-parser */
app.use(bodyParser.urlencoded({ extended: false }));

/* Registering our app favicon */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/* Registering the view engine */
app.engine('hbs', expressHbs({ defaultLayout: 'main-layout', layoutsDir: 'views/layouts', extname: 'hbs' }));
app.set('view engine', 'hbs');

/* Registering the views directory */
app.set('views', 'views');

const users = [];

/* Registering the default middlewares */
app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add Users' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users: users, hasUsers: users.length > 0 });
});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(3000);

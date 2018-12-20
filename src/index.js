const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');


// Inicializaciones
const app = express();
require('./database');


// Settings
app.set('port', process.env.PORT | 3000);
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'articulos',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');

    next();
});


// Routes
app.use(require('./routes/index'));
app.use(require('./routes/articulos'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use(express.static(path.join(__dirname, 'views/articulos/img')));
*/

// Server is Listenning

app.listen(app.get('port'), () => {
    //console.log('Server on port', app.get('port'));  // MUESTA UN MENSAJE CON EL PUERTO
    console.log('ATENCION: NO CIERRES ESTA VENTANA, MINIMIZALA Y CUANDO ACABES DE TRABAJAR LA PUEDES CERRAR');
    console.log('ATENCION: EN CASO DE CERRAR LA VENTANA EL PROGRAMA NO FUNCIONARA');
    console.log('YA PUEDES ABRIR EL ARCHIVO LLAMADO "WEB".');
});
const express = require('express');
const  hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;


console.log(port);
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html');
});



app.listen(port)
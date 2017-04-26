// variable express es igual a la libreria instalada por npm en node modules
var express = require('express');

// var app (puede ser cualquier nombre) es igual a express convertida en function
var app = express();


app.set('view engine', 'pug')
app.use(express.static('public'))



// app get ejecuta la ruta req = require Y res = response se usa res.send para enviar un mensaje
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/signup', function(req, res) {
    res.render('index');
})

app.get('/signin', function(req, res) {
    res.render('index');
})

// app listen tiene por parametro el puerto (3000) luego la function pasa parametro err
app.listen(3000, function(err) {
    if (err) return console.log('hubo un error'), process.exit(1);

    console.log('escuchando en el puerto 3000');
})

// uso node serve.js en consola para verificar el funcionamiento del servidor
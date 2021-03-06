var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function(req, res) {
    res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function(req, res) {
    res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function(req, res, next) {
    var pictures = [{
            user: {
                username: 'Danny',
                avatar: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11031148_10153448564292612_2579019413701631604_n.jpg?oh=d83cdd0687c87c91b247a42375fc5a57&oe=57B12767'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
                username: 'Danny',
                avatar: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11031148_10153448564292612_2579019413701631604_n.jpg?oh=d83cdd0687c87c91b247a42375fc5a57&oe=57B12767'
            },
            url: 'office.jpg',
            likes: 1,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];

    setTimeout(function() {
        res.send(pictures);
    }, 2000)
})

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('Platzigram escuchando en el puerto 3000');
})
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');

    var pictures = [{
            user: {
                username: 'Danny',
                avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xtl1/v/t1.0-9/16807097_405384326476179_258405160304733262_n.jpg?oh=e892b2440b21fa630cb030836b6e2317&oe=59866172&__gda__=1501310787_1d58f047d528192befebbfcf259f9c0b'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user: {
                username: 'Danna',
                avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xtl1/v/t1.0-9/16807097_405384326476179_258405160304733262_n.jpg?oh=e892b2440b21fa630cb030836b6e2317&oe=59866172&__gda__=1501310787_1d58f047d528192befebbfcf259f9c0b'
            },
            url: 'office.jpg',
            likes: 1,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];

    empty(main).appendChild(template(pictures));
})
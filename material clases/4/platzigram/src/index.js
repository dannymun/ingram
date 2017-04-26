var page = require('page')

var main = document.getElementById('main-container')

page('/', function() {
    main.innerHTML = 'home' < ; //diga home

})

page('/signup', function() {
    main.innerHTML = 'signup'; //diga home
})

page();
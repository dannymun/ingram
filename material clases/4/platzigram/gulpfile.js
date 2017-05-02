// se crean variables como el el server.js para que ejecunten  los mulod de npm
// siempre que se instala un modulo de npm y lo quiero usar en gulp debo crear su variables

var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

// debo indicar con gulp.task la tarea con el parametro ('nombre de la tarea', function() o array ) y usar gulp y sus ordenes .pipe
gulp.task('styles', function() {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('assets'));
})

gulp.task('assets', function() {
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
})

function compile(watch) {
    var bundle = watchify(browserify('./src/index.js'))

    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    }

    if (watch) {
        bundle.on('update', function() {
            console.log('--> Bundling....')
            rebundle()
        })
    }

    rebundle()
}


gulp.task('build', function() {
    return compile();
})
gulp.task('watch', function() {
    return compile(true);
})

gulp.task('default', ['styles', 'assets', 'build'])
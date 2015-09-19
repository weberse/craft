var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');

// app paths.
var paths = {
    app_js: ['./src/app.jsx'],
    js: ['./src/*.js']
};


gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8001,
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
});


gulp.task('clean', function(done) {
    del(['build'], done);
});

// Browserify our code and compile React JSX files.
gulp.task('js', ['clean'], function() {
    browserify(paths.app_js)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('default', ['watch', 'js', 'connect']);

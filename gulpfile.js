var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8001,
        livereload: true
    });
});

gulp.task('default', ['connect']);
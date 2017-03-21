var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    wiredep = require('wiredep').stream,
	  config = require('./gulpfile-config'),
	  inject = require('gulp-inject');


gulp.task('browser-sync', function () {
   browserSync.init({
       server: {
           baseDir: "./",
           index: "index.html"
       },
       port:4211,
       files:['./index.html','./main.css']
   });
   
});

gulp.watch(config.allhtml).on('change', browserSync.reload);
gulp.watch(config.alljs).on('change', browserSync.reload);
gulp.watch(config.css, ['watch-css']);


gulp.task('wiredep', function () {
    var options = config.getWiredepDefaultOptions();
    return gulp.src(config.index)
        .pipe(wiredep(options))
        .pipe(gulp.dest('./'));
});

//injecting new customjs files in index.html

gulp.task('inject', function () {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(config.alljs)))
        .pipe(gulp.dest('./'));
});

gulp.task('watch-css', function () {
    return gulp.src('config.css')
        .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync'], function () {});
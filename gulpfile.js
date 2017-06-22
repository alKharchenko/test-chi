var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('watch', function () {
    gulp.watch('./styles/*.less', ['less']);
});

gulp.task('less', function () {
    gulp.src('src/styles/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('build/styles/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/styles'))

});

gulp.task('default', ['less', 'watch']);

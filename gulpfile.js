'use strict';
let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let server = require('gulp-express');
let tslint = require('gulp-tslint');
let minify = require('gulp-minify');
let sass = require('gulp-sass');

//need these running sync
gulp.task('build', ['compile-ts', 'compile-sass', 'compress']);
 
gulp.task('compress', () => {
    gulp.src('release/output.js')
        .pipe(minify())
        .pipe(gulp.dest('release'))
});

gulp.task('compile-ts', () => {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('release'));
});

gulp.task('tslint', () => {
    return tsProject.src()
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
});

gulp.task('compile-sass', () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('release'));
});

gulp.task('watch', ['compile'], () => {
    gulp.watch('src/styles/**/*.scss', ['compile-sass']);
    gulp.watch('src/**/*.ts', ['compile-ts']);
});

gulp.task('serve', () => { 
    server.run(['server.js']);
  
    gulp.watch(['src/**/*.html'], server.notify);
    gulp.watch(['src/styles/**/*.scss'], ['styles:scss']);
    gulp.watch(['{.tmp,app}/styles/**/*.css'], (event) => {
        gulp.run('styles:css');
        server.notify(event);
    });
 
    //gulp.watch(['src/scripts/**/*.js'], ['jshint']);
    // gulp.watch(['src/images/**/*'], server.notify);
    gulp.watch(['server.js', 'routes/**/*.js'], [server.run]);
});
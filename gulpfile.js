var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var server = require('gulp-express');

gulp.task('compile', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});
 
gulp.task('serve', function () { 
    server.run(['app.js']);
  
    gulp.watch(['src/**/*.html'], server.notify);
    gulp.watch(['src/styles/**/*.scss'], ['styles:scss']);
    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
        gulp.run('styles:css');
        server.notify(event);
    });
 
    // gulp.watch(['src/scripts/**/*.js'], ['jshint']);
    gulp.watch(['src/images/**/*'], server.notify);
    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});
const gulp = require('gulp');
const ts = require('gulp-typescript');
// const tsProject = ts.createProject('./tsconfig.json');
const server = require('gulp-express');
const tslint = require('tslint');

gulp.task('compile', function() {
    // var tsResult = tsProject.src()
    //     .pipe(ts(tsProject));

    // return tsResult.js.pipe(gulp.dest('release'));
    return gulp.src(['src/**/*.ts', '*.ts'])
		.pipe(ts({
			noImplicitAny: true,
		}));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch('src/*.ts', ['compile']);
});

gulp.task('serve', function () { 
    server.run(['server.js']);
  
    gulp.watch(['src/**/*.html'], server.notify);
    gulp.watch(['src/styles/**/*.scss'], ['styles:scss']);
    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
        gulp.run('styles:css');
        server.notify(event);
    });
 
    // gulp.watch(['src/scripts/**/*.js'], ['jshint']);
    gulp.watch(['src/images/**/*'], server.notify);
    gulp.watch(['server.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('lint', function () {
    gulp.src([])
     // var tsResult = tsProject.src()
    return gulp.src(['src/**/*.ts', '*.ts'])
        .pipe(tslint);
})
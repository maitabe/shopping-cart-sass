var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});
 

gulp.task('sass', function () {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('sass'));
});

gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
});
 

gulp.task('default', ['sass:watch', 'connect']);
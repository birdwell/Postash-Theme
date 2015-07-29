// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    path = require('path'),
    concat = require('gulp-concat');

// run
gulp.task('default', function() {

  // easier to read variable
  var themeName = 'timeline';

  // // less
  // gulp.src('./assets/less/' + themeName + '.less')
  //   .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
  //   .pipe(rename('style.css'))
  //   .pipe(gulp.dest('./assets/css/'));
  gulp.src('./assets/less/**/*.less')
  .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ]}))
  .pipe(gulp.dest('assets/css'))
  .pipe(concat('timeline.css'))
  .pipe(gulp.dest('./assets/css'));

  // uglify
  gulp.src('./assets/js/' + themeName + '.js')
    .pipe(uglify())
    .pipe(rename(themeName + '.min.js'))
    .pipe(gulp.dest('./assets/js/'));

});

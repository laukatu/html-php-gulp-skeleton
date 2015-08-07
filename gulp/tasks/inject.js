'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var inject		 = require('gulp-inject');

gulp.task('inject', function () {

  var sourcecss = gulp.src(config.styles.dest+'/main-'+global.rand+'.min.css', {read: false });
  var sourcejs = gulp.src(config.scripts.dest+'/main-'+global.rand+'.min.js', {read: false });
      
  return gulp.src(config.gzip.src)        
  .pipe(inject(sourcecss, { ignorePath:['deploy'], addRootSlash:false}))
  .pipe(inject(sourcejs, { ignorePath:['deploy'], addRootSlash:false}))
  .on('error', handleErrors)
  .pipe(gulp.dest(config.gzip.dest));
});
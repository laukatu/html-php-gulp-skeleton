'use strict';

var gulp        = require('gulp');

gulp.task('generateRand', function() {

  global.rand = Math.floor((Math.random() * 999999999999) + 1);
  
});
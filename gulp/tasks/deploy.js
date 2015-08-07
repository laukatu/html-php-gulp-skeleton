'use strict';

var config       = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', ['clean'], function(cb) {

  cb = cb || function() {};
  global.isProd = true;

  global.rand = Math.floor(Math.random() * 99999999999999) + 99999999999;

  runSequence(['styles', 'images', 'fonts', 'scripts'], 'inject', cb);
  
});

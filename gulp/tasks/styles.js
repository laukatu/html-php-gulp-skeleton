'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

  var sources = [];
  var folder = config.styles.srcfolder;
  for(var i = 0; i<config.styles.src.length; i++){
    sources.push(folder+'/'+config.styles.src[i]);
  }
  console.log(sources);

  return gulp.src(sources)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .pipe( concat('main-'+global.rand+'.min.css') )
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
});
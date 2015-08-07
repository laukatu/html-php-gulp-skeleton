'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var concat       = require('gulp-concat');
var uglify      = require('gulp-uglify');

gulp.task('scripts', function () {
	
	var sources = [];
	var folder = config.scripts.srcfolder;
	for(var i = 0; i<config.scripts.src.length; i++){
	  sources.push(folder+'/'+config.scripts.src[i]);
	}
	console.log(sources);

	return gulp.src(sources)
	.pipe( concat('main-'+global.rand+'.min.js') )
	.pipe( gulpif(global.isProd, uglify()) )
	.on('error', handleErrors)
	.pipe(gulp.dest(config.scripts.dest))
});
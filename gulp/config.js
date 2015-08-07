'use strict';

module.exports = {
  'styles': {
    'srcfolder': 'app/styles',
    'src' : [
              'vendors/autoinclude/*',
              'development/*'
            ],
    'dest': 'deploy/css'
  },
  'scripts': {
    'srcfolder': 'app/js',
    'src' : [
              'vendors/jquery.js',
              'vendors/autoinclude/*',
              'development/autoinclude/*',
              'development/main.js'
            ],
    'dest': 'deploy/js'
  },
  'images': {
    'src' : 'app/images/**/*',
    'dest': 'deploy/images'
  },
  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'deploy/fonts'
  },
  'gzip': {
    'src': 'app/*.{html,php,xml,json,css,js,js.map}',
    'dest': 'deploy/',
    'options': {}
  },
  'dist': {
    'root'  : 'deploy'
  }
};
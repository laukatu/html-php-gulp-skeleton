'use strict';

var fs = require('fs'); /* require per poder llegir directoris */
var onlyScripts = require('./util/scriptFilter'); /* filtrem els arxius que no siguin .js */
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
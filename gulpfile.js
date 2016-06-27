var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var apiUrl = process.env.BUILD_LIGHT_PROXY_API_URL || 'http://10.2.69.35';
var apiPort = process.env.BUILD_LIGHT_PROXY_API_PORT || 9001;

gulp.task('config', function() {
  gulp.src(['config.template.js'])
    .pipe(plugins.replace(buildRegex('apiUrl'), replaceVariable('apiUrl', apiUrl)))
    .pipe(plugins.replace(buildRegex('apiPort'), replaceVariable('apiPort', apiPort)))
    .pipe(plugins.rename('config.js'))
    .pipe(gulp.dest('./'));
});

function replaceVariable(variable, value) {
  return '\'' + variable + '\': \'' + value + '\'';
}

function buildRegex(variable) {
  var x = new RegExp("['\"](" + variable + ")['\"]:[ a-zA-Z0-9'\"\/.:]*");
  console.log(x)
  return x;
}

gulp.task('default', ['config']);
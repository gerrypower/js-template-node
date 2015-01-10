'use strict';

var gulp = require('gulp');
var config = require('../../config');

gulp.task('watch', function() {
  gulp.watch(config.watch.lint,  ['lint']);
  gulp.watch(config.watch.test,  ['test']);
});

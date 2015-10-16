'use strict';

var eslint = require('eslint/lib/cli');
var gulp = require('gulp');
var globby = require('globby');
var config = require('../../config');

// run eslint without an additional plugin
gulp.task('lint', function(done) {

  // patterns with the same form as gulp.src(patterns)
  var patterns = config.lint.src;

  globby(patterns).then(function(paths) {
    var code = eslint.execute(paths.join(' '));

    if (err) {
      done(err);
      return;
    }

    // additional CLI options can be added here
    if (code) {
      // eslint output already written, wrap up with a short message
      done(new gutil.PluginError('lint', new Error('ESLint error')));
      return;
    }
    done();
  });
});

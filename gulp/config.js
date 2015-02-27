'use strict';

var moduleSrc = ['module-name.js'];
var specDir = 'spec';
var specs = specDir + '/**/*spec.js';
var gulpTasks = ['gulpfile.js', 'gulp/**/*.js'];
var src = ['lib/**/*.js', 'conf/*.js'];
var conf = ['conf/*.json'];
var allSrc = moduleSrc.concat(specs).concat(gulpTasks).concat(src);

module.exports = {
  lint: {
    src: allSrc
  },
  watch: {
    test: allSrc.concat(conf),
    lint: allSrc
  }
};

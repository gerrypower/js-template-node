'use strict';

var moduleSrc = ['module-name.js'];
var specDir = 'spec';
var specs = specDir + '/**/*spec.js';
var gulpTasks = ['gulpfile.js', 'gulp/**/*.js'];
var allSrc = moduleSrc.concat(specs).concat(gulpTasks);

module.exports = {
  lint: {
    src: allSrc
  },
  watch: {
    test: allSrc,
    lint: allSrc
  }
};

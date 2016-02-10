var path = require('path');

// set default source and build directories
var dest = './build';
var src = './src';

module.exports = {
  // options for Gulp tasks go here
  markup: {
    /* there most likely won't be a need for any markup other than a main
    index.html but you can add more configuration here if necessary */
    src: src + '/index.html',
    dest: dest
  },
  server: {
    script: 'server/main.js',
    ext: 'js html',
    watch: ['server/**/*.*','src/**/*.*'],
    tasks: function(changedFiles){
      var tasks = []
      changedFiles.forEach(function (file) {
        if (path.extname(file) === '.js' && !~tasks.indexOf('script')) tasks.push('script')
        if (path.extname(file) === '.css' && !~tasks.indexOf('styles')) tasks.push('styles')
        if (path.extname(file) === '.html' && !~tasks.indexOf('markup')) tasks.push('markup')
      })
      return tasks;
    }
  },
  scripts: {
    src: 'src/js/main.js',
    dest: dest
  },
  styles: {
    src: 'src/css/pfnavigation.css',
    dest: dest
  },
};

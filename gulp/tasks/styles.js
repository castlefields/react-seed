var gulp = require('gulp');
var config = require('../config').styles;

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
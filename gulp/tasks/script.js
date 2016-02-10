var gulp = require('gulp');
var config = require('../config').scripts;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('script', function() {
	browserify(config.src, {standalone: 'PlatformNavigation'})
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.dest));
});
var gulp = require('gulp');
var paths = require('../paths');

// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
    gulp.watch(paths.source, ['build-system']).on('change', reportChange);
    gulp.watch(paths.html, ['build-html']).on('change', reportChange);
    gulp.watch(paths.less, ['build-css']).on('change', reportChange);
});
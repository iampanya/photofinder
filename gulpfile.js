var gulp = require('gulp');

var browserSync = require('browser-sync');


gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['*.html'], browserSync.reload);
})

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  })
});
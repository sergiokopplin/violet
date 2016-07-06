var gulp = require('gulp')

gulp.task('watch', function() {
  gulp.watch(['_sass/**/*', '_includes/*', '_layouts/*', '*.html', '_config.yml'], ['jekyll-rebuild'])
})

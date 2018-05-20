var gulp = require('gulp')
var pug = require('gulp-pug')
var server = require('gulp-express')

gulp.task('server', function () {
    server.run(['app.js']);
    gulp.watch(['./dist/*.html'], server.notify);
    gulp.watch(['./public/css/style.css'], server.notify);
    gulp.watch(['app.js'], [server.run]);
});


gulp.task('pug', function() {
    gulp.src('./views/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {
    gulp.watch(['./views/*.pug'], ['pug'])
})

gulp.task('default', ['server', 'pug', 'watch'])
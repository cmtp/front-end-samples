/**
 * Created by chris on 12/4/2016.
 */
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    historyApiFallback = require("connect-history-api-fallback"),
    sass = require("gulp-sass"),
    sourcemaps = require('gulp-sourcemaps'),
    lib = require('bower-files')();

// 1. Servidor web de desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: '0.0.0.0',
        port: 8085,
        livereload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback() ];
        }
    });
});
/*recargar sass*/
gulp.task('sass', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

/*recargar css*/
gulp.task('css', function() {
    gulp.src('./app/**/*.css')
        .pipe(connect.reload());
});
/*recargar js*/
gulp.task('js', function() {
    gulp.src('./app/**/*.js')
        .pipe(connect.reload());
});
/*recargar html*/
gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

/*inspector que escucha los cambios en los css y html*/
gulp.task('watch', function() {
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/**/*.js'], ['js']);
});
/* Compilar y minificar archivos para colocar en produccion */
gulp.task('build',
          ['minify-html', 'minify-css', 'minify-js', 'bower-min-js', 'bower-min-css']
         );

/*tareas por defecto*/
gulp.task('default',
    ['bower-css', 'bower-js', 'server', 'watch']
);

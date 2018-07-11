/**
 * Created by Crumina on 09.11.2017.
 */


/*=========== GULP + Plugins init ==============*/

var gulp = require('gulp'),
	plumber = require('gulp-plumber'), // generates an error message
	prefixer = require('gulp-autoprefixer'), // automatically prefixes to css properties
	uglify = require('gulp-uglify'), // for minimizing js-files
	cssmin = require('gulp-cssmin'), // for minimizing css-files
	concat = require('gulp-concat'), // for concatenating files
	svgmin = require('gulp-svgmin'), // for minimizing svg-files
	handlebars = require('gulp-compile-handlebars'), // dynamically generates an HTML page from parts
	rename = require('gulp-rename'), // to rename files
	sass = require('gulp-sass'), // for compiling scss-files to css
	jsfilesInit = require('./src/js/js-files-init.json'), // contains in the list of all used js-plugins (initialization)
	browserSync = require('browser-sync'), // for online synchronization with the browser
	imagemin = require('gulp-imagemin'), // for minimizing images-files
	cache = require('gulp-cache'), // connecting the cache library
	del = require('del'), // for the cleaning APP
	htmlhint = require("gulp-htmlhint"), // for HTML-validation
	runSequence = require('run-sequence'); // for sequential execution of Gulp-tasks


/*=========== Compile SCSS ==============*/

gulp.task('sass', function() {

    gulp.src('src/sass/*.scss')
		.pipe(plumber())
        .pipe(sass())
		.pipe(prefixer())
		.pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('./app/css'))
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./src/css'))
		.pipe(gulp.dest('./app/css'));

	gulp.src('src/Bootstrap/scss/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest('./src/Bootstrap/dist/css'))
		.pipe(gulp.dest('./app/Bootstrap/dist/css'))

        .pipe(browserSync.reload({
            stream: true
        }));
});

/*=========== Compile JS ==============*/

gulp.task('js', function () {

	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app/js'));

	gulp.src(jsfilesInit)
		.pipe(concat('base-init.js'))
		.pipe(gulp.dest('./src/js'))
		.pipe(gulp.dest('./app/js'));

	gulp.src('src/Bootstrap/dist/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./src/Bootstrap/dist/js'))
		.pipe(gulp.dest('./app/Bootstrap/dist/js'))

	.pipe(browserSync.reload({
		stream: true
		}))
});


/*=========== Watch ==============*/

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/Bootstrap/scss/*.scss', ['sass']);
});


/*=========== ON-Line synchronization from browsers ==============*/

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        }
    })
});


/*=========== Minimization IMAGE ==============*/

gulp.task('images', function(){
    gulp.src('src/img/*')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('app/img'));

	gulp.src('src/screenshots/*')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('app/screenshots'));
});

gulp.task('compress', function() {
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/img'));

	gulp.src('src/screenshots/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/screenshots'));
});


/*=========== Minimization SVG ==============*/

gulp.task('svg-min', function () {
	gulp.src('src/svg-icons/*.svg')
		.pipe(svgmin({
			plugins: [{
				removeDoctype: true
			}, {
				removeComments: true
			}, {
				cleanupNumericValues: {
					floatPrecision: 2
				}
			}, {
				convertColors: {
					names2hex: true,
					rgb2hex: true
				}
			}]
		}))
		.pipe(gulp.dest('app/svg-icons'));

});


/*============= Copy Files unchanged ==============*/

gulp.task('copy-files', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('app/fonts'));

	gulp.src('src/mp3/*.*')
		.pipe(gulp.dest('app/mp3'));

	gulp.src('src/videos/*.*')
		.pipe(gulp.dest('app/videos'));

	gulp.src('src/svg-icons/sprites/*.svg')
		.pipe(gulp.dest('app/svg-icons/sprites'));

	gulp.src('src/js/webfontloader.min.js')
		.pipe(gulp.dest('app/js'))
});


/*============= Auto-deleting temporary files ==============*/

gulp.task('clean-app', function(){
    del(['app/**/*'])
});


/*============= Handlebars ==============*/

gulp.task('html', function() {
	return gulp.src('src/pages-sources/*.hbs')
		.pipe(handlebars({}, {
			ignorePartials: true,
			batch: ['src/partials/']
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('src'))
		.pipe(gulp.dest('app'))
});


/*============= HTML-validator ==============*/

gulp.task('html-valid', function() {
	gulp.src("app/*.html")
		.pipe(htmlhint());
});


/*============= Join tasks ==============*/

gulp.task('default', function(callback) {
	runSequence([ 'sass', 'browserSync', 'watch'],
		callback
	)
});

gulp.task('build', ['clean-app'], function(done) {
	// task 'clean-app' is done now
	runSequence('sass', 'html', 'html-valid', 'js', 'svg-min', 'copy-files', 'images', 'compress', done);
});
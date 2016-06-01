var gulp = require("gulp");
var paths = require("../paths");
var plumber = require("gulp-plumber");
var changed = require("gulp-changed");
var typescript = require("gulp-typescript");
var tsc = require("typescript");
var sourcemaps = require("gulp-sourcemaps");
var tsProject = typescript.createProject("./tsconfig.json", {
    typescript: tsc
});

gulp.task("build-system", function () {
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(paths.output));
});

gulp.task("build-html", function () {
    return gulp.src(paths.html)
        .pipe(changed(paths.output, { extension: '.html'}))
        .pipe(gulp.dest(paths.output));
});


gulp.task("build-css", function () {
    return gulp.src(paths.css)
        .pipe(changed(paths.output, { extension: '.css'}))
        .pipe(gulp.dest(paths.output));
});
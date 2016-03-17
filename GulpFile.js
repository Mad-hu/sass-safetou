'use strict';
var gulp = require('gulp');
//var sass = require('gulp-sass');
var compass = require('gulp-compass');

gulp.task('css', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch(['./sass/*.scss','./sass/*/*.scss'], ['css']);
});

gulp.task('default',['watch'],function() {
    console.log("task default");
});
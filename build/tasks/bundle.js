var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  baseURL: './wwwroot',                   // baseURL of the application
  configPath: './wwwroot/config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        '[*.js]',
        '*.html!text',
        '*.css!text',        
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/vendor-build": {
      includes: [
        'aurelia-framework', 
        'aurelia-bootstrapper', 
        'aurelia-history-browser', 
        'aurelia-loader-default',
        'aurelia-logging-console', 
        'aurelia-router',
        'aurelia-templating-binding', 
        'aurelia-templating-resources', 
        'aurelia-templating-router',
        'bootstrap/css/bootstrap.css!text'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', ['build'], function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

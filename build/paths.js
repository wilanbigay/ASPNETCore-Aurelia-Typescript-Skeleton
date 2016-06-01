var appRoot = 'src/';
var outputRoot = 'wwwroot/dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  output: outputRoot,
  dtsSrc: [
    'typings/**/*.ts',
    './wwwroot/jspm_packages/**/*.d.ts'
  ]
}
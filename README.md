# ASP.NET Core Skeleton with Aurelia and TypeScript

Contains a stock setup of ASP.NET Core RC2 WebAPI with basic Aurelia and Typescript.

This is take from the blog of [@sujesharuki](https://twitter.com/sujesharukil).  Please read his [article](http://www.sujesharukil.com/blog-native/2015/12/30/creating-an-aurelia-project-with-visual-studio-code-and-typescript-from-scratch).

## This application consists of:

*   Sample pages using ASP.NET Core MVC
*   [Aurelia](http://aurelia.io/) for front end SPA framework
*   [Gulp](https://go.microsoft.com/fwlink/?LinkId=518007) for managing client-side libraries
*   [Typescript]() for compiling typescript

## Prerequesites
The following must already be installed globally on your system
*   [NodeJS](https://nodejs.org) and [npm](https://www.npmjs.com/)
*   [Asp.Net 5](https://get.asp.net/)
*   [Visual Studio Code](https://code.visualstudio.com/)
*   [Yeoman](http://yeoman.io/) and [Yeoman ASP.NET Generator](https://github.com/OmniSharp/generator-aspnet)
*   [jspm](http://jspm.io/)
*   [Gulp](http://gulpjs.com/)
*   [tsd](https://github.com/DefinitelyTyped/tsd)

## Running the project
Clone or download this project into your local folder and cd into that folder.  Do the following
```
$ npm install
$ jspm install
$ gulp build
$ dotnet restore
$ dotnet run
```
Open a browser and navigate to http://localhost:5000 to see the application running.

## Setting up this project
This project has been built from scratch using the blog post above as a guide.  The following are the steps to get to this point.



### Create Web API Application Project
```
$ yo aspnet
```
Choose WebAPI fpr the type of project and type the project name.  In this case let's name our project MyProject

### Go inside the project folder and download the nuget packages and build the project
```
$ cd MyProject
$ dotnet restore
$ dotnet build
```
If you want to see it running, do
```
$ dotnet run
```
### Create src, build and test folders.  
The src folder is where the front end assets resides. The build folder will contain  the build articfacts and test folder will contain the test scripts.

```
$ mkdir src
$ mkdir build
$ mkdir test
```

### Create the default page inside wwwroot
```
$ cd wwwroot
$ yo aspnet:HTMLPage index
$ cd ..
```
This will create the index.html page with a welcome message.  You won't still be able to see this page until you complete the next section

### Configuring the application to use static files
Open VSCode by typing
```
code .
```
Open project.json file and add the following like in the list of packages
```javascript
"Microsoft.AspNetCore.StaticFiles": "1.0.0-rc2-final"
```
Open Startup.cs and add the following lines in the configure method
```
app.UseDefaultFiles();
app.UseStaticFiles();
```
Now run the application and go to http://localhost:5000 and see index.html loaded.  You may want to edit index.html and put something to see it working.

### Create project.json file
```
$ yo aspnet:PackageJson
```

### Install jspm, gulp and tsd locally as saved dependencies
```
$ npm install jspm gulp tsd --save-dev
```

### Initialize tsd.  
TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.
```
$ tsd init
```

### Create typescript configuration file
```
$ yo aspnet:TypeScriptConfig
``` 
This will create tsconfig.json.  Open this file in VSCode and replace its contents with
```javascript
{
    "compilerOptions": {
        "noImplicitAny": false,
        "noEmitOnError": true,
        "removeComments": false,
        "sourceMap": true,
        "target": "es5",
        "module": "amd",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

### Create the gulpfile
```
$ yo aspnet:Gulpfile
```
This will create gulpfile.js

### Initialize jspm 
Enter "./wwwroot" for the second question and "no" to the transpiler. Leave the rest to its defaults.
```
$ jspm init
```

### Install type definitions for 
```
$ tsd install systemjs gulp --save
$ tsd install node gulp-plumber gulp-changed gulp-typescript gulp-sourcemaps typescript core-js --save
```

### Install Aurelia dependencies
```
$ jspm install aurelia-framework aurelia-bootstrapper aurelia-history-browser aurelia-loader-default aurelia-logging-console aurelia-router aurelia-templating-binding aurelia-templating-resources aurelia-templating-router
```

### Install bootstrap and font-awesome
```
$ jspm install bootstrap font-awesome
```

### Modify index.html
Let's modify index.html so that it will load the scripts.  Open index.html in VSCode and replace the contents with the following
```html
<!doctype html>
<html lang="">
  <head>
      <meta charset="utf-8" />
      <title>Aspnet Demo</title>
      <link rel="stylesheet" href="jspm_packages/npm/font-awesome@4.6.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="jspm_packages/github/twbs/bootstrap@3.3.6/css/bootstrap.css">
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- Place favicon.ico in the root directory -->
  </head>
  <body aurelia-app>
    <div class="splash">
        <div class="message">Loading</div>
        <i class="fa fa-spinner fa-spin"></i>
    </div>
    
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
        System.import("aurelia-bootstrapper");
    </script>
  </body>
</html>
```

### Creating the App class and html
By default convention, the Aurelia bootstrapper will look for App class so let's create that.
Inside the src folder create a file called "app.ts" and "app.html".
Open app.ts and replace its content with the code:
```typescript
export class App {
    firstName: string = "";
    lastName: string = "";
}
```
Open app.html and replace its content with the code:
```html
<template>
    <div class="container">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="inpFirstName" placeholder="First Name" value.bind="firstName">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inpLastName" placeholder="Last Name" value.bind="lastName">
            </div>
        </form>
        <footer>
            <header>
                <h4>${firstName} ${lastName}</h4>
            </header>
        </footer>
    </div>
</template>
```

### Setup the build process
It's now time to build our project.

Back in VSCode, create a new file called "paths.js" and put the code below. This file contains the paths of all our source files and where the destination folder is. This is the key to our gulp build process.
```javascript
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
```

Now, create a folder with the name "tasks" and then add a file called "build.js" with the following code
```javascript
var gulp = require("gulp");
var runSequence = require('run-sequence');
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
```

The packages used in the gulpfile needs to be installed.  So back in the command prompt,
```
$ npm install gulp-plumber gulp-changed gulp-typescript gulp-sourcemaps run-sequence del vinyl-paths run-sequence typescript --save-dev
```

While we're at it, let's also install the type definitions for these gulp packages
```
$ tsd install node gulp-plumber gulp-changed gulp-typescript gulp-sourcemaps typescript core-js --save
``` 

Back in VS Code, open build/tasks/build.js and add the following two tasks at the end of the file. This basically copies all the "html" and "css" files over to a single distrubution folder where TypeScript puts the generated JavaScript files. the distribution folder is "wwwroot/dist".
```javascript
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

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css'],
    callback
  );
});
```
Create another file in build/tasks called clean.js with the following contents
```javascript
var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});
```

Open config.js file under wwwroot, and replace the "paths" property with the section below. All we are doing is saying that all our files will be served from "dist/" unless otherwise specified.
```javascript
paths: {
        "*": "dist/*",
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    }
```

One final thing, we need require-dir so that gulp would look for our build task in our build folder
```
$ npm install require-dir --save-dev
```

Now, open gulp file and replace its content with the code
```javascript
require('require-dir')('build/tasks');
```

Let's compile and run the project
```
$ gulp build
$ dotnet run
```
Navigate to http://localhost:5000 and see it in all its glory.
Now, let's create a task that watches for changes and recompile them when it sees one.  Add a file under tasks folder called "watch.js and put in the following code
```javascript
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
```

Instead of doing ```gulp build-system build-html build-css```, do the following instead
```
$ gulp watch
``` 
Try editing app.html and put in something.  Changes should be reflected in the browser after a full refresh.

## More basic Aurelia features
Let's add more aurelia features now that we have a working skeleton.  

### Changing the default bootstrapper
Back in VS Code, open wwwroot/index.html file. Notice the line "<body aurelia-app>". By convention, when aurelia-bootstrapper sees aurelia-app, it will look for files named app.html and app.js and load it up. That's how the application is setup to run right now. Let us change that. We need a bit more flexibility and control. change that line to 
```html
<body aurelia-app="main">
```

Now instead of a file named app, aurelia-bootstrapper will look for a file named "main". Let us create that. Right click "src" folder and create a new typescript file "main.ts". Add the following code. This will load app.ts/app.html after doing any required configuration.
```typescript
import {Aurelia} from "aurelia-framework";

export function configure(aurelia: Aurelia){
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
        
        aurelia.start()
            .then(a => a.setRoot());
}
```

### Adding a bit routing
Open app.ts and replace it's content with the code below. Once main.ts loads up app.ts, it will look for a configureRouter function. When it finds it, it will execute it. We will create a single route here. Basically, when you navigate to http://localhost:5000, or http://localhost:5000/#home, it will look for (by convention) a file pair "home.js and home.html", load it up, bind it and serve it!
```typescript
import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia Demo';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' }
        ]);

        this.router = router;
    }
}
```
Open app.html and replace its content. <router-view> is an aurelia component that will look what aurelia-router is serving up and load the contents inside it. Essentially, when home.html becomes available, its content will be loaded inside <router-view> tag.
```html
<template>
  <div class="page-host container">
    <router-view></router-view>
  </div>
</template>
```

Add home.ts and home.html inside src folder with the following contents
```typescript
export class Home {
    welcomeMessage: string = "Aurelia Skeleton using TypeScript and VSCode";
}
```
```html
<template>
    <h1>Welcome to ${welcomeMessage}</h1>
</template>
```

If gulp watcher and dotnet is still running, you would be able to see the home page when you refresh the browser

## Bundling
To minimize the number of request made to the server, we need to bundle our files

### Install the aurelia bunlder and text plugin
```
$ npm install aurelia-bundler --save-dev
$ jspm install text
```

### Create the bundle task
In VSCode, create a file in called bundle.js under build/tasks folder with the following contents
```javascript
var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  baseURL: './wwwroot',                   // baseURL of the application
  configPath: './wwwroot/config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text',        
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
  return bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
```


Happy programming!!!
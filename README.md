# ASP.NET Core Skeleton with Aurelia and TypeScript

Contains a stock setup of ASP.NET Core RC2 WebAPI with basic Aurelia and Typescript.

This is take from the blog of [@sujesharuki](https://twitter.com/sujesharukil).  Please read his [article](http://www.sujesharukil.com/blog-native/2015/12/30/creating-an-aurelia-project-with-visual-studio-code-and-typescript-from-scratch).

## This application consists of:

*   Sample pages using ASP.NET Core MVC
*   [Aurelia](http://aurelia.io/) for front end SPA framework
*   [Gulp](https://go.microsoft.com/fwlink/?LinkId=518007) for managing client-side libraries
*   [Typescript]() for compiling typescript

## Setting up this project

### Prerequesites
The following must already be installed globally on your system
*   [NodeJS](https://nodejs.org) and [npm](https://www.npmjs.com/)
*   [Asp.Net 5](https://get.asp.net/)
*   [Visual Studio Code](https://code.visualstudio.com/)
*   [Yeoman](http://yeoman.io/) and [Yeoman ASP.NET Generator](https://github.com/OmniSharp/generator-aspnet)
*   [jspm](http://jspm.io/)
*   [Gulp](http://gulpjs.com/)
*   [tsd](https://github.com/DefinitelyTyped/tsd)

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

### Initialize jspm inside of wwwroot
Enter "./wwwroot" for the second question and "no" to the transpiler. Leave the rest to its defaults.
```
$ cd wwwroot
$ jspm init
$ cd ..
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
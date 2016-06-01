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
The following must already be installed on your system
*   [NodeJS](https://nodejs.org) and [npm](https://www.npmjs.com/)
*   [Asp.Net 5](https://get.asp.net/)
*   [Visual Studio Code](https://code.visualstudio.com/)
*   [Yeoman](http://yeoman.io/) and [Yeoman ASP.NET Generator](https://github.com/OmniSharp/generator-aspnet)
*   [jspm](http://jspm.io/)

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

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'dist',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
            // other libraries
            'materialize-css': 'npm:materialize-css',
            'angular2-in-memory-web-api':'npm:angular2-in-memory-web-api',
            'angular2-materialize':'npm:angular2-materialize'
        },
        transpiler: 'plugin-babel',
        bundles:{
            "npm:rxjs-system-bundle/Rx.system.js": [
              "rxjs",
              "rxjs/*",
              "rxjs/operator/*",
              "rxjs/observable/*",
              "rxjs/scheduler/*",
              "rxjs/symbol/*",
              "rxjs/add/operator/*",
              "rxjs/add/observable/*",
              "rxjs/util/*"
            ]
          },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js'
            },
            rxjs: {               
                defaultExtension: false
            },
             'materialize-css': {
                "format": "global",
                "main": "dist/js/materialize",
                "defaultExtension": "js"
              },
              'angular2-materialize': {
                "main": "dist/index",
                "defaultExtension": "js"
              },
              'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        }
    });
})(this);
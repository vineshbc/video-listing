(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color:lightblue;\r\n    display:block;\r\n    padding:2%;\r\n    color:white;\r\n    font-size: 50px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcGFkZGluZzoyJTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"container-full\">\r\n      <div class=\"row header\">\r\n        <div class=\"col-sm-12\">\r\n          <p style=\"color:white;\">{{title}}</p>    \r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'VIDEO-LIST';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbCell {\r\n    display: table-cell;\r\n  width: 500px;\r\n    padding: 10px;\r\n  }\r\n   .thumbCell video{\r\n    width: 500px;\r\n    height: 285px;\r\n    border: 5px ridge #07a;\r\n    margin: 0;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7RUFDdEIsYUFBYTtJQUNYLGNBQWM7R0FDZjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsVUFBVTtHQUNYIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJDZWxsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgIC50aHVtYkNlbGwgdmlkZW97XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI4NXB4O1xyXG4gICAgYm9yZGVyOiA1cHggcmlkZ2UgIzA3YTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n        <div class=\"thumbCell\">\n      <video id=\"video\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video><br>\n       <i><b>Nexus Q, a product by Google.</b></i><br>\n      (mpd only)\n    </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"thumbCell\">\n      <video id=\"video2\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video><br>\n      <i><b>Self-driving car</b></i><br>\n     (mpd only)\n    </div>\n    </div>\n    <div class=\"w-100\"></div>\n    <div class=\"col\"> \n        <div class=\"thumbCell\">\n      <video id=\"video3\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video><br>\n      <i><b>Google glass</b></i><br>\n     (mpd only)\n    </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"thumbCell\"> \n      <video id=\"video4\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video><br>\n      <i><b>Gmail motion</b></i><br>\n     (mpd only)\n    </div>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myurl = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd';
        this.manifestUri = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-manifest.mpd';
        this.myurl2 = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-manifest.mpd';
        this.myurl3 = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-manifest.mpd';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initApp();
    };
    HomeComponent.prototype.initApp = function () {
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();
        // Check to see if the browser supports the basic APIs Shaka needs.
        if (shaka.Player.isBrowserSupported()) {
            // Everything looks good!
            this.initPlayer();
            this.initPlayer2();
            this.initPlayer3();
            this.initPlayer4();
        }
        else {
            // This browser does not have the minimum set of APIs we need.
            console.error('Browser not supported!');
        }
    };
    HomeComponent.prototype.initPlayer = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.manifestUri).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer2 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video2');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent2);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError2(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent2 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError2 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer3 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video3');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent3);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl2).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError3(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent3 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError3 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer4 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video4');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent4);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl3).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError4(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent4 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError4 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\Desktop\assignment\angular\vedio-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
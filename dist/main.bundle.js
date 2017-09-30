webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/angular-materials.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialsModule = /** @class */ (function () {
    function AngularMaterialsModule() {
    }
    AngularMaterialsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                // ANGULAR MATERIALS
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdRadioModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MdStepperModule */]
            ],
            exports: [
                // ANGULAR MATERIALS
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdRadioModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MdStepperModule */]
            ],
            declarations: []
        })
    ], AngularMaterialsModule);
    return AngularMaterialsModule;
}());

//# sourceMappingURL=angular-materials.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  overflow-y: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_loading_loading_component__ = __webpack_require__("../../../../../src/app/auth/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Goodies





// Other Goodies

// Modules

// Services



// Components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__auth_loading_loading_component__["a" /* LoadingComponent */],
            ],
            entryComponents: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_file_service__["a" /* FileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_loading_loading_component__ = __webpack_require__("../../../../../src/app/auth/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_routing__ = __webpack_require__("../../../../../src/app/main/main.routing.ts");




var APP_ROUTES = [
    // Home Page Routes
    { path: '', redirectTo: '/main/search', pathMatch: 'full' },
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_2__auth_loading_loading_component__["a" /* LoadingComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */], children: __WEBPACK_IMPORTED_MODULE_3__main_main_routing__["a" /* MAIN_ROUTES */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner></md-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/auth/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        this.authService.handleAuthentication();
        this.authService.listenforAuthentication();
    };
    LoadingComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.authService.listener);
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/auth/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoadingComponent);
    return LoadingComponent;
    var _a, _b;
}());

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-sidenav{\n  min-width: 300px;\n}\n.chatCard {\n  margin: 10px;\n}\n\n.message-screen {\n  height: 600px;\n  width: 600px;\n  margin: 0;\n}\n\n.message{\n  margin: 8px;\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n}\n\n.sidenav-button {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  min-width: 30px;\n  line-height: 30px;\n  padding-right: 4px;\n  padding-left: 4px;\n}\n\n.createChat {\nwidth: 100%;\n}\n\n.spacer {\n  height: 40px;\n}\n\n.well {\n  background-color: snow;\n  position: absolute;\n  bottom: 14px;\n margin-left: 4%;\n  margin-bottom: 0;\n  width: 400px;\n  border-radius: 1px;\n  padding: 0;\n}\n\n\n.sendMessage  {\n  position:fixed;\n  right: 30px;\n  bottom: 15px;\n}\n\n.inputA {\n  border: 0;\n  background-color: transparent;\n  width: 398px;\n  color: #0097A7;\n}\n\n.chatspace  {\n  height: 470px;\n  overflow-y: scroll;\n}\n\n.emptychat  {\nmargin:  0 auto;\n  position: fixed;\n  top: 50%;\n  right: 40%;\nopacity: .5;\n}\n\n\n.panel-body {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n\n}\n\n.panel-header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 12px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = " <md-sidenav-container class=\"message-screen\">\n\n    <!-- SIDENAV TOGGLE BUTTON -->\n    <button md-raised-button class=\"sidenav-button\" (click)=\"sideNav.open()\">Chats</button>\n\n    <!-- SIDENAV CONTENT -->\n    <md-sidenav #sideNav (close)=\"scrollToBottom()\">\n      <button md-raised-button class=\"createChat\" (click)=\"createChat()\">Create Chat</button>\n      <div class=\"chatCard panel panel-default\" *ngFor=\"let chat of Chats\" >\n        <div class=\"selecter\" (click)=\"setCurrentChat(chat)\">\n          <div class=\"panel-header\">\n          <span *ngFor=\"let user of chat.Participants\">\n            <span *ngIf=\"chat.Participants.length > 1 && user.User !== myID\">{{user.Username}}</span>\n          </span>\n          </div>\n          <div class=\"panel-body\" *ngIf = \"chat.Messages.length > 0\">\n            {{chat.Messages[chat.Messages.length-1].Author}}: {{chat.Messages[(chat.Messages.length)-1].Content}}\n          </div>\n        </div>\n      </div>\n    </md-sidenav>\n\n\n  <!-- HEADER -->\n  <md-toolbar color=\"primary\" class=\"header\">\n    <span *ngFor=\"let user of currentRecipents\">{{user}}</span>\n  </md-toolbar>\n    <!--CHAT SPACE -->\n    <div *ngIf=\"currentChat\" class=\"chatspace\" #chatSpace>\n      <div class=\"panel panel-default message\" *ngFor=\"let message of currentChat.Messages\">\n        <div class=\"panel-body\">\n          {{message.Author}}: {{message.Content}}\n        </div>\n      </div>\n    </div>\n    <!-- INPUT SPACE & FOOTER -->\n    <div class=\"form\" (submit)=\"sendMessage(Message)\">\n      <md-toolbar color=\"primary\" class=\"footer\">\n        <div class=\"well\">\n          <input  class=\"inputA\" id=\"message\" type=\"text\" [(ngModel)]=\"Message\">\n        </div>\n      </md-toolbar>\n      <button md-raised-button class=\"sendMessage\" type=\"submit\" (click)=\"sendMessage(Message)\" >SEND</button>\n    </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/main/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_models_chat_model__ = __webpack_require__("../../../../../src/app/ts models/chat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/main/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_models_message_model__ = __webpack_require__("../../../../../src/app/ts models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, userService, snackbar) {
        this.chatService = chatService;
        this.userService = userService;
        this.snackbar = snackbar;
        this.Chats = [];
        this.myID = localStorage.getItem('userID');
        this.currentRecipents = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.getChats();
        this.getUser();
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.listener);
    };
    ChatComponent.prototype.createChat = function () {
        var _this = this;
        var newChat = new __WEBPACK_IMPORTED_MODULE_1__ts_models_chat_model__["a" /* Chat */]([{ User: '598a1805c3767b252c0c9778', Username: 'Jeff Haskell', Deleted: false },
            { User: '598cc5a994630c50bc72b5f2', Username: 'Justin Estrada', Deleted: false }]);
        console.log(newChat);
        this.chatService.createChat(newChat)
            .subscribe(function (data) {
            _this.getChats();
        }, function (error) {
            console.error(error);
        });
    };
    ChatComponent.prototype.deleteChat = function (chat) {
        var _this = this;
        this.chatService.deleteChat(localStorage.getItem('userID'), chat)
            .subscribe(function (data) {
            _this.getChats();
        }, function (error) { console.error(error); });
    };
    ChatComponent.prototype.getChats = function () {
        var _this = this;
        this.chatService.getUsersChats(localStorage.getItem('userID'))
            .subscribe(function (data) {
            console.log(data.result);
            _this.Chats = data.result;
            console.log(_this.Chats);
            clearInterval(_this.listener);
        }, function (error) {
            console.error(error);
        });
    };
    ChatComponent.prototype.getMessages = function (currentChat) {
        var _this = this;
        this.chatService.getMessages(currentChat)
            .subscribe(function (data) {
            console.log('subscribed');
            _this.currentChat.Messages = data.result.Messages;
            _this.scrollToBottom();
        }, function (error) {
            console.error(error);
        });
    };
    ChatComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(localStorage.getItem('userID'))
            .subscribe(function (data) {
            _this.myUser = data.obj;
        });
    };
    ChatComponent.prototype.setCurrentChat = function (chat) {
        var _this = this;
        this.currentChat = chat;
        this.currentChat.Participants.forEach(function (user) {
            if (user.User !== localStorage.getItem('userID')) {
                _this.currentRecipents.push(user.Username);
            }
        });
        this.sideNav.close();
        this.listenforMessages();
    };
    ChatComponent.prototype.sendMessage = function (content) {
        var _this = this;
        var newMessage = new __WEBPACK_IMPORTED_MODULE_4__ts_models_message_model__["a" /* Message */](this.myUser.username, localStorage.getItem('userID'), content, new Date().getTime().toString());
        this.chatService.sendMessage(newMessage, this.currentChat._id)
            .subscribe(function (data) {
            _this.snackbar.open('Delivered', null, {
                duration: 500
            });
            _this.getMessages(_this.currentChat);
            _this.Message = '';
        }, function (error) {
            console.error(error);
        });
    };
    ChatComponent.prototype.scrollToBottom = function () {
        this.chatSpace.nativeElement.scrollTop = this.chatSpace.nativeElement.scrollHeight;
    };
    ChatComponent.prototype.listenforMessages = function () {
        var _this = this;
        this.listener = setInterval(function () {
            console.log('subscribed');
            _this.getMessages(_this.currentChat);
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sideNav'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "sideNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatSpace'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "chatSpace", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/main/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MdSnackBar */]) === "function" && _c || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__("../../../../../src/app/main/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.createChat = function (newChat) {
        var body = JSON.stringify(newChat);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('https://loca-app.herokuapp.com/chat/createChat' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ChatService.prototype.sendMessage = function (newMessage, chatID) {
        var body = JSON.stringify(newMessage);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('https://loca-app.herokuapp.com/chat/createMessage/' + chatID + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ChatService.prototype.getMessages = function (currentChat) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.get('https://loca-app.herokuapp.com/chat/getMessages/' + currentChat._id + token, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ChatService.prototype.getUsersChats = function (userID) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://loca-app.herokuapp.com/chat/getChats/' + userID + token, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ChatService.prototype.deleteChat = function (userID, chat) {
        var body = JSON.stringify(chat);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('https://loca-app.herokuapp.com/chat/deleteChat' + userID + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ChatService);
    return ChatService;
    var _a;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-card/collection-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <md-grid-list *ngIf=\"locations.length >= 9\" cols=\"3\" rowHeight=\"1:1\">\n      <md-grid-tile *ngFor=\"let location of locations\">\n        <img src=\"https://loca-app.herokuapp.com/files/{{location._id}}\" style=\"width: 100%; height: 100%\">\n      </md-grid-tile>\n    </md-grid-list>\n    <md-grid-list *ngIf=\"locations.length >= 6 && locations.length < 9\" cols=\"2\" Height=\"1:1\">\n      <md-grid-tile *ngFor=\"let location of locations\">\n        <img src=\"https://loca-app.herokuapp.com/files/{{location._id}}\" style=\"width: 100%; height: 100%\">\n      </md-grid-tile>\n    </md-grid-list>\n    <md-grid-list *ngIf=\"collection.locations.length < 6\" cols=\"1\" height=\"1:1\">\n      <md-grid-tile *ngFor=\"let location of locations; let i = index\">\n        <img *ngIf=\"i === 0\"  src=\"https://loca-app.herokuapp.com/files/{{location._id}}\" style=\"width: 100%; height: 100%\">\n      </md-grid-tile>\n    </md-grid-list>\n\n\n    <div class=\"nub\">\n      <md-icon class=\"nubicon\" svgIcon=\"Glass\" color=\"primary\"  (click)=\"emitSelection(collection)\" ></md-icon>\n    </div>\n    <md-grid-tile-footer *ngIf=\"Profile\">\n      <img src=\"{{Profile.picture}} \" style=\"width: 40px; height: 40px; border-radius: 20px; \">\n      <div class=\"footer-info\">\n        <h6>{{collection.name}}</h6>\n        <p>{{Profile.name}}</p>\n      </div>\n  <md-icon class=\"stack\" color=\"primary\" svgIcon=\"stack\"> </md-icon>\n  <p class=\"stack-number\">{{collection.locations.length}}</p>\n  <!---\n  <md-icon svgIcon=\"Trash Can\" color=\"primary\"  (click)=\"deleteClicked.emit(collection._id)\" class=\"trash\"></md-icon>\n  -->\n     </md-grid-tile-footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-card/collection-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-grid-tile-footer {\n  background-color: white !important;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.footer-info {\n  padding-top: 12px; }\n\nh6 {\n  margin-left: 10px !important;\n  font-family: 'Raleway', sans-serif;\n  font-size: 16px !important;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 700;\n  line-height: 16px;\n  color: black; }\n\np {\n  margin-left: 10px !important;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px !important;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 10px;\n  color: black; }\n\n#trashcan {\n  position: absolute;\n  right: 8px;\n  bottom: 8px; }\n\n.info {\n  position: absolute;\n  top: 8px;\n  left: 8px; }\n\n.trash {\n  position: absolute;\n  bottom: 8px;\n  right: 20px; }\n\n.nub {\n  overflow: hidden;\n  height: 35px;\n  width: 10%;\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Blue Gradient Side Panel.png") + "\");\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 20px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.nubicon {\n  margin: 10%;\n  width: 80%;\n  height: 80%; }\n\n.stack {\n  position: absolute;\n  right: 10px;\n  bottom: 8px;\n  width: 30px;\n  height: 30px;\n  font-size: 25px; }\n\n.stack-number {\n  position: absolute;\n  right: 16px;\n  bottom: 14px;\n  font-size: 25px;\n  line-height: 25px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  color: #26c6da; }\n\nmd-grid-list {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-card/collection-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__ = __webpack_require__("../../../../../src/app/ts models/collection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delete_object_model__ = __webpack_require__("../../../../../src/app/main/collections/collection-card/delete.object.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CollectionCardComponent = /** @class */ (function () {
    function CollectionCardComponent(collectionService, snackBar, dialog, iconRegistry, sanitizer) {
        this.collectionService = collectionService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.deleteClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locationRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locations = [];
        this.formatedlocations = [];
        this.deleteState = false;
        this.toDeleteArray = [];
        this.confirmDeleteArray = [];
        iconRegistry.addSvgIcon('flag', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/flag.svg'));
        iconRegistry.addSvgIcon('Trash Can', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Trash Can.svg'));
        iconRegistry.addSvgIcon('Paper Plane', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Paper Plane.svg'));
        iconRegistry.addSvgIcon('Pencil', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Pencil.svg'));
        iconRegistry.addSvgIcon('Glass', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/magnifying-glass-white.svg'));
        iconRegistry.addSvgIcon('stack', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/stack.svg'));
    }
    CollectionCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collectionService.getCollectionLocations(this.collection._id)
            .subscribe(function (data) {
            _this.locations = data.obj;
            _this.formatLocations();
        }, function (error) { return console.error(error); });
        this.publicity = this.collection.publicity;
        this.isOwner = (this.collection.owner === localStorage.getItem("userID"));
        this.setProfile();
    };
    ;
    CollectionCardComponent.prototype.onDelete = function () {
        this.deleteClicked.emit();
    };
    CollectionCardComponent.prototype.togglePublicity = function (collectionID) {
        var _this = this;
        this.collectionService.updatePublicity(collectionID)
            .subscribe(function (data) {
            _this.publicity = !_this.publicity;
            console.log(data);
        }, function (error) {
            _this.snackBar.open(error.title, null, {
                duration: 1300
            });
            console.log(error);
        });
    };
    CollectionCardComponent.prototype.onRemoveLocation = function () {
        var _this = this;
        this.locations.forEach(function (location) {
            _this.toDeleteArray.push(new __WEBPACK_IMPORTED_MODULE_4__delete_object_model__["a" /* DeleteObject */](location._id, false));
        });
        this.deleteState = !this.deleteState;
    };
    CollectionCardComponent.prototype.deleteToggle = function (_id) {
        this.toDeleteArray.forEach(function (DeleteObject) {
            if (_id === DeleteObject._id) {
                DeleteObject.toggle = true;
            }
        });
    };
    CollectionCardComponent.prototype.onConfirmRemove = function () {
        var _this = this;
        this.toDeleteArray.forEach(function (deleteObject) {
            if (deleteObject.toggle === true) {
                _this.confirmDeleteArray.push(deleteObject._id);
            }
        });
        this.collectionService.removeCollectionLocation(this.collection._id, this.confirmDeleteArray)
            .subscribe(function (data) {
            console.log(data);
            _this.confirmDeleteArray = [];
            _this.toDeleteArray = [];
            _this.locationRemoved.emit();
            _this.collectionService.getCollectionLocations(_this.collection._id)
                .subscribe(function (data) {
                _this.locations = data.obj;
            }, function (error) { return console.error(error); });
        }, function (error) {
            console.error(error);
            _this.toDeleteArray = [];
            _this.confirmDeleteArray = [];
        });
        this.deleteState = !this.deleteState;
    };
    CollectionCardComponent.prototype.onCancelRemove = function () {
        this.toDeleteArray = [];
        this.deleteState = !this.deleteState;
    };
    //REMOVE AFTER FIXING COLLECTION SCHEMA
    CollectionCardComponent.prototype.setProfile = function () {
        this.Profile = JSON.parse(localStorage.getItem('profile'));
    };
    CollectionCardComponent.prototype.formatLocations = function () {
        if (this.locations.length >= 9) {
            this.formatedlocations = this.locations.slice(0, 9);
        }
        else if (this.locations.length >= 6) {
            this.formatedlocations = this.locations.slice(0, 6);
        }
        else if (this.locations.length > 3) {
            this.formatedlocations = this.locations.slice(0, 3);
        }
        else if (this.locations.length <= 3) {
            this.formatedlocations = this.locations;
        }
    };
    CollectionCardComponent.prototype.emitSelection = function (collection) {
        this.selection.emit(collection);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__["a" /* Collection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__["a" /* Collection */]) === "function" && _a || Object)
    ], CollectionCardComponent.prototype, "collection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CollectionCardComponent.prototype, "deleteClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CollectionCardComponent.prototype, "locationRemoved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CollectionCardComponent.prototype, "selection", void 0);
    CollectionCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection-card',
            template: __webpack_require__("../../../../../src/app/main/collections/collection-card/collection-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/collection-card/collection-card.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
    ], CollectionCardComponent);
    return CollectionCardComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=collection-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-card/delete.object.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteObject; });
/**
 * Created by Jeff on 8/24/2017.
 */
var DeleteObject = /** @class */ (function () {
    function DeleteObject(_id, toggle) {
        this._id = _id;
        this.toggle = toggle;
    }
    return DeleteObject;
}());

//# sourceMappingURL=delete.object.model.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-preview/collection-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"maincard\">\n  <h4 *ngIf=\"!Focus\">\n    PREVIEW CONTENTS\n  </h4>\n  <h4 *ngIf=\"Focus\"> {{collection.name}}</h4>\n  <hr style=\"color:white\">\n  <md-card-content>\n    <md-card class=\"slab\" *ngFor=\"let location of selectedCollectionLocations\">\n      <img class=\"slab-image\" src=\"https://loca-app.herokuapp.com/files/{{location._id}}\">\n      <h5 class=\"slab-h4\">{{location.name}}</h5>\n      <div class=\"select\" (click)=\"toLocationProfile(location)\"><md-icon svgIcon=\"arrow-right\"></md-icon></div>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-preview/collection-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".maincard {\n  height: 100%;\n  background-size: cover;\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Blue Gradient Side Panel.png") + "\");\n  border-radius: 0;\n  padding: 20px;\n  padding-top: 15px; }\n\nh4 {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 28px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 20px;\n  color: white;\n  margin-bottom: 10px; }\n\nmd-card-content {\n  height: 700px;\n  overflow-y: hidden; }\n\n.slab {\n  height: 65px;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 5px; }\n\nimg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 65px;\n  width: 65px; }\n\nh5 {\n  position: absolute;\n  left: 70px;\n  top: 4px;\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 22px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 30px;\n  color: #424242; }\n\np {\n  position: absolute;\n  left: 73px;\n  top: 20px;\n  line-height: 12px; }\n\n.select {\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Purple Gradient.png") + "\");\n  background-size: cover;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 66px;\n  width: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  transition: .2s ease; }\n\n.select:hover {\n  transition: .2s ease;\n  width: 30px; }\n\nmd-icon {\n  height: 14px;\n  width: 14px;\n  position: absolute;\n  top: 24px;\n  right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-preview/collection-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__ = __webpack_require__("../../../../../src/app/ts models/collection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CollectionPreviewComponent = /** @class */ (function () {
    function CollectionPreviewComponent(iconRegistry, sanitizer, router, locationService) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.router = router;
        this.locationService = locationService;
        this.Focus = false;
        this.selection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconRegistry.addSvgIcon('arrow-right', this.sanitizer.bypassSecurityTrustResourceUrl("./../../../../assets/icons/arrow-right.svg"));
    }
    CollectionPreviewComponent.prototype.ngOnInit = function () {
    };
    CollectionPreviewComponent.prototype.toLocationProfile = function (location) {
        this.locationService.toProfilePage(location);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__["a" /* Collection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ts_models_collection_model__["a" /* Collection */]) === "function" && _a || Object)
    ], CollectionPreviewComponent.prototype, "collection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CollectionPreviewComponent.prototype, "selectedCollectionLocations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CollectionPreviewComponent.prototype, "Focus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CollectionPreviewComponent.prototype, "selection", void 0);
    CollectionPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection-preview',
            template: __webpack_require__("../../../../../src/app/main/collections/collection-preview/collection-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/collection-preview/collection-preview.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdIconRegistry */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */]) === "function" && _e || Object])
    ], CollectionPreviewComponent);
    return CollectionPreviewComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=collection-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-search/collection-search.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card >\n  <input type=\"text\" class=\"form-control Item Search-Input\" placeholder=\"Search Collections\">\n  <button md-raised-button color=\"accent\" class=\"Item Search-Button\" >Go!</button>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-search/collection-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Silver Gradient.png") + "\");\n  background-size: 100%;\n  height: 42px;\n  padding: 2px;\n  margin-top: 10px; }\n\nbutton {\n  height: 38px;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  box-shadow: none !important;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-left: none; }\n\ninput {\n  width: 96%;\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/collection-search/collection-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionSearchComponent = /** @class */ (function () {
    function CollectionSearchComponent() {
    }
    CollectionSearchComponent.prototype.ngOnInit = function () {
    };
    CollectionSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection-search',
            template: __webpack_require__("../../../../../src/app/main/collections/collection-search/collection-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/collection-search/collection-search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionSearchComponent);
    return CollectionSearchComponent;
}());

//# sourceMappingURL=collection-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/collections.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_card_collection_card_component__ = __webpack_require__("../../../../../src/app/main/collections/collection-card/collection-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_collection_new_collection_component__ = __webpack_require__("../../../../../src/app/main/collections/new-collection/new-collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_search_collection_search_component__ = __webpack_require__("../../../../../src/app/main/collections/collection-search/collection-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_preview_collection_preview_component__ = __webpack_require__("../../../../../src/app/main/collections/collection-preview/collection-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__community_collections_community_collections_component__ = __webpack_require__("../../../../../src/app/main/collections/community-collections/community-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CollectionsModule = /** @class */ (function () {
    function CollectionsModule() {
    }
    CollectionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collection_card_collection_card_component__["a" /* CollectionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__new_collection_new_collection_component__["a" /* NewCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__collection_search_collection_search_component__["a" /* CollectionSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__collection_preview_collection_preview_component__["a" /* CollectionPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__community_collections_community_collections_component__["a" /* CommunityCollectionsComponent */],
            ]
        })
    ], CollectionsModule);
    return CollectionsModule;
}());

//# sourceMappingURL=collections.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/community-collections/community-collections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-collection-card {\n}\n.flexcontainer  {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\napp-collection-preview  {\n  width:45%;\n  margin-top: 10px;\n}\n.Create-Collection-Card {\n  margin-top: 10px;\n  width: 75%;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  background-color: #00bcd4;\n\n}\napp-collection-search {\nmargin-bottom: 10px;\n  padding-bottom: 10px;\n}\nmd-sidenav-container  {\n}\nmd-sidenav  {\n  width: 25%;\n  overflow: visible;\n}\nmd-grid-list  {\n  margin-top: 20px;\n}\nmd-grid-tile{\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\napp-collection-card {\n  height: 100%;\n}\n.header {\n  max-height:30px;\n  margin: 0;\n}\n.row  {\n  padding-top: 40px;\n  padding-lefT: 40px;\n  padding-right: 40px;\n  height: 100%;\n  width: 100%;\n}\n.left-panel {\n  padding-top: 0;\n  padding-left: 20px;\n}\n.new-collection-button1  {\n  width: 200px;\n  height: 48px;\n  position: absolute;\n  top: 120px;\n  right: 32%;\n}\n.new-collection-button2  {\n  width: 200px;\n  height: 48px;\n  position: absolute;\n  top: 120px;\n  right: 58%;\n}\n.new-collection-button3  {\n  width: 200px;\n  height: 48px;\n  position: absolute;\n  top: 120px;\n  right: 45%;\n}\n\n.all  {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/community-collections/community-collections.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- ALL PUBLIC COLLECTIONS -->\n<md-sidenav-container>\n  <md-sidenav #sidenav>\n    <app-collection-preview\n      [selectedCollectionLocations]=\"selectedCollectionLocations\"\n      (selected)=\"selectCollection($event)\"\n      [collection]=\"selectedCollection\"\n      [Focus]=\"inFocus\"\n    >      </app-collection-preview>\n  </md-sidenav>\n  <div class=\"row\" style=\"padding-top: 10px;\" >\n    <div class=\"col-md-9\">\n    <app-collection-search>\n    </app-collection-search>\n    <md-grid-list cols=\"3\" height=\"1:1\" gutterSize=\"4px\">\n      <md-grid-tile *ngFor=\"let collection of collections\" >\n        <app-collection-card  [collection]=\"collection\"   (selection)=\"selectCollection(collection)\" (deleteClicked)=\"deletecollection($event)\"></app-collection-card>\n      </md-grid-tile>\n    </md-grid-list>\n    </div>\n    <div class=\"col-md-3\" >\n        <app-new-collection (onSubmitClick)=\"saveCollection($event)\">\n        </app-new-collection>\n    </div>\n  </div>\n</md-sidenav-container>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/community-collections/community-collections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityCollectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommunityCollectionsComponent = /** @class */ (function () {
    function CommunityCollectionsComponent(collectionService, dialog) {
        this.collectionService = collectionService;
        this.dialog = dialog;
        this.collections = [];
        this.privateCollections = [];
        this.subscribedcollections = [];
        this.inFocus = false;
    }
    CommunityCollectionsComponent.prototype.ngOnInit = function () {
    };
    CommunityCollectionsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.collectionService.getPublicCollections()
            .subscribe(function (collections) {
            var userID = localStorage.getItem('userID');
            _this.collections = collections;
            _this.subscribedcollections = __WEBPACK_IMPORTED_MODULE_2_underscore__["_"].filter(_this.collections, function (collection) {
                return __WEBPACK_IMPORTED_MODULE_2_underscore__["_"].contains(collection.followers, userID);
            });
        });
    };
    CommunityCollectionsComponent.prototype.onChange = function () {
        var _this = this;
        this.collectionService.getPublicCollections()
            .subscribe(function (collections) {
            _this.collections = collections;
            console.log(collections);
        });
    };
    CommunityCollectionsComponent.prototype.deletecollection = function (collectionID) {
        var _this = this;
        this.collectionService.deleteCollection(collectionID)
            .subscribe(function (data) {
            _this.onChange();
        });
    };
    CommunityCollectionsComponent.prototype.selectCollection = function (collection) {
        this.selectedCollection = collection;
        this.getCollectionLocations(collection._id);
        this.inFocus = true;
        this.sidenav.open();
    };
    CommunityCollectionsComponent.prototype.getCollectionLocations = function (selectionID) {
        var _this = this;
        this.collectionService.getCollectionLocations(selectionID)
            .subscribe(function (data) {
            _this.selectedCollectionLocations = data.obj;
        });
    };
    CommunityCollectionsComponent.prototype.saveCollection = function (collection) {
        var _this = this;
        this.collectionService.saveCollection(collection)
            .subscribe(function (data) {
            _this.onChange();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], CommunityCollectionsComponent.prototype, "sidenav", void 0);
    CommunityCollectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-community-collections',
            template: __webpack_require__("../../../../../src/app/main/collections/community-collections/community-collections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/community-collections/community-collections.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */]) === "function" && _b || Object])
    ], CommunityCollectionsComponent);
    return CommunityCollectionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=community-collections.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/new-collection/new-collection.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-card class=\"maincard\">\n    <h4>\n      CREATE NEW COLLECTION\n\n    </h4>\n  <md-card-content>\n    <form [formGroup]=\"collectionForm\" (ngSubmit)=\"onSubmit()\">\n      <md-card style=\"\" class=\"titleinputtop\">\n        <md-input-container style=\"width: 100%\"  class=\"title-input\">\n          <input mdInput placeholder=\"Collection Title\" formControlName=\"Name\">\n        </md-input-container>\n      </md-card>\n      <br>\n      <md-card style=\" \" class=\"textinputbottom\">\n        <md-input-container class=\"text-input\">\n          <textarea mdInput placeholder=\"A small description...\" formControlName=\"Subtitle\" >\n      </textarea>\n        </md-input-container>\n      </md-card>\n    </form>\n  </md-card-content>\n  <button md-raised-button class=\"new-collection-button3\" [disabled]=\"!collectionForm.valid\" type=\"submit\" (click)=\"onSubmit()\">CREATE NEW COLLECTION</button>\n\n</md-card>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/new-collection/new-collection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".radiobuttons {\n  position: absolute;\n  right: 24px;\n  bottom: 24px; }\n\nmd-card {\n  background-color: #00bcd4;\n  height: 400px;\n  margin-top: 10px;\n  border-radius: 0; }\n\n.maincard {\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Blue Gradient Side Panel.png") + "\");\n  background-size: cover; }\n\n.titleinputtop {\n  background-color: #B2EBF2;\n  margin-top: 20px;\n  height: 50px;\n  padding-top: 2px;\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-bottom: 0;\n  border-radius: 2px;\n  opacity: .7; }\n\n.textinputbottom {\n  background-color: #B2EBF2;\n  opacity: .7;\n  height: 158px;\n  padding-top: 6px;\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-bottom: 0;\n  border-radius: 2px;\n  margin-top: 0;\n  margin-bottom: 40px; }\n\ntextarea {\n  height: 120px; }\n\n.text-input {\n  height: 100px;\n  width: 100%;\n  margin-bottom: 20px; }\n\nh4 {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 26px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 30px;\n  color: white; }\n\nform {\n  width: 100%; }\n\n.new-collection-button3 {\n  height: 48px;\n  bottom: 24px;\n  width: 100%;\n  background-color: #fff;\n  color: #0098b0;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/new-collection/new-collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_models_collection_model__ = __webpack_require__("../../../../../src/app/ts models/collection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewCollectionComponent = /** @class */ (function () {
    function NewCollectionComponent(collectionService, snackBar) {
        this.collectionService = collectionService;
        this.snackBar = snackBar;
        this.onSubmitClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewCollectionComponent.prototype.ngOnInit = function () {
        this.collectionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            Subtitle: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
        });
    };
    NewCollectionComponent.prototype.onSubmit = function () {
        var collection = new __WEBPACK_IMPORTED_MODULE_2__ts_models_collection_model__["a" /* Collection */](localStorage.getItem('userID'), this.collectionForm.value.Name, this.collectionForm.value.Subtitle, true);
        this.onSubmitClick.emit(collection);
        this.collectionForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewCollectionComponent.prototype, "onSubmitClick", void 0);
    NewCollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-collection',
            template: __webpack_require__("../../../../../src/app/main/collections/new-collection/new-collection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/new-collection/new-collection.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_collection_service__["a" /* CollectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdSnackBar */]) === "function" && _b || Object])
    ], NewCollectionComponent);
    return NewCollectionComponent;
    var _a, _b;
}());

//# sourceMappingURL=new-collection.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/collections/private-collections/private-collections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/collections/private-collections/private-collections.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  private-collections works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/collections/private-collections/private-collections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateCollectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateCollectionsComponent = /** @class */ (function () {
    function PrivateCollectionsComponent() {
    }
    PrivateCollectionsComponent.prototype.ngOnInit = function () {
    };
    PrivateCollectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-private-collections',
            template: __webpack_require__("../../../../../src/app/main/collections/private-collections/private-collections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/collections/private-collections/private-collections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateCollectionsComponent);
    return PrivateCollectionsComponent;
}());

//# sourceMappingURL=private-collections.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/location-profile/location-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-image {\n  width: 100%;\n  height: 300px;\n  overflow-y: hidden;\n}\n.header-img {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  bottom: 50%;\n  size: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/location-profile/location-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header-image\" *ngIf=\"location\" >\n  <img class=\"header-image\" src=\"https://loca-app.herokuapp.com/files/{{location._id}}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/location-profile/location-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationProfileComponent = /** @class */ (function () {
    function LocationProfileComponent(locationService) {
        this.locationService = locationService;
        this.location = this.locationService.getCurrentLocation();
    }
    LocationProfileComponent.prototype.ngOnInit = function () {
    };
    LocationProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location-profile',
            template: __webpack_require__("../../../../../src/app/main/location-profile/location-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/location-profile/location-profile.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */]) === "function" && _a || Object])
    ], LocationProfileComponent);
    return LocationProfileComponent;
    var _a;
}());

//# sourceMappingURL=location-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/location-profile/location-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_profile_component__ = __webpack_require__("../../../../../src/app/main/location-profile/location-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocationProfileModule = /** @class */ (function () {
    function LocationProfileModule() {
    }
    LocationProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__["a" /* AngularMaterialsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location_profile_component__["a" /* LocationProfileComponent */]
            ]
        })
    ], LocationProfileModule);
    return LocationProfileModule;
}());

//# sourceMappingURL=location-profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"spacer\">\n\n</div>\n<!-- PAGE CONTENT -->\n  <router-outlet ></router-outlet>\n<!-- MAIN TOOLBAR CONTENT -->\n<md-toolbar style=\"height:45px; min-height: 45px;\" >\n  <!-- PROFILE DROP-DOWN BUTTON -->\n  <span class=\"col-md-4\">\n        <button md-button type=\"button\" color=\"accent\" class=\"btn signin\" *ngIf=\"!isSignedIn\" (click)=\"openDialog()\">\n          <h5>  Log in / Sign up</h5>\n        </button>\n    <!-- IF SIGNED IN -->\n        <div class=\"dropdown-container\"  *ngIf=\"isSignedIn\"  dropdown [isOpen]=\"isOpen\" (isOpenChange)=\"change($event)\">\n          <img src=\"{{Profile.picture}}\" class=\"avatar\" dropdownToggle>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\"  [routerLink]=\"'myprofile'\">My Profile</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"openChat()\">Messages</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"'mycollections'\">Collections</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\"[routerLink]=\"'post'\">Post Location</a></li>\n            <li class=\"divider dropdown-divider\"></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"logOut()\">Log Out</a>\n            </li>\n          </ul>\n        </div>\n    </span>\n  <!-- LOGO  & TITLE -->\n  <md-icon class=\"Item Icon\" svgIcon=\"binos\"  [routerLink]=\"'/'\"></md-icon>\n  <h3 class=\"Item Title\"  [routerLink]=\"'/'\">Loca</h3>\n  <div class=\"Header row\">\n    <h5 style=\"margin-left: 175px;\" [routerLink]=\"'/main/search'\">Search</h5>\n    <h5>|</h5>\n    <h5 [routerLink]=\"'/main/collections'\">Community Collections</h5>\n    <h5>|</h5>\n    <h5 [routerLink]=\"'/main/permits'\">Permits</h5>\n    <h5>|</h5>\n    <h5 [routerLink]=\"'/main/post'\">Post a Location</h5>\n  </div>\n</md-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 40px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 40px; }\n\nh5 {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 200;\n  line-height: 16px;\n  color: white;\n  margin: 10px 10px 15px 15px;\n  outline: none;\n  letter-spacing: 1px; }\n\nh5:hover {\n  color: #f8ed0d; }\n\nmd-toolbar {\n  background-image: url(\"" + __webpack_require__("../../../../../src/assets/materials/Blue Gradient Side Panel.png") + "\");\n  background-size: cover; }\n\n.Icon {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  margin-right: 4px;\n  position: fixed;\n  top: 3px;\n  left: 10px; }\n\n.Title {\n  color: white;\n  position: fixed;\n  left: 60px;\n  top: 3px; }\n\n.Item {\n  float: left;\n  outline: none; }\n\n.profile-button {\n  float: right; }\n\n.form-control, .btn {\n  border-radius: 1px;\n  height: 33px; }\n\n.btn-default {\n  background-color: #795548;\n  color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.input-group {\n  padding-left: 5px;\n  padding-right: 10%; }\n\n.Header {\n  position: fixed;\n  left: 25px;\n  top: 6px;\n  width: calc(100% - 40); }\n\n.dropdown-container {\n  position: fixed;\n  top: 3px;\n  right: 15px;\n  transition: .3s ease; }\n\n.dropdown-toggle, .dropdown-toggle:hover, .dropdown-toggle:active, .dropdown-toggle:focus {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  transition: .3s ease;\n  width: 10px;\n  outline: none;\n  box-shadow: none; }\n\n.avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.signin {\n  color: white;\n  position: fixed;\n  top: 5px;\n  right: 15px;\n  border-radius: 4px;\n  height: 33px;\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n  background-color: transparent; }\n\n.signin:hover {\n  color: #0098b0; }\n\n.signin:active {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important; }\n\n.space {\n  margin-left: 5px;\n  margin-right: 5px; }\n\n.spacer {\n  height: 45px; }\n\nmd-toolbar {\n  position: fixed;\n  top: 0; }\n\n.Search-Input {\n  height: 30px;\n  border: none;\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-bottom: 17px; }\n\n.Search-Button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 30px;\n  margin-bottom: 17px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__ = __webpack_require__("../../../../../src/app/main/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(iconRegistry, sanitizer, dialog, searchService, authService, SearchService, router) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.searchService = searchService;
        this.authService = authService;
        this.SearchService = SearchService;
        this.router = router;
        this.title = 'The Location Binder';
        this.isSignedIn = false;
        this.isOpen = false;
        iconRegistry.addSvgIcon('binos', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/binoculars-white.svg'));
        this.authService.handleAuthentication();
    }
    MainComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('profile')) {
            this.setProfile();
            this.isSignedIn = true;
        }
    };
    MainComponent.prototype.openDialog = function () {
        this.authService.login();
    };
    MainComponent.prototype.setProfile = function () {
        this.Profile = JSON.parse(localStorage.getItem('profile'));
    };
    MainComponent.prototype.logOut = function () {
        this.authService.logout();
        this.isSignedIn = false;
        this.isOpen = false;
        this.router.navigateByUrl('/');
    };
    MainComponent.prototype.change = function (value) {
        this.isOpen = value;
    };
    MainComponent.prototype.openChat = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__chat_chat_component__["a" /* ChatComponent */]);
    };
    MainComponent.prototype.updateInput = function (value) {
        console.log(value);
        this.SearchService.input = value;
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _g || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_module__ = __webpack_require__("../../../../../src/app/main/user-profile/user-profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_module__ = __webpack_require__("../../../../../src/app/main/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_upload_module__ = __webpack_require__("../../../../../src/app/main/upload/upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections_collections_module__ = __webpack_require__("../../../../../src/app/main/collections/collections.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regulations_regulations_module__ = __webpack_require__("../../../../../src/app/main/regulations/regulations.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_module__ = __webpack_require__("../../../../../src/app/main/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_profile_location_profile_module__ = __webpack_require__("../../../../../src/app/main/location-profile/location-profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENTS













// MODULES
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_module__["a" /* UserProfileModule */],
                __WEBPACK_IMPORTED_MODULE_4__search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__upload_upload_module__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_6__collections_collections_module__["a" /* CollectionsModule */],
                __WEBPACK_IMPORTED_MODULE_7__regulations_regulations_module__["a" /* RegulationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_9__location_profile_location_profile_module__["a" /* LocationProfileModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
            ]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAIN_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/main/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collections_private_collections_private_collections_component__ = __webpack_require__("../../../../../src/app/main/collections/private-collections/private-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__ = __webpack_require__("../../../../../src/app/main/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_profile_location_profile_component__ = __webpack_require__("../../../../../src/app/main/location-profile/location-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collections_community_collections_community_collections_component__ = __webpack_require__("../../../../../src/app/main/collections/community-collections/community-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/main/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__regulations_regulations_component__ = __webpack_require__("../../../../../src/app/main/regulations/regulations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regulations_regulations_routing__ = __webpack_require__("../../../../../src/app/main/regulations/regulations.routing.ts");








var MAIN_ROUTES = [
    // Home Page Routes
    { path: '', redirectTo: '/main/search', pathMatch: 'full' },
    { path: 'myprofile', component: __WEBPACK_IMPORTED_MODULE_0__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'mycollections', component: __WEBPACK_IMPORTED_MODULE_1__collections_private_collections_private_collections_component__["a" /* PrivateCollectionsComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__["a" /* UploadComponent */] },
    { path: 'locationprofile', component: __WEBPACK_IMPORTED_MODULE_3__location_profile_location_profile_component__["a" /* LocationProfileComponent */] },
    { path: 'collections', component: __WEBPACK_IMPORTED_MODULE_4__collections_community_collections_community_collections_component__["a" /* CommunityCollectionsComponent */], data: {} },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */], data: {} },
    { path: 'permits', component: __WEBPACK_IMPORTED_MODULE_6__regulations_regulations_component__["a" /* RegulationsComponent */], children: __WEBPACK_IMPORTED_MODULE_7__regulations_regulations_routing__["a" /* REG_ROUTES */], data: {} }
];
//# sourceMappingURL=main.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/permit/permit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>Permit Check List</h4>\n    <md-list>\n      <md-list-item>\n          First Item\n      </md-list-item>\n      <md-list-item>\n          Second Item\n      </md-list-item>\n    </md-list>\n  </div>\n  <div class=\"col-md-6\">\n    <iframe src=\"...\" frameborder=\"0\"></iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/regulations/permit/permit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6 {\n  padding: 24px; }\n\niframe {\n  height: 500px;\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/regulations/permit/permit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PermitComponent = /** @class */ (function () {
    function PermitComponent() {
    }
    PermitComponent.prototype.ngOnInit = function () {
    };
    PermitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permit',
            template: __webpack_require__("../../../../../src/app/main/regulations/permit/permit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/regulations/permit/permit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PermitComponent);
    return PermitComponent;
}());

//# sourceMappingURL=permit.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/regulations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3{\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 20px;\n  color: white;\n}\nh2  {\n  font-family: 'Roboto', sans-serif;\n  font-size: 40px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 40px;\n  color: silver;\n}\n\nmd-list-item  {\nheight: 48px;\n  padding: 0;\n}\n\n.row {\n  margin-top: 20px;\n}\n.page {\n  padding: 24px;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n\n}\n\n.item1 {\n  background-color: #00838f;\n}\n\n.item2  {\n  background-color: #0097a7 ;\n}\n\n.item3  {\n  background-color: #00acc1;\n}\n\n.item4  {\n  background-color: #00bcd4;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/regulations/regulations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-8 offset-lg-2 page\">\n    <h2> City of Orange</h2>\n    <md-list>\n      <md-list-item class=\"item1\" [routerLink]=\"'rulesregulations'\" (click)=\"toggleSection(1)\"><h3>Rules and Regulations</h3></md-list-item>\n      <router-outlet *ngIf=\"current === 1\" ></router-outlet>\n      <md-list-item class=\"item2\" [routerLink]=\"'socialservices'\" (click)=\"toggleSection(2)\"><h3>Social Services</h3></md-list-item>\n      <router-outlet *ngIf=\"current === 2\"></router-outlet>\n      <md-list-item class=\"item3\" [routerLink]=\"'permit'\" (click)=\"toggleSection(3)\"><h3>Permit</h3></md-list-item>\n      <router-outlet *ngIf=\"current === 3\"></router-outlet>\n      <md-list-item class=\"item4\" [routerLink]=\"'students'\" (click)=\"toggleSection(4)\"><h3>Students</h3></md-list-item>\n      <router-outlet *ngIf=\"current === 4\"></router-outlet>\n    </md-list>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/regulations/regulations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegulationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegulationsComponent = /** @class */ (function () {
    function RegulationsComponent() {
        this.current = 0;
    }
    RegulationsComponent.prototype.ngOnInit = function () {
    };
    RegulationsComponent.prototype.toggleSection = function (section) {
        if (this.current === section) {
            this.current = 0;
        }
        else {
            this.current = section;
        }
    };
    RegulationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regulations',
            template: __webpack_require__("../../../../../src/app/main/regulations/regulations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/regulations/regulations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegulationsComponent);
    return RegulationsComponent;
}());

//# sourceMappingURL=regulations.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/regulations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegulationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regulations_component__ = __webpack_require__("../../../../../src/app/main/regulations/regulations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permit_permit_component__ = __webpack_require__("../../../../../src/app/main/regulations/permit/permit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_services_social_services_component__ = __webpack_require__("../../../../../src/app/main/regulations/social-services/social-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rules_rules_component__ = __webpack_require__("../../../../../src/app/main/regulations/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__("../../../../../src/app/main/regulations/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RegulationsModule = /** @class */ (function () {
    function RegulationsModule() {
    }
    RegulationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* Routing */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__regulations_component__["a" /* RegulationsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__permit_permit_component__["a" /* PermitComponent */],
                __WEBPACK_IMPORTED_MODULE_4__social_services_social_services_component__["a" /* SocialServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__rules_rules_component__["a" /* RulesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */]
            ]
        })
    ], RegulationsModule);
    return RegulationsModule;
}());

//# sourceMappingURL=regulations.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/regulations.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REG_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_students_component__ = __webpack_require__("../../../../../src/app/main/regulations/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules_rules_component__ = __webpack_require__("../../../../../src/app/main/regulations/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_services_social_services_component__ = __webpack_require__("../../../../../src/app/main/regulations/social-services/social-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permit_permit_component__ = __webpack_require__("../../../../../src/app/main/regulations/permit/permit.component.ts");




var REG_ROUTES = [
    // Home Page Routes
    { path: '', redirectTo: '/main/permits/rulesregulations', pathMatch: 'full' },
    { path: 'permit', component: __WEBPACK_IMPORTED_MODULE_3__permit_permit_component__["a" /* PermitComponent */] },
    { path: 'socialservices', component: __WEBPACK_IMPORTED_MODULE_2__social_services_social_services_component__["a" /* SocialServicesComponent */] },
    { path: 'rulesregulations', component: __WEBPACK_IMPORTED_MODULE_1__rules_rules_component__["a" /* RulesComponent */] },
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_0__students_students_component__["a" /* StudentsComponent */] }
];
//# sourceMappingURL=regulations.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/rules/rules.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rules works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/regulations/rules/rules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/regulations/rules/rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__("../../../../../src/app/main/regulations/rules/rules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/regulations/rules/rules.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());

//# sourceMappingURL=rules.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/social-services/social-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainrow\">\n  <div class=\"col-md-4\">\n    <md-card>\n      <img src=\"./../../../../assets/materials/Blue%20Gradient%20Side%20Panel.png\">\n      <div class=\"row footerrow\">\n        <div class=\"col-md-10 offset-sm-1\">\n          <h5>Hospital 1</h5>\n          <p>422 West Chapman Ave</p>\n          <p>Orange, CA, 92866</p>\n          <p class=\"phone\">473-054-5665</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div class=\"col-md-4\">\n    <md-card>\n      <img src=\"./../../../../assets/materials/Blue%20Gradient%20Side%20Panel.png\">\n      <div class=\"row footerrow\">\n        <div class=\"col-md-10 offset-sm-1\">\n          <h5>Hospital 2</h5>\n          <p>300 East Chapman Ave</p>\n          <p>Orange, CA, 92866</p>\n          <p class=\"phone\">717-374-0987</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div class=\"col-md-4\">\n    <md-card>\n      <img src=\"./../../../../assets/materials/Blue%20Gradient%20Side%20Panel.png\">\n      <div class=\"row footerrow\">\n        <div class=\"col-md-10 offset-sm-1\">\n          <h5>Police Station</h5>\n          <p>1400 Glassell Street</p>\n          <p>Orange, CA, 92866</p>\n          <p class=\"phone\">949-030-0293</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/regulations/social-services/social-services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainrow {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.col-md-4 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 10px; }\n\nmd-card {\n  width: 100%;\n  height: 100%;\n  padding: 0px; }\n\nimg {\n  width: 100%;\n  height: 300px; }\n\n.footerrow {\n  height: 100px;\n  padding-top: 5px; }\n\nh5 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 35px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 30px; }\n\np {\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 2px; }\n\n.phone {\n  font-weight: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/regulations/social-services/social-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialServicesComponent = /** @class */ (function () {
    function SocialServicesComponent() {
    }
    SocialServicesComponent.prototype.ngOnInit = function () {
    };
    SocialServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-services',
            template: __webpack_require__("../../../../../src/app/main/regulations/social-services/social-services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/regulations/social-services/social-services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialServicesComponent);
    return SocialServicesComponent;
}());

//# sourceMappingURL=social-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/regulations/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  students works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/regulations/students/students.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/regulations/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-students',
            template: __webpack_require__("../../../../../src/app/main/regulations/students/students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/regulations/students/students.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());

//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar {\n  background-size: cover;\n  width: 500px;\n  height: 500px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n.photo {\n  background-size: cover;\n  width: 400px;\n  height: 400px;\n\n  -webkit-box-pack: center;\n\n      -ms-flex-pack: center;\n\n          justify-content: center;\n}\n\n\n.md-grid-tile-header {\n  background-color: snow;\n}\n\n.md-grid-tile-footer {\n  background-color: snow;\n}\n\napp-collection-button  {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n\n.card{\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "  <img class=\"avatar\" src=\"https://loca-app.herokuapp.com/files/{{location._id}}\" (click)=\"toLocationProfile(location)\" >\n  <md-grid-tile-footer>\n    {{location.name}}\n    <app-collection-button\n      [collections]=\"collections\"\n      [location]=\"location\"\n      class=\"addToCollection\"\n    >\n    </app-collection-button>\n  </md-grid-tile-footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__ = __webpack_require__("../../../../../src/app/ts models/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = /** @class */ (function () {
    function CardComponent(fileService, cdr, locationService) {
        this.fileService = fileService;
        this.cdr = cdr;
        this.locationService = locationService;
        this.filtered = [];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.filter = function () {
        var _this = this;
        this.collections.forEach(function (collection) {
            var valid = true;
            collection.locations.forEach(function (locationID) {
                if (locationID === _this.location._id) {
                    valid = false;
                }
            });
            if (valid) {
                _this.filtered.push(collection);
            }
            else {
            }
        });
    };
    CardComponent.prototype.toLocationProfile = function (location) {
        this.locationService.toProfilePage(location);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__["a" /* Location */]) === "function" && _a || Object)
    ], CardComponent.prototype, "location", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CardComponent.prototype, "collections", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/main/search/Grid/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/Grid/card/card.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */]) === "function" && _d || Object])
    ], CardComponent);
    return CardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-icon-button [mdMenuTriggerFor]=\"menu\" class=\"iconbutton\">\n  <md-icon svgIcon=\"plus\"></md-icon>\n</button>\n\n<md-menu #menu=\"mdMenu\">\n  <button md-menu-item *ngFor=\"let collection of collections\" (click)=\"onCollectionClick(collection._id)\">\n    <span>\n      {{collection.name}}\n    </span>\n  </button>\n  <button md-menu-item *ngIf=\"collections.length < 1\" [disabled]=\"true\">\n    <span>\n      No Options\n    </span>\n  </button>\n</md-menu>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__ = __webpack_require__("../../../../../src/app/ts models/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionButtonComponent = /** @class */ (function () {
    function CollectionButtonComponent(collectionService, snackbar, zone, iconRegistry, sanitizer) {
        this.collectionService = collectionService;
        this.snackbar = snackbar;
        this.zone = zone;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
    }
    CollectionButtonComponent.prototype.ngOnInit = function () {
    };
    CollectionButtonComponent.prototype.onCollectionClick = function (collectionID) {
        var _this = this;
        this.collectionService.addLocationToCollection(collectionID, this.location)
            .subscribe(function (data) {
            _this.snackbar.open('Saved ' + _this.location.name + ' to ' + data.obj.name, null, {
                duration: 1300
            });
            console.log(data);
        }, function (error) {
            _this.snackbar.open('Error: ' + error, null, {
                duration: 1300
            });
            console.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ts_models_location_model__["a" /* Location */]) === "function" && _a || Object)
    ], CollectionButtonComponent.prototype, "location", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CollectionButtonComponent.prototype, "collections", void 0);
    CollectionButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection-button',
            template: __webpack_require__("../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
    ], CollectionButtonComponent);
    return CollectionButtonComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=collection-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmd-grid-list  {\n  height: calc(100vh - 85px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<md-grid-list cols=\"4\" rowHeight=\"1:1\" gutterSize=\"4px\">\n  <md-grid-tile *ngFor=\"let location of locations\n     | filter: searchString: 'name'\n     | typeFilter: typeObject\n     | electricityFilter: electrictyObject\n     | bathroomFilter: bathroomObject\n     | rateFilter: rateObject\" >\n    <app-card\n      [location]=\"location\"\n      [collections]=\"collections\"\n    ></app-card>\n  </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/Grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Jeff Haskell on 7/14/2017.
 */



var SearchGrid = /** @class */ (function () {
    function SearchGrid(collectionService, searchService) {
        this.collectionService = collectionService;
        this.searchService = searchService;
        this.searchString = '';
        this.locations = [];
        this.collections = [];
    }
    SearchGrid.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.onRate.subscribe(function (res) {
            _this.rateObject = res;
        });
        this.searchService.onQuery.subscribe(function (res) {
            _this.searchString = res;
        });
        this.searchService.onType.subscribe(function (res) {
            _this.typeObject = res;
        });
        this.searchService.onElectricity.subscribe(function (res) {
            _this.electrictyObject = res;
        });
        this.searchService.onBathroom.subscribe(function (res) {
            _this.bathroomObject = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SearchGrid.prototype, "locations", void 0);
    SearchGrid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grid',
            template: __webpack_require__("../../../../../src/app/main/search/Grid/grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/Grid/grid.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collection_service__["a" /* CollectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _b || Object])
    ], SearchGrid);
    return SearchGrid;
    var _a, _b;
}());

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input, propName) {
        if (value) {
            if (input === '' || value.length < 1) {
                return value;
            }
            var resultArray = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                if (item.name.toUpperCase().includes(input.toUpperCase())) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 200px;\n  height: auto;\n  background-color: white;\n  position: fixed;\n  border-radius: 8px;\n  padding: 10px\n}\nmd-grid-list  {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nmd-grid-tile  {\n  background-color: #26c6da;\n}\nmd-grid-tile:hover  {\n  background-color: #00838f;\n}\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 14px;\n  color: white;\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngStyle]=\"{'top': ParentTopOffset,'left': ParentLeftOffset }\">\n  <md-grid-list cols=\"2\" rowHeight=\"1:1\">\n    <md-grid-tile [ngStyle]=\"state.Yes && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\" (click)=\"toggleBathroom('Yes')\">\n      <h3>Yes</h3>\n    </md-grid-tile>\n    <md-grid-tile [ngStyle]=\"state.No && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\" (click)=\"toggleBathroom('No')\">\n      <h3>No</h3>\n    </md-grid-tile>\n  </md-grid-list>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BathroomFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BathroomFilterComponent = /** @class */ (function () {
    function BathroomFilterComponent(searchService) {
        this.searchService = searchService;
    }
    BathroomFilterComponent.prototype.ngOnInit = function () {
        this.state = this.searchService.TempBathroom;
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
        console.log(this.ParentLeftOffset);
    };
    BathroomFilterComponent.prototype.refreshPosition = function (event) {
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
    };
    BathroomFilterComponent.prototype.toggleBathroom = function (value) {
        this.state[value] = !this.state[value];
        this.searchService.BathroomFilter = this.state;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BathroomFilterComponent.prototype, "ParentTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BathroomFilterComponent.prototype, "ParentLeft", void 0);
    BathroomFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bathroom-filter',
            template: __webpack_require__("../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], BathroomFilterComponent);
    return BathroomFilterComponent;
    var _a;
}());

//# sourceMappingURL=bathroom-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BathroomFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BathroomFilterPipe = /** @class */ (function () {
    function BathroomFilterPipe() {
    }
    BathroomFilterPipe.prototype.transform = function (value, stateObject) {
        //CHECK IF VALUE OR STATEOBJECT EXIST
        if (!value || !stateObject) {
            return value;
        }
        //CHECK IF STATE OBJECT IS ALL FALSE
        //IF SO RETURN ALL
        if (!stateObject.Yes && !stateObject.No) {
            return value;
        }
        var resultArray = [];
        value.forEach(function (location) {
            if (location.bathrooms >= 1 && stateObject.Yes) {
                resultArray.push(location);
            }
            else if (location.bathrooms === 0 && stateObject.No) {
                resultArray.push(location);
            }
        });
        return resultArray;
    };
    BathroomFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'bathroomFilter',
            pure: false
        })
    ], BathroomFilterPipe);
    return BathroomFilterPipe;
}());

//# sourceMappingURL=bathroom-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 300px;\n  height: auto;\n  background-color: white;\n  position: fixed;\n  border-radius: 8px;\n  padding: 10px\n}\nmd-grid-list  {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nmd-grid-tile  {\n  background-color: #26c6da;\n}\nmd-grid-tile:hover  {\n  background-color: #00838f;\n}\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 14px;\n  color: white;\n  margin: 0;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngStyle]=\"{'top': ParentTopOffset,'left': ParentLeftOffset }\">\n  <md-grid-list cols=\"4\" rowHeight=\"1:1\">\n    <md-grid-tile (click)=\"toggleDistance(5)\" [ngStyle]=\"state.Distance === 5 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>5 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(10)\" [ngStyle]=\"state.Distance === 10 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>10 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(15)\" [ngStyle]=\"state.Distance === 15 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>15 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(20)\" [ngStyle]=\"state.Distance === 20 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>20 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(30)\" [ngStyle]=\"state.Distance === 30 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>30 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(40)\" [ngStyle]=\"state.Distance === 40 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>40 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(50)\" [ngStyle]=\"state.Distance === 50 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>50 Miles</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleDistance(100)\" [ngStyle]=\"state.Distance === 100 && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\">\n      <h3>100 Miles</h3>\n    </md-grid-tile>\n  </md-grid-list>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistanceFilterComponent = /** @class */ (function () {
    function DistanceFilterComponent(searchService) {
        this.searchService = searchService;
    }
    DistanceFilterComponent.prototype.ngOnInit = function () {
        this.state = this.searchService.TempDistance;
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
    };
    DistanceFilterComponent.prototype.refreshPosition = function (event) {
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
    };
    DistanceFilterComponent.prototype.toggleDistance = function (value) {
        this.state.Distance = value;
        this.searchService.DistanceFilter = this.state;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DistanceFilterComponent.prototype, "ParentTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DistanceFilterComponent.prototype, "ParentLeft", void 0);
    DistanceFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distance-filter',
            template: __webpack_require__("../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], DistanceFilterComponent);
    return DistanceFilterComponent;
    var _a;
}());

//# sourceMappingURL=distance-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 200px;\n  height: auto;\n  background-color: white;\n  position: fixed;\n  border-radius: 8px;\n  padding: 10px\n}\nmd-grid-list  {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nmd-grid-tile  {\n  background-color: #26c6da;\n}\nmd-grid-tile:hover  {\n  background-color: #00838f;\n}\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 14px;\n  color: white;\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngStyle]=\"{'top': ParentTopOffset,'left': ParentLeftOffset }\">\n  <md-grid-list cols=\"2\" rowHeight=\"1:1\">\n    <md-grid-tile [ngStyle]=\"state.Yes && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\" (click)=\"toggleElectricity('Yes')\">\n      <h3>Yes</h3>\n    </md-grid-tile>\n    <md-grid-tile [ngStyle]=\"state.No && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da' }\" (click)=\"toggleElectricity('No')\">\n      <h3>No</h3>\n    </md-grid-tile>\n  </md-grid-list>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectricityFilterComponent = /** @class */ (function () {
    function ElectricityFilterComponent(searchService) {
        this.searchService = searchService;
    }
    ElectricityFilterComponent.prototype.ngOnInit = function () {
        this.state = this.searchService.TempElectricity;
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
    };
    ElectricityFilterComponent.prototype.refreshPosition = function (event) {
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
    };
    ElectricityFilterComponent.prototype.toggleElectricity = function (value) {
        this.state[value] = !this.state[value];
        this.searchService.ElectricityFilter = this.state;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ElectricityFilterComponent.prototype, "ParentTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ElectricityFilterComponent.prototype, "ParentLeft", void 0);
    ElectricityFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electricity-filter',
            template: __webpack_require__("../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], ElectricityFilterComponent);
    return ElectricityFilterComponent;
    var _a;
}());

//# sourceMappingURL=electricity-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ElectricityFilterPipe = /** @class */ (function () {
    function ElectricityFilterPipe() {
    }
    ElectricityFilterPipe.prototype.transform = function (value, stateObject) {
        //CHECK IF VALUE OR STATEOBJECT EXIST
        if (!value || !stateObject) {
            return value;
        }
        //CHECK IF STATE OBJECT IS ALL FALSE
        //IF SO RETURN ALL
        if (!stateObject.Yes && !stateObject.No) {
            return value;
        }
        var resultArray = [];
        value.forEach(function (location) {
            if (location.electricity === 1 && stateObject.Yes) {
                resultArray.push(location);
            }
            else if (location.electricity === 0 && stateObject.No) {
                resultArray.push(location);
            }
        });
        return resultArray;
    };
    ElectricityFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'electricityFilter',
            pure: false
        })
    ], ElectricityFilterPipe);
    return ElectricityFilterPipe;
}());

//# sourceMappingURL=electricity-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 260px;\n  height: 70px;\n  background-color: white;\n  position: fixed;\n  border-radius: 8px;\n  padding: 10px\n}\nmd-grid-list  {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nmd-grid-tile  {\n  background-color: #26c6da;\n}\nmd-grid-tile:hover  {\n  background-color: #00838f;\n}\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 100;\n  line-height: 14px;\n  color: black;\n  margin: 0;\n  text-align: center;\n}\nnouislider  {\n  width: 200px;\n  margin: 16px;\n  position: absolute;\n  bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngStyle]=\"{'top': ParentTopOffset,'left': ParentLeftOffset }\">\n  <h3 *ngIf=\"state.low !== 0 && state.high !== 2500\">From ${{state.low}} to ${{state.high}}</h3>\n  <h3 *ngIf=\"state.low === 0 && state.high !== 2500\">Less than ${{state.high}}</h3>\n  <h3 *ngIf=\"state.low !== 0 && state.high === 2500\">More than ${{state.low}}</h3>\n  <h3 *ngIf=\"state.low === 0 && state.high === 2500\">Any price</h3>\n  <nouislider\n    [connect]=\"true\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [(ngModel)]=\"someRange\"\n    [step]=\"25\"\n    (ngModelChange)=\"toggleRate($event)\"\n    #slider></nouislider>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateFilterComponent = /** @class */ (function () {
    function RateFilterComponent(searchService) {
        this.searchService = searchService;
        this.max = 2500;
        this.min = 0;
        this.someRange = [this.min, this.max];
    }
    RateFilterComponent.prototype.ngOnInit = function () {
        this.state = this.searchService.TempRate;
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 130 + 'px';
    };
    RateFilterComponent.prototype.refreshPosition = function (event) {
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 130 + 'px';
    };
    RateFilterComponent.prototype.toggleRate = function (event) {
        this.state.high = (event[1]);
        this.state.low = (event[0]);
        this.searchService.RateFilter = this.state;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", Object)
    ], RateFilterComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RateFilterComponent.prototype, "ParentTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RateFilterComponent.prototype, "ParentLeft", void 0);
    RateFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-filter',
            template: __webpack_require__("../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], RateFilterComponent);
    return RateFilterComponent;
    var _a;
}());

//# sourceMappingURL=rate-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/rate-filter/rate-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RateFilterPipe = /** @class */ (function () {
    function RateFilterPipe() {
    }
    RateFilterPipe.prototype.transform = function (value, rateObject) {
        //CHECK IF VALUE OR STATEOBJECT EXIST
        if (!value || !rateObject) {
            return value;
        }
        var resultArray = [];
        value.forEach(function (location) {
            if (location.rate >= rateObject.low && location.rate <= rateObject.high) {
                resultArray.push(location);
            }
        });
        return resultArray;
    };
    RateFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'rateFilter',
            pure: false
        })
    ], RateFilterPipe);
    return RateFilterPipe;
}());

//# sourceMappingURL=rate-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/type-filter/type-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card{\n  width: 400px;\n  background-color: white;\n  position: absolute;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nmd-grid-list  {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\nmd-grid-tile  {\n  background-color: #26c6da;\n}\nmd-grid-tile:hover  {\n  background-color: #00838f;\n}\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 14px;\n  color: white;\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/filter/type-filter/type-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngStyle]=\"{'top': ParentTopOffset,'left': ParentLeftOffset }\">\n  <md-grid-list cols=\"4\" rowHeight=\"1:1\">\n    <md-grid-tile (click)=\"toggleType('Apartment')\" [ngStyle]=\"states.Apartment && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Apartment</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Home')\"  [ngStyle]=\"states.Home && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>House</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('School')\"  [ngStyle]=\"states.School && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>School</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Business')\"  [ngStyle]=\"states.Business && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Business</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Park')\"  [ngStyle]=\"states.Park && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Park</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Restaurant')\"  [ngStyle]=\"states.Restaurant && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Restaurant</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Bar')\" [ngStyle]=\"states.Bar && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Bar</h3>\n    </md-grid-tile>\n    <md-grid-tile (click)=\"toggleType('Street')\" [ngStyle]=\"states.Street && {backgroundColor: '#00838f'} || {backgroundColor: '#26c6da'} \">\n      <h3>Street</h3>\n    </md-grid-tile>\n  </md-grid-list>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/filter/type-filter/type-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeFilterComponent = /** @class */ (function () {
    function TypeFilterComponent(searchService) {
        this.searchService = searchService;
        this.states = {};
    }
    TypeFilterComponent.prototype.ngOnInit = function () {
        this.states = this.searchService.TempType;
        this.refreshPosition(null);
    };
    TypeFilterComponent.prototype.toggleType = function (value) {
        this.states[value] = !this.states[value];
        this.searchService.TypeFilter = this.states;
    };
    TypeFilterComponent.prototype.refreshPosition = function (event) {
        this.ParentTopOffset = this.ParentTop + 40 + 'px';
        this.ParentLeftOffset = this.ParentLeft - 156 + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TypeFilterComponent.prototype, "ParentTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TypeFilterComponent.prototype, "ParentLeft", void 0);
    TypeFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type-filter',
            template: __webpack_require__("../../../../../src/app/main/search/filter/type-filter/type-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/filter/type-filter/type-filter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], TypeFilterComponent);
    return TypeFilterComponent;
    var _a;
}());

//# sourceMappingURL=type-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/filter/type-filter/type-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypeFilterPipe = /** @class */ (function () {
    function TypeFilterPipe() {
    }
    TypeFilterPipe.prototype.transform = function (value, typeObject) {
        //  IF LOCATIONS ARRAY IS EMPTY AND
        // IF TYPE ARRAY IS EMPTY SKIP THIS FILTER
        if (!value || !typeObject) {
            return value;
        }
        if (!typeObject.Apartment
            && !typeObject.School
            && !typeObject.Park
            && !typeObject.Restaurant
            && !typeObject.Street
            && !typeObject.Home
            && !typeObject.Business
            && !typeObject.Bar) {
            return value;
        }
        //LOOP THROUGH EACH LOCATION AND STORE THEM IN
        //RESULT ARRAY IF THEY HAVE A TYPE MATCH
        //RETURN THE RESULTING ARRAY
        var resultArray = [];
        value.forEach(function (location) {
            if (location.type === 'Apartment' && typeObject.Apartment) {
                resultArray.push(location);
            }
            else if (location.type === 'School' && typeObject.School) {
                resultArray.push(location);
            }
            else if (location.type === 'Bar' && typeObject.Bar) {
                resultArray.push(location);
            }
            else if (location.type === 'Business' && typeObject.Business) {
                resultArray.push(location);
            }
            else if (location.type === 'Park' && typeObject.Park) {
                resultArray.push(location);
            }
            else if (location.type === 'Restaurant' && typeObject.Restaurant) {
                resultArray.push(location);
            }
            else if (location.type === 'Street' && typeObject.Street) {
                resultArray.push(location);
            }
            else if (location.type === 'Home' && typeObject.Home) {
                resultArray.push(location);
            }
        });
        return resultArray;
    };
    TypeFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'typeFilter',
            pure: false
        })
    ], TypeFilterPipe);
    return TypeFilterPipe;
}());

//# sourceMappingURL=type-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let location of locations\n     | filter: searchString: 'name'\n     | typeFilter: typeObject\n     | electricityFilter: electrictyObject\n     | bathroomFilter: bathroomObject\n     | rateFilter: rateObject\">\n  <div class=\"col-sm-2 photo-container\">\n    <img src=\"https://loca-app.herokuapp.com/files/{{location._id}}\" style=\"width: 100%; height: 100%;\">\n  </div>\n  <div class=\"col-sm-8\">\n    <h5>{{location.name}}</h5>\n    <p>{{location.description}}</p>\n  </div>\n  <div class=\"col-sm-2\">\n    <md-chip-list>\n      <md-chip >\n        ${{location.rate }}/Day\n      </md-chip>\n    </md-chip-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/search/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  width: 100%;\n  height: 100px;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  border-bottom: 1px solid #0098b0;\n  margin: 0; }\n\n.col-sm-2 {\n  padding: 0; }\n\nh5 {\n  line-height: 15px;\n  margin: 8px 0 5px 0; }\n\np {\n  font-size: 14px;\n  line-height: 15px; }\n\nmd-chip-list {\n  margin-top: 5px; }\n\nmd-chip {\n  height: 18px;\n  margin-top: 4px;\n  color: #26c6da; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(searchService) {
        this.searchService = searchService;
        this.searchString = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.onRate.subscribe(function (res) {
            _this.rateObject = res;
        });
        this.searchService.onQuery.subscribe(function (res) {
            _this.searchString = res;
        });
        this.searchService.onType.subscribe(function (res) {
            _this.typeObject = res;
        });
        this.searchService.onElectricity.subscribe(function (res) {
            _this.electrictyObject = res;
        });
        this.searchService.onBathroom.subscribe(function (res) {
            _this.bathroomObject = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ListComponent.prototype, "locations", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/main/search/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
    ], ListComponent);
    return ListComponent;
    var _a;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: calc(100vh - 85px);\n  width: 100%;\n}\nagm-marker  {\n  width: 40px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<agm-map #googlemap [latitude]=\"CurrentLocation.lat\" [longitude]=\"CurrentLocation.lng\" [styles]=\"\">\n  <agm-marker\n    *ngFor=\"let location of locations\n     | filter: searchString: 'name'\n     | typeFilter: typeObject\n     | electricityFilter: electrictyObject\n     | bathroomFilter: bathroomObject\n     | rateFilter: rateObject\n\"\n    (markerClick)=\"toLocationProfile(location)\"\n    [latitude]=\"location.coordinates.lat\"\n    [longitude]=\"location.coordinates.lng\"\n    [iconUrl]=\"'./../../../../assets/icons/'+ location.type +'.png'\">\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(router, locationService, searchService) {
        this.router = router;
        this.locationService = locationService;
        this.searchService = searchService;
        //VARIABLES HOLDING FILTER PARAMETERS
        this.searchString = '';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CurrentLocation = this.searchService.TempDistance.CurrentLocation;
        this.searchService.onQuery.subscribe(function (res) {
            _this.searchString = res;
        });
        this.searchService.onType.subscribe(function (res) {
            _this.typeObject = res;
        });
        this.searchService.onElectricity.subscribe(function (res) {
            _this.electrictyObject = res;
        });
        this.searchService.onBathroom.subscribe(function (res) {
            _this.bathroomObject = res;
        });
        this.searchService.onRate.subscribe(function (res) {
            _this.rateObject = res;
        });
        //STYLE THE MAP
        this.googlemap.styles = [
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fffffd"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#7acc85"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 700
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#00bcd4"
                    }
                ]
            }
        ];
        this.googlemap.zoom = 13;
    };
    MapComponent.prototype.toLocationProfile = function (location) {
        this.locationService.toProfilePage(location);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('googlemap'),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "googlemap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "locations", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/main/search/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/map/map.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]) === "function" && _c || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:focus {\n  outline:0;\n}\n\n\n\nh3  {\n  font-family: 'Saira Condensed', sans-serif;\n  font-size: 30px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 300;\n  line-height: 30px;\n  color: white;\n  margin: 10px;\n}\n\n\n\n.filterRow  {\n  width: 100%;\n  min-height: 40px;\n  background-color: #f7f7f7;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  z-index: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n\n.filter-label {\n  font-size: 16px;\n  color: silver;\n  margin: 0;\n}\n.row  {\n  width: 100%;\n\n}\n\n.rate-input {\n  margin-right: 20px;\n  width: 40px;\n}\n.rate-slider  {\n  color: white;\n  margin-top: 19px;\n  width: 100%;\n}\n\n.filter-info-card  {\n  padding: 4px;\n  width: 80%;\n  margin-left: 10%;\n}\n.view-toggle  {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n}\n\n.sort-menu  {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  height: 30px;\n  width: 200px;\n  margin: 5px;\n  border-radius: 4px;\n  background-color: #f7f7f7;\n  border: 1px solid silver;\n\n}\n\n.add-location {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  height: 35px;\n  width: 35px;\n}\n\n.plusicon {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.sidenav-button {\n  position: fixed;\n  top: 25px;\n  right: 25px;\n}\n\n.search {\n  margin: 20px;\n}\n\n\n\n\n.mat-card {\n  padding: 0;\n}\n\n.row  {\n  height: 100%;\n  overflow-x: hidden;\n  margin: 0;\n}\n\n.grid-split {\n  padding-right:1px;\n  padding-left: 0;\n  height: 900px;\n  overflow-y: scroll;\n}\n\n.map-split  {\n  padding-left: 0;\n  padding-right: 0;\n\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.18), 0 5px 5px 0 rgba(0,0,0,.18);\n}\n\n.list-split {\n  height: calc(100vh - 85px);\n  overflow-y: scroll;\n  padding: 0;\n}\n.map  {\n  overflow: hidden;\n  bottom: 0;\n  right: 0;\n\n}\n\n.example-container  {\n  overflow-x:hidden;\n}\n\n.filter-card  {\n  background-color: white;\n  position: absolute;\n  left: 25px;\n  top: 130px;\n  width: 36px;\n  height: 36px;\n  padding: 6px;\n}\n\n.search-icon  {\n  padding-top: 10px;\n}\n\n\n.filter-bar{\n  background-color: transparent;\n  position: absolute;\n  top: 90px;\n  z-index: 2;\n  height: 40px ;\n  padding-left: 20px;\n}\n\n.btn{\n  height: 30px;\n  margin: 5px 0;\n  padding: 0 4px;\n}\n.filter-button  {\n  height: 30px;\n  margin: 5px 0;\n  border: 1px solid silver;\n  background-color: white;\n  border-radius: 4px;\n}\n\n.grid{\n  height: calc(100vh - 85px);\n  overflow-y: scroll;\n}\n\n.Search-Input {\n  height: 30px;\n  margin-top: 5px;\n  margin-left: 9px;\n  width: 48%;\n}\n\n.rate-filter  {\n  padding-top: 0;\n  height: 30px;\n  margin-top: 5px;\n  margin-left: 9px;\n  border-radius: 4px;\n  border: 1px solid silver;\n  color: grey;\n}\n\np {\n  margin: 4px;\n  line-height: 15px;\n}\n\n.view-buttons {\n  padding: 0 5px;\n  height: 30px;\n  margin-top: 5px;\n  margin-left: 9px;\n  border-radius: 4px;\n  border: 1px solid silver;\n  background-color: #F7F7F7;\n}\n.view-button  {\n  height: 15px;\n  width: 15px;\n  margin: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- FILTER BAR -->\n<div class=\"row filterRow\" (window:resize)=\"onResize($event)\" >\n      <input\n        type=\"text\"\n        class=\"form-control Search-Input\"\n        placeholder=\"Search Locations...\"\n        [(ngModel)]=\"query\"\n        (keyup)=\"updateInput(query)\">\n      <button\n        md-button\n        class=\"rate-filter\"\n        (click)=\"setRateState(!rateState)\"\n        #rate>\n        <p>Day Rate</p>\n      </button>\n      <button\n        md-button\n        class=\"rate-filter\"\n        (click)=\"setDistanceState(!distanceState)\"\n        #distance>\n        <p>Distance</p>\n      </button>\n      <button\n        md-button\n        class=\"rate-filter\"\n        (click)=\"setTypeState(!typeState)\"\n        #type>\n        <p>Type</p>\n      </button>\n      <button\n        md-button\n        class=\"rate-filter\"\n        (click)=\"setElectricityState(!electricityState)\"\n        #electricity>\n        <p>Electricity</p>\n      </button>\n      <button\n        md-button\n        class=\"rate-filter\"\n        (click)=\"setBathroomState(!bathroomState)\"\n        #bathroom>\n        <p>Bathrooms</p>\n      </button>\n  <div\n    class=\"view-buttons\">\n    <md-icon\n      *ngIf=\"state !== 'grid'\"\n      class=\"view-button\"\n      svgIcon=\"grid\"\n      (click)=\"toggleView('grid')\">\n    </md-icon>\n    <md-icon\n      *ngIf=\"state === 'grid'\"\n      class=\"view-button\"\n      svgIcon=\"grid-blue\"\n      (click)=\"toggleView('grid')\">\n    </md-icon>\n    <md-icon\n      *ngIf=\"state !== 'map'\"\n      class=\"view-button\"\n      svgIcon=\"marker\"\n      (click)=\"toggleView('map')\">\n    </md-icon >\n    <md-icon\n      *ngIf=\"state === 'map'\"\n      class=\"view-button\"\n      svgIcon=\"marker-blue\"\n      (click)=\"toggleView('map')\">\n    </md-icon >\n    <md-icon\n      *ngIf=\"state !== 'split'\"\n      class=\"view-button\"\n      svgIcon=\"split\"\n      (click)=\"toggleView('split')\" >\n    </md-icon>\n    <md-icon\n      *ngIf=\"state === 'split'\"\n      class=\"view-button\"\n      svgIcon=\"split-blue\"\n      (click)=\"toggleView('split')\" >\n    </md-icon>\n  </div>\n</div>\n\n\n\n\n<!-- PAGE CONTENTS -->\n<div class=\"grid\" *ngIf=\"state === 'grid'\">\n    <grid  [locations]=\"locations\"></grid>\n  </div>\n\n  <div class=\"map\" *ngIf=\"state === 'map'\" >\n    <app-map [locations]=\"locations\" ></app-map>\n  </div>\n\n  <div class=\"row\" *ngIf=\"state === 'split'\">\n    <div class=\"col-md-7 map-split\">\n      <app-map  [locations]=\"locations\" ></app-map>\n    </div>\n    <div class=\"col-md-5 list-split\">\n      <app-list [locations]=\"locations\"></app-list>\n    </div>\n  </div>\n\n<!-- FILTER COMPONENTS -->\n<app-type-filter #typefilter\n                 *ngIf=\"typeState\"\n                 [ParentTop]=\"TypeButtonTop\"\n                 [ParentLeft]=\"TypeButtonLeft\"\n></app-type-filter>\n<app-electricity-filter #electricityfilter\n                        *ngIf=\"electricityState\"\n                        [ParentTop]=\"ElectricityButtonTop\"\n                        [ParentLeft]=\"ElectricityButtonLeft\">\n</app-electricity-filter>\n<app-bathroom-filter #bathroomfilter\n                     *ngIf=\"bathroomState\"\n                     [ParentTop]=\"BathroomButtonTop\"\n                     [ParentLeft]=\"BathroomButtonLeft\">\n</app-bathroom-filter>\n<app-distance-filter #distancefilter\n                     *ngIf=\"distanceState\"\n                     [ParentTop]=\"DistanceButtonTop\"\n                     [ParentLeft]=\"DistanceButtonLeft\">\n</app-distance-filter>\n<app-rate-filter #ratefilter\n                 *ngIf=\"rateState\"\n                 [ParentTop]=\"RateButtonTop\"\n                 [ParentLeft]=\"RateButtonLeft\">\n</app-rate-filter>\n"

/***/ }),

/***/ "../../../../../src/app/main/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Created by Jeff on 7/8/2017.
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(dialog, snackBar, authService, router, iconRegistry, sanitizer, LocationService, searchService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.LocationService = LocationService;
        this.searchService = searchService;
        //SEARCH
        this.query = '';
        this.typeState = false;
        this.electricityState = false;
        this.bathroomState = false;
        this.distanceState = false;
        this.rateState = false;
        //VIEW STATE MONITOR
        this.state = 'split';
        iconRegistry.addSvgIcon('marker-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/marker-blue.svg'));
        iconRegistry.addSvgIcon('marker', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/marker.svg'));
        iconRegistry.addSvgIcon('grid', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/grid.svg'));
        iconRegistry.addSvgIcon('grid-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/grid-blue.svg'));
        iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
        iconRegistry.addSvgIcon('split', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/split-browser.svg'));
        iconRegistry.addSvgIcon('split-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/split-browser-blue.svg'));
        iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filter.svg'));
    }
    SearchComponent.prototype.setTypeState = function (value) {
        this.typeState = value;
        if (value) {
            this.electricityState = false;
            this.bathroomState = false;
            this.distanceState = false;
            this.rateState = false;
        }
    };
    SearchComponent.prototype.setElectricityState = function (value) {
        this.electricityState = value;
        if (value) {
            this.typeState = false;
            this.bathroomState = false;
            this.distanceState = false;
            this.rateState = false;
        }
    };
    SearchComponent.prototype.setBathroomState = function (value) {
        this.bathroomState = value;
        if (value) {
            this.typeState = false;
            this.electricityState = false;
            this.distanceState = false;
            this.rateState = false;
        }
    };
    SearchComponent.prototype.setDistanceState = function (value) {
        this.distanceState = value;
        if (value) {
            this.typeState = false;
            this.electricityState = false;
            this.bathroomState = false;
            this.rateState = false;
        }
    };
    SearchComponent.prototype.setRateState = function (value) {
        this.rateState = value;
        if (value) {
            this.typeState = false;
            this.electricityState = false;
            this.bathroomState = false;
            this.distanceState = false;
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET USER LOCATION
        navigator.geolocation.getCurrentPosition(function (position) {
            //SET GLOBAL CURRENT LOCATION
            _this.searchService.TempDistance.CurrentLocation =
                { lat: position.coords.latitude, lng: position.coords.longitude };
        });
        //GET LOCATIONS IN RANGE
        this.LocationService.getLocationsInRange(this.searchService.TempDistance)
            .subscribe(function (locations) {
            _this.locations = locations;
        });
        //RETRIEVE TYPE BUTTON COORDINATES
        this.onResize(null);
        //LISTEN FOR DISTANCE UPDATE
        this.searchService.onDistance.subscribe(function (res) {
            _this.LocationService.getLocationsInRange(res)
                .subscribe(function (locations) {
                _this.locations = locations;
            });
        });
    };
    SearchComponent.prototype.toggleView = function (toggle) {
        this.state = toggle;
    };
    SearchComponent.prototype.updateInput = function (value) {
        this.searchService.input = value;
    };
    SearchComponent.prototype.onResize = function (event) {
        //GATHER NEW COORDINATES
        this.TypeButtonTop = this.TypeButton._elementRef.nativeElement.offsetTop;
        this.TypeButtonLeft = this.TypeButton._elementRef.nativeElement.offsetLeft;
        this.ElectricityButtonTop = this.ElectricityButton._elementRef.nativeElement.offsetTop;
        this.ElectricityButtonLeft = this.ElectricityButton._elementRef.nativeElement.offsetLeft;
        this.BathroomButtonTop = this.BathroomButton._elementRef.nativeElement.offsetTop;
        this.BathroomButtonLeft = this.BathroomButton._elementRef.nativeElement.offsetLeft;
        this.DistanceButtonTop = this.DistanceButton._elementRef.nativeElement.offsetTop;
        this.DistanceButtonLeft = this.DistanceButton._elementRef.nativeElement.offsetLeft;
        this.RateButtonTop = this.RateButton._elementRef.nativeElement.offsetTop;
        this.RateButtonLeft = this.RateButton._elementRef.nativeElement.offsetLeft;
        //CHECK IF COMPONENT IS OPEN AND REFRESH POSITION
        if (this.ElectricityCard) {
            this.ElectricityCard.refreshPosition();
        }
        if (this.TypeCard) {
            this.TypeCard.refreshPosition();
        }
        if (this.BathroomCard) {
            this.BathroomCard.refreshPosition();
        }
        if (this.DistanceCard) {
            this.DistanceCard.refreshPosition();
        }
        if (this.RateCard) {
            this.RateCard.refreshPosition();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('type'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "TypeButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typefilter'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "TypeCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('electricity'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "ElectricityButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('electricityfilter'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "ElectricityCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bathroom'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "BathroomButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bathroomfilter'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "BathroomCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('distance'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "DistanceButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('distancefilter'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "DistanceCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rate'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "RateButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ratefilter'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "RateCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "opened", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'searchPage',
            template: __webpack_require__("../../../../../src/app/main/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/search/search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_location_service__["a" /* LocationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */]) === "function" && _h || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_bathroom_filter_bathroom_filter_component__ = __webpack_require__("../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__("../../../../../src/app/main/search/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_rate_filter_rate_filter_component__ = __webpack_require__("../../../../../src/app/main/search/filter/rate-filter/rate-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_distance_filter_distance_filter_component__ = __webpack_require__("../../../../../src/app/main/search/filter/distance-filter/distance-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_type_filter_type_filter_component__ = __webpack_require__("../../../../../src/app/main/search/filter/type-filter/type-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_electricity_filter_electricity_filter_component__ = __webpack_require__("../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_type_filter_type_filter_pipe__ = __webpack_require__("../../../../../src/app/main/search/filter/type-filter/type-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_electricity_filter_electricity_filter_pipe__ = __webpack_require__("../../../../../src/app/main/search/filter/electricity-filter/electricity-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_bathroom_filter_bathroom_filter_pipe__ = __webpack_require__("../../../../../src/app/main/search/filter/bathroom-filter/bathroom-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_rate_filter_rate_filter_pipe__ = __webpack_require__("../../../../../src/app/main/search/filter/rate-filter/rate-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Grid_grid_component__ = __webpack_require__("../../../../../src/app/main/search/Grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_map_component__ = __webpack_require__("../../../../../src/app/main/search/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_component__ = __webpack_require__("../../../../../src/app/main/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_list_component__ = __webpack_require__("../../../../../src/app/main/search/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Grid_card_card_component__ = __webpack_require__("../../../../../src/app/main/search/Grid/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_nouislider_src_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_nouislider_src_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_nouislider_src_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Grid_card_collection_button_collection_button_component__ = __webpack_require__("../../../../../src/app/main/search/Grid/card/collection-button/collection-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENTS














// SERVICES







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_nouislider_src_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI'
                }),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_bathroom_filter_bathroom_filter_component__["a" /* BathroomFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_rate_filter_rate_filter_component__["a" /* RateFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__filter_distance_filter_distance_filter_component__["a" /* DistanceFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__filter_type_filter_type_filter_component__["a" /* TypeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__filter_electricity_filter_electricity_filter_component__["a" /* ElectricityFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_2__filter_bathroom_filter_bathroom_filter_component__["a" /* BathroomFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__filter_type_filter_type_filter_pipe__["a" /* TypeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__filter_electricity_filter_electricity_filter_pipe__["a" /* ElectricityFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__filter_bathroom_filter_bathroom_filter_pipe__["a" /* BathroomFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__filter_rate_filter_rate_filter_pipe__["a" /* RateFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Grid_grid_component__["a" /* SearchGrid */],
                __WEBPACK_IMPORTED_MODULE_15__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Grid_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Grid_card_collection_button_collection_button_component__["a" /* CollectionButtonComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_search_service__["a" /* SearchService */]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fill-out-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillOutDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FillOutDetailsComponent = /** @class */ (function () {
    function FillOutDetailsComponent() {
    }
    FillOutDetailsComponent.prototype.ngOnInit = function () {
    };
    FillOutDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fill-out-details',
            template: __webpack_require__("../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FillOutDetailsComponent);
    return FillOutDetailsComponent;
}());

//# sourceMappingURL=fill-out-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  review-and-submit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewAndSubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewAndSubmitComponent = /** @class */ (function () {
    function ReviewAndSubmitComponent() {
    }
    ReviewAndSubmitComponent.prototype.ngOnInit = function () {
    };
    ReviewAndSubmitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-and-submit',
            template: __webpack_require__("../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewAndSubmitComponent);
    return ReviewAndSubmitComponent;
}());

//# sourceMappingURL=review-and-submit.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/upload-photos/upload-photos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  upload-photos works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/upload/upload-photos/upload-photos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/upload/upload-photos/upload-photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadPhotosComponent = /** @class */ (function () {
    function UploadPhotosComponent() {
    }
    UploadPhotosComponent.prototype.ngOnInit = function () {
    };
    UploadPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-photos',
            template: __webpack_require__("../../../../../src/app/main/upload/upload-photos/upload-photos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/upload/upload-photos/upload-photos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadPhotosComponent);
    return UploadPhotosComponent;
}());

//# sourceMappingURL=upload-photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-horizontal-stepper   {\n    width: 80%;\n    height: 80vh;\n    margin: 10px 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<md-horizontal-stepper>\n  <md-step label=\"Verify Location\">\n    <app-verify-location>\n\n    </app-verify-location>\n    <button md-button mdStepperNext>Next</button>\n\n  </md-step >\n  <md-step label=\"Fill Out Details\">\n    <app-fill-out-details>\n\n    </app-fill-out-details>\n    <button md-button mdStepperNext>Next</button>\n    <button md-button mdStepperPrevious=\"\">Back</button>\n\n  </md-step>\n  <md-step label=\"Upload Photos\">\n    <app-upload-photos>\n\n    </app-upload-photos>\n    <button md-button mdStepperNext>Next</button>\n    <button md-button mdStepperPrevious=\"\">Back</button>\n\n  </md-step>\n  <md-step label=\"Review & Submit\">\n    <app-review-and-submit>\n\n    </app-review-and-submit>\n    <button md-button mdStepperPrevious=\"\">Back</button>\n\n  </md-step>\n</md-horizontal-stepper>"

/***/ }),

/***/ "../../../../../src/app/main/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/**
 * Created by Jeff Haskell on 7/10/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(authService, router, snackBar) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.locationID = '';
        this.state = 0;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.setID = function (ID) {
        this.locationID = ID;
        this.state = 1;
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'upload',
            template: __webpack_require__("../../../../../src/app/main/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/upload/upload.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdSnackBar */]) === "function" && _c || Object])
    ], UploadComponent);
    return UploadComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_component__ = __webpack_require__("../../../../../src/app/main/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fill_out_details_fill_out_details_component__ = __webpack_require__("../../../../../src/app/main/upload/fill-out-details/fill-out-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review_and_submit_review_and_submit_component__ = __webpack_require__("../../../../../src/app/main/upload/review-and-submit/review-and-submit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_photos_upload_photos_component__ = __webpack_require__("../../../../../src/app/main/upload/upload-photos/upload-photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__verify_location_verify_location_component__ = __webpack_require__("../../../../../src/app/main/upload/verify-location/verify-location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_materials_module__["a" /* AngularMaterialsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fill_out_details_fill_out_details_component__["a" /* FillOutDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__review_and_submit_review_and_submit_component__["a" /* ReviewAndSubmitComponent */],
                __WEBPACK_IMPORTED_MODULE_8__upload_photos_upload_photos_component__["a" /* UploadPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__verify_location_verify_location_component__["a" /* VerifyLocationComponent */]
            ]
        })
    ], UploadModule);
    return UploadModule;
}());

//# sourceMappingURL=upload.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/upload/verify-location/verify-location.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  verify-location works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/upload/verify-location/verify-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/upload/verify-location/verify-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyLocationComponent = /** @class */ (function () {
    function VerifyLocationComponent() {
    }
    VerifyLocationComponent.prototype.ngOnInit = function () {
    };
    VerifyLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-location',
            template: __webpack_require__("../../../../../src/app/main/upload/verify-location/verify-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/upload/verify-location/verify-location.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VerifyLocationComponent);
    return VerifyLocationComponent;
}());

//# sourceMappingURL=verify-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileCard  {\n  margin: 2%;\n}\n\n.chatButton {\n  margin: 20px;\n}\nmd-dialog {\n  overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Awaiting Prototype\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__("../../../../../src/app/main/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_collection_service__ = __webpack_require__("../../../../../src/app/services/collection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userservice, collectionService, dialog) {
        this.userservice = userservice;
        this.collectionService = collectionService;
        this.dialog = dialog;
        this.username1 = '';
        this.CreatedCollections = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUser(localStorage.getItem('userID'))
            .subscribe(function (data) { _this.username1 = data.obj.firstName; }, 
        // data => { console.log( data ) },
        function (error) { console.error(error); });
        this.collectionService.getCreatedCollections()
            .subscribe(function (data) {
            _this.CreatedCollections = data;
        }, function (error) {
            console.error(error);
        });
    };
    UserProfileComponent.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a" /* ChatComponent */]);
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/main/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/user-profile/user-profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_collection_service__["a" /* CollectionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_collection_service__["a" /* CollectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdDialog */]) === "function" && _c || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/user-profile/user-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_component__ = __webpack_require__("../../../../../src/app/main/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collections_private_collections_private_collections_component__ = __webpack_require__("../../../../../src/app/main/collections/private-collections/private-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_materials_module__ = __webpack_require__("../../../../../src/app/angular-materials.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_materials_module__["a" /* AngularMaterialsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__collections_private_collections_private_collections_component__["a" /* PrivateCollectionsComponent */]
            ]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock__ = __webpack_require__("../../../../auth0-lock/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.lock = new __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default.a('5d7Sac7i0PN5qK0VdzdDaPSSDOqpCyhP', 'haske107.auth0.com', {
            languageDictionary: {
                title: "Join the Community"
            },
            theme: {
                logo: './../../../assets/icons/binoculars-black.svg',
                primaryColor: '#00bcd4',
            },
            auth: {
                redirectUrl: 'http://loca-app.herokuapp.com/loading',
                responseType: 'token id_token',
                params: {
                    scope: 'openid profile email'
                }
            }
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.lock.on("authenticated", function (authResult) {
            _this.setSession(authResult);
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.idTokenPayload.exp * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.requestUserID().subscribe(function (data) {
            console.log(data);
            localStorage.setItem('userID', data.result);
            localStorage.setItem('profile', JSON.stringify(data.profile));
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.clear();
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.listenforAuthentication = function () {
        var _this = this;
        this.listener = setInterval(function () {
            console.log('listening');
            if (_this.isAuthenticated()) {
                if (localStorage.getItem('profile')) {
                    _this.router.navigateByUrl('/');
                }
            }
        }, 50);
    };
    AuthService.prototype.requestUserID = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('access_token')
            ? '?token=' + localStorage.getItem('access_token')
            : '';
        return this.http.get('https://loca-app.herokuapp.com/user/' + token, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/collection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionService = /** @class */ (function () {
    function CollectionService(http) {
        this.http = http;
    }
    //READ
    CollectionService.prototype.getPublicCollections = function () {
        return this.http.get('https://loca-app.herokuapp.com/collection/community/')
            .map(function (response) {
            var Collections = response.json().obj;
            var transformedCollections = [];
            for (var _i = 0, Collections_1 = Collections; _i < Collections_1.length; _i++) {
                var collection = Collections_1[_i];
                var coll = {
                    _id: collection._id,
                    owner: collection.owner,
                    uploadDate: collection.uploadDate,
                    views: collection.views,
                    locations: collection.locations,
                    name: collection.name,
                    followers: collection.followers,
                    subtitle: collection.subtitle,
                    publicity: collection.publicity,
                    userPermission: collection.userPermission
                };
                transformedCollections.push(coll);
            }
            return transformedCollections;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ;
    CollectionService.prototype.getPrivateCollections = function () {
        return this.http.get('https://loca-app.herokuapp.com/collection/private/' + localStorage.getItem('userID'))
            .map(function (response) {
            var Collections = response.json().obj;
            var transformedCollections = [];
            for (var _i = 0, Collections_2 = Collections; _i < Collections_2.length; _i++) {
                var collection = Collections_2[_i];
                var coll = {
                    _id: collection._id,
                    owner: collection.owner,
                    uploadDate: collection.uploadDate,
                    views: collection.views,
                    locations: collection.locations,
                    name: collection.name,
                    followers: collection.followers,
                    subtitle: collection.subtitle,
                    publicity: collection.publicity,
                    userPermission: collection.userPermission
                };
                transformedCollections.push(coll);
            }
            return transformedCollections;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ;
    CollectionService.prototype.getCreatedCollections = function () {
        return this.http.get('https://loca-app.herokuapp.com/collection/created/' + localStorage.getItem('userID'))
            .map(function (response) {
            var Collections = response.json().obj;
            var transformedCollections = [];
            for (var _i = 0, Collections_3 = Collections; _i < Collections_3.length; _i++) {
                var collection = Collections_3[_i];
                var coll = {
                    _id: collection._id,
                    owner: collection.owner,
                    uploadDate: collection.uploadDate,
                    views: collection.views,
                    locations: collection.locations,
                    name: collection.name,
                    followers: collection.followers,
                    subtitle: collection.subtitle,
                    publicity: collection.publicity,
                    userPermission: collection.userPermission
                };
                transformedCollections.push(coll);
            }
            return transformedCollections;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ;
    CollectionService.prototype.getCollectionLocations = function (collectionID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.get('https://loca-app.herokuapp.com/collection/locations/' + collectionID + token, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    // + / -
    CollectionService.prototype.deleteCollection = function (collectionID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.delete('https://loca-app.herokuapp.com/collection/remove/' + collectionID + token, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    CollectionService.prototype.saveCollection = function (collection) {
        var body = JSON.stringify(collection);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://loca-app.herokuapp.com/collection/' + localStorage.getItem('userID') + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    //UPDATES
    CollectionService.prototype.updatePublicity = function (collectionID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('https://loca-app.herokuapp.com/collection/updatePublicity/' + collectionID + token, null, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    CollectionService.prototype.updateViewers = function (collectionID) { };
    CollectionService.prototype.addLocationToCollection = function (collectionID, location) {
        var body = JSON.stringify(location);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.patch('https://loca-app.herokuapp.com/collection/addLocation/' + collectionID + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    CollectionService.prototype.removeCollectionLocation = function (collectionID, locationIDs) {
        var body = locationIDs;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('https://loca-app.herokuapp.com/collection/removeLocation/' + collectionID + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error.json(); });
    };
    CollectionService.prototype.updateName = function (collectionID) { };
    CollectionService.prototype.updateSubtitle = function (collectionID) { };
    CollectionService.prototype.updateViews = function (collectionID) { };
    CollectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CollectionService);
    return CollectionService;
    var _a;
}());

//# sourceMappingURL=collection.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.uploadPhoto = function (locationID, formdata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'content': 'FormData'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://loca-app.herokuapp.com/files/main/:' + locationID + token, formdata, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    FileService.prototype.uploadPhotos = function (locationID, formdata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'content': 'FormData'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://loca-app.herokuapp.com/files/other/:' + locationID + token, formdata, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], FileService);
    return FileService;
    var _a;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Jeff Haskell on 7/12/2017.
 */





var LocationService = /** @class */ (function () {
    function LocationService(http, router) {
        this.http = http;
        this.router = router;
    }
    //CRD
    LocationService.prototype.getLocations = function () {
        return this.http.get('https://loca-app.herokuapp.com/location')
            .map(function (response) {
            var Locations = response.json().obj;
            var transformedLocations = [];
            for (var _i = 0, Locations_1 = Locations; _i < Locations_1.length; _i++) {
                var loca = Locations_1[_i];
                var location = {
                    _id: loca._id,
                    collections: loca.collections,
                    views: loca.views,
                    uploadDate: loca.uploadDate,
                    user: loca.user,
                    address: loca.address,
                    coordinates: loca.coordinates,
                    name: loca.name,
                    description: loca.description,
                    rules: loca.rules,
                    deposit: loca.deposit,
                    rate: loca.rate,
                    type: loca.type,
                    mainPhoto: loca.mainPhoto,
                    otherPhotos: loca.otherPhotos,
                    shootPhotos: loca.shootPhotos,
                    bathrooms: loca.bathrooms,
                    electricity: loca.electricity,
                    parkingSpots: loca.parkingSpots,
                    deleted: loca.deleted
                };
                transformedLocations.push(location);
            }
            return transformedLocations;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ;
    LocationService.prototype.saveLocation = function (location) {
        var body = JSON.stringify(location);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://loca-app.herokuapp.com/location' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    LocationService.prototype.getLocationsInRange = function (DistanceObject) {
        var body = DistanceObject;
        console.log(body);
        return this.http.post('https://loca-app.herokuapp.com/location/search/', body)
            .map(function (response) {
            var Locations = response.json().obj;
            var transformedLocations = [];
            for (var _i = 0, Locations_2 = Locations; _i < Locations_2.length; _i++) {
                var loca = Locations_2[_i];
                var location = {
                    _id: loca._id,
                    collections: loca.collections,
                    views: loca.views,
                    uploadDate: loca.uploadDate,
                    user: loca.user,
                    address: loca.address,
                    coordinates: loca.coordinates,
                    name: loca.name,
                    description: loca.description,
                    rules: loca.rules,
                    deposit: loca.deposit,
                    rate: loca.rate,
                    type: loca.type,
                    mainPhoto: loca.mainPhoto,
                    otherPhotos: loca.otherPhotos,
                    shootPhotos: loca.shootPhotos,
                    bathrooms: loca.bathrooms,
                    electricity: loca.electricity,
                    parkingSpots: loca.parkingSpots,
                    deleted: loca.deleted
                };
                transformedLocations.push(location);
            }
            return transformedLocations;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    ;
    LocationService.prototype.searchLocation = function (query) { };
    LocationService.prototype.deleteLocation = function (locationID) { };
    //UPDATES
    LocationService.prototype.updateAddress = function (locationID, newAddress) { };
    LocationService.prototype.updateName = function (locationID, newName) {
    };
    LocationService.prototype.updateDescription = function (locationID, newDescription) {
    };
    LocationService.prototype.updateRules = function (locationID, newRules) {
    };
    LocationService.prototype.updateDeposit = function (locationID, newDeposit) {
    };
    LocationService.prototype.updateRate = function (locationID, newRate) {
    };
    LocationService.prototype.updateType = function (locationID, newType) {
    };
    LocationService.prototype.updateBathrooms = function (locationID, newBathrooms) {
    };
    LocationService.prototype.updateElectricity = function (locationID, newElectricity) {
    };
    LocationService.prototype.updateParkingSpots = function (locationID, newPakringSpots) {
    };
    //
    LocationService.prototype.toProfilePage = function (location) {
        this.location = location;
        this.router.navigateByUrl('/main/locationprofile');
    };
    LocationService.prototype.getCurrentLocation = function () {
        return this.location;
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LocationService);
    return LocationService;
    var _a, _b;
}());

//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
    }
    MapService.prototype.geoCode = function (location) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'content': 'FormData'
        });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json' +
            '?address=' + location.address.streetAddress +
            ',' + location.address.city +
            ',' + location.address.state +
            '&key=AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], MapService);
    return MapService;
    var _a;
}());

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = /** @class */ (function () {
    function SearchService() {
        this.onQuery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onType = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onElectricity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBathroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDistance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.TempType = {
            Apartment: false,
            Home: false,
            School: false,
            Restaurant: false,
            Bar: false,
            Park: false,
            Street: false,
            Business: false,
        };
        this.TempElectricity = {
            Yes: false,
            No: false
        };
        this.TempBathroom = {
            Yes: false,
            No: false
        };
        this.TempDistance = {
            CurrentLocation: { lat: 33.7928203, lng: -117.8514 },
            Distance: 30
        };
        this.TempRate = {
            low: 0,
            high: 0
        };
    }
    Object.defineProperty(SearchService.prototype, "input", {
        set: function (value) {
            this.onQuery.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "TypeFilter", {
        set: function (value) {
            this.TempType = value;
            this.onType.emit(this.TempType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "ElectricityFilter", {
        set: function (value) {
            this.TempElectricity = value;
            this.onElectricity.emit(this.TempElectricity);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "BathroomFilter", {
        set: function (value) {
            this.TempBathroom = value;
            this.onBathroom.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "DistanceFilter", {
        set: function (value) {
            this.TempDistance = value;
            this.onDistance.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "RateFilter", {
        set: function (value) {
            this.TempRate = value;
            this.onRate.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.get("https://loca-app.herokuapp.com/user/getUserByID/" + userID, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    UserService.prototype.getUsers = function (userIDs) {
    };
    UserService.prototype.getUserByEmail = function (userEmail) {
    };
    UserService.prototype.getUsersByEmail = function (userEmails) {
    };
    UserService.prototype.getUserByUsername = function (userUsername) {
    };
    UserService.prototype.getUsersByUsername = function (userUsernames) {
    };
    UserService.prototype.getUserByLocation = function (locationID) {
    };
    UserService.prototype.getUsersByLocation = function (locationIDs) {
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/ts models/chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(participants) {
        this.Participants = participants;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ "../../../../../src/app/ts models/collection.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/**
 * Created by Jeff on 7/2/2017.
 */
var Collection = /** @class */ (function () {
    function Collection(owner, name, subtitle, publicity) {
        this.owner = owner;
        this.name = name;
        this.subtitle = subtitle;
        this.publicity = publicity;
        this.followers = [];
    }
    return Collection;
}());

//# sourceMappingURL=collection.model.js.map

/***/ }),

/***/ "../../../../../src/app/ts models/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/**
 * Created by Jeff on 7/2/2017.
 */
var Location = /** @class */ (function () {
    function Location(user, address, name, description, rules, deposit, rate, type, bathrooms, electricity, parkingSpots) {
        this.user = user;
        this.address = address;
        this.name = name;
        this.description = description;
        this.rules = rules;
        this.deposit = deposit;
        this.rate = rate;
        this.type = type;
        this.bathrooms = bathrooms;
        this.electricity = electricity;
        this.parkingSpots = parkingSpots;
        this.deleted = false;
        this.coordinates = null;
    }
    return Location;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ "../../../../../src/app/ts models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/**
 * Created by Jeff Haskell on 8/15/2017.
 */
var Message = /** @class */ (function () {
    function Message(author, authorID, content, time) {
        this.author = author;
        this.authorID = authorID;
        this.content = content;
        this.time = time;
        this.Author = author;
        this.AuthorID = authorID;
        this.Content = content;
        this.Time = time;
        this.read = false;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/assets/materials/Blue Gradient Side Panel.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Blue Gradient Side Panel.91b0ea8095b383fc2042.png";

/***/ }),

/***/ "../../../../../src/assets/materials/Purple Gradient.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Purple Gradient.785ffbe13a188f1bd58e.png";

/***/ }),

/***/ "../../../../../src/assets/materials/Silver Gradient.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Silver Gradient.7e0777d34b264db6f5c5.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
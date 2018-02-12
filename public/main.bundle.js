webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_gaurd_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/auth-gaurd/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
* Angular routes for front end views
*/
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_gaurd_auth_gaurd_service__["a" /* AuthGaurdService */]],
        children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_7__components_todo_list_todo_list_component__["a" /* TodoListComponent */] },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__["a" /* ChatComponent */] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigationbar></app-navigationbar>\n<h1>\n  {{title}}\n</h1>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_connection_service__ = __webpack_require__("../../../../../src/app/services/socket-connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_gaurd_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/auth-gaurd/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_validate_service__ = __webpack_require__("../../../../../src/app/services/user-validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_states_user_user_reducer__ = __webpack_require__("../../../../../src/app/redux-states/user/user-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navigationbar_navigationbar_component__ = __webpack_require__("../../../../../src/app/components/navigationbar/navigationbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_card_component_card_component_component__ = __webpack_require__("../../../../../src/app/components/card-component/card-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_todo_list_item_todo_list_item_component__ = __webpack_require__("../../../../../src/app/components/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_carousel_component_carousel_component_component__ = __webpack_require__("../../../../../src/app/components/carousel-component/carousel-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/todo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//services






//components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navigationbar_navigationbar_component__["a" /* NavigationbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_card_component_card_component_component__["a" /* CardComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_carousel_component_carousel_component_component__["a" /* CarouselComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_todo_todo_component__["a" /* TodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* StoreModule */].forRoot({
                    user: __WEBPACK_IMPORTED_MODULE_10__redux_states_user_user_reducer__["a" /* userReducer */]
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_user_validate_service__["a" /* UserValidateService */],
                __WEBPACK_IMPORTED_MODULE_6__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_gaurd_auth_gaurd_service__["a" /* AuthGaurdService */],
                __WEBPACK_IMPORTED_MODULE_5__services_socket_connection_service__["a" /* SocketConnectionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-gaurd/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(registerService, router) {
        this.registerService = registerService;
        this.router = router;
    }
    /**
    * Check if the user is logged in, returns a bool
    *
    * @returns {bool}
    */
    AuthGaurdService.prototype.canActivate = function () {
        if (this.registerService.loggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "../../../../../src/app/components/card-component/card-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-component/card-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"card card-outline-primary mb-3 text-center\"\n  *ngFor=\"let detail of details\"\n>\n    <div class=\"card-block\">\n        <blockquote class=\"card-blockquote\">\n            <p>{{ detail.description }}</p>\n            <footer>{{ detail.name }}</footer>\n        </blockquote>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/card-component/card-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponentComponent = /** @class */ (function () {
    function CardComponentComponent() {
    }
    CardComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CardComponentComponent.prototype, "details", void 0);
    CardComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-component',
            template: __webpack_require__("../../../../../src/app/components/card-component/card-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card-component/card-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponentComponent);
    return CardComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/carousel-component/carousel-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-carousel {\r\n  margin: 7rem !important;\r\n}\r\n.item-container {\r\n  height: 20rem !important;\r\n  background: darkseagreen !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/carousel-component/carousel-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf =\"slides.length >0\"\n  id=\"carousel-example-generic\"\n  class=\"carousel slide margin-carousel\"\n  data-ride=\"carousel\"\n>\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n        <li\n          *ngFor=\"let slide of slides; let i = index\"\n          data-target=\"#carousel-example-generic\"\n          [attr.data-slide-to]=\"i\"\n          [ngClass]=\"{'active': i == 0}\"\n        ></li>\n    </ol>\n\n  <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\t    <div\n\t      *ngFor=\"let data of slideData; let i = index\" \n\t      class=\"item item-container\"\n\t      [ngClass]=\"{'active': i == 0}\"\n\t    >\n\t        <!-- <img src=\"...\" alt=\"\"> -->\n\t        <div class=\"carousel-caption\">\n\t\t        <h3>{{ data.header }}</h3>\n\t\t        <p>{{ data.description }}</p>\n\t\t    </div>\n\t    </div>\n    </div>\n\n    <!-- Controls -->\n    <a\n      class=\"left carousel-control\"\n      href=\"#carousel-example-generic\"\n      role=\"button\"\n      data-slide=\"prev\"\n    >\n        <span\n          class=\"glyphicon glyphicon-chevron-left\"\n          aria-hidden=\"true\"\n        ></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a\n      class=\"right carousel-control\"\n      href=\"#carousel-example-generic\"\n      role=\"button\" data-slide=\"next\"\n    >\n        <span\n          class=\"glyphicon glyphicon-chevron-right\"\n          aria-hidden=\"true\"\n        ></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/carousel-component/carousel-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponentComponent = /** @class */ (function () {
    function CarouselComponentComponent() {
    }
    CarouselComponentComponent.prototype.ngOnInit = function () {
        this.slides = Array(this.slideCount).fill(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CarouselComponentComponent.prototype, "slideCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponentComponent.prototype, "slideData", void 0);
    CarouselComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel-component',
            template: __webpack_require__("../../../../../src/app/components/carousel-component/carousel-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/carousel-component/carousel-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponentComponent);
    return CarouselComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      Logged In Users\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"list-group\">\n        <button\n          type=\"button\"\n          class=\"list-group-item\"\n          *ngFor=\"let user of users\"\n          (click)=\"openChat(user)\"\n        >{{ user.userName }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"flash-success\">\n  <flash-messages></flash-messages>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_connection_service__ = __webpack_require__("../../../../../src/app/services/socket-connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
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
    function ChatComponent(flashMessagesService, socket) {
        this.flashMessagesService = flashMessagesService;
        this.socket = socket;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("user"));
        //get the logged in user
        this.socket.getJoinedUsers(this.user)
            .subscribe(function (socketData) {
            _this.users = socketData['data'];
            if (socketData['newUserNameJoined'] &&
                _this.user['name'] !== socketData['newUserNameJoined']) {
                _this.flashMessagesService.show('User ' + socketData['newUserNameJoined'] + ' joined.', {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
            }
            if (socketData['userNameLeft'] &&
                _this.user['name'] !== socketData['userNameLeft']) {
                _this.flashMessagesService.show('User ' + socketData['userNameLeft'] + ' left.', {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
            }
        });
        //get the message from user's
        this.socket.getMessage()
            .subscribe(function (message) {
            //todo to show message in a modal
            console.log(message);
        });
    };
    /**
    * Open chat for a user
    *
    * @param object user
    */
    ChatComponent.prototype.openChat = function (user) {
        //todo: to open a pop up for chat
        this.socket.sendMessage(user['userId'], 'test');
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        //this.connection.unsubscribe();
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_socket_connection_service__["a" /* SocketConnectionService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nested-links-wrapper {\r\n  margin-top: -4rem;\r\n  float: right;\t\r\n}\r\n\r\n.router-wrapper {\r\n  margin-top: 11rem;\t\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- caraousel starts-->\n<div>\n  <app-carousel-component\n    [slideCount]=\"2\"\n    [slideData]=\"slideData\"\n  ></app-carousel-component>\n</div>\n<!-- carousel ends -->\n<div class=\"nested-links-wrapper\">\n  <ul class=\"nav nav-pills\">\n    <li\n      role=\"presentation\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <a [routerLink]=\"['todo']\">TODO's</a>\n    </li>\n    <li\n      role=\"presentation\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <a [routerLink]=\"['chat']\">\n        Users\n      </a>\n    </li>\n  </ul>\t\n</div>\n<div class=\"router-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        //set the data for carousel
        this.slideData = [
            {
                header: 'Maintain your daily ToDo list',
                description: 'ToDO list made easy.'
            },
            {
                header: 'Step2',
                description: 'Add Todo anytime.'
            }
        ];
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1 class=\"display-3\">Welcome to the site</h1>\n    <p class=\"lead\"> To start please register or login in the App.</p>\n    <hr class=\"my-4\">\n    <div>\n        <a\n          class=\"btn btn-primary\"\n          [routerLink]=\"['/register']\"\n          *ngIf=\"!registerService.loggedIn()\"\n        >Register</a>\n    </div>\n</div>\n\n<app-card-component [details] = \"strackTraceDetails\"></app-card-component>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(registerService) {
        this.registerService = registerService;
        this.strackTraceDetails = [
            {
                'name': 'Express Backend',
                'description': 'Node/Express server runs the backend'
            },
            {
                'name': 'Angular Cli',
                'description': 'Angular Cli to generate the front end components'
            },
            {
                'name': 'JWT',
                'description': 'JWt is used for authentication'
            }
        ];
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-margin {\r\n  margin-top: 7rem !important;\r\n}\r\n.margin-btn {\r\n  margin-top: 1rem !important;\t\r\n}\r\n.has-error {\r\n  border-color: red;\t\r\n}\r\n.flash-error {\r\n  margin-top: 2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header header-margin\">Login</h2>\n<form novalidate [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\n  <div clas=\"form-group\">\n\t<label>UserName</label>\n\t<input\n\t  type=\"text\"\n\t  name=\"userName\"\n\t  formControlName=\"userName\"\n    class=\"form-control\"\n    [ngClass]=\"{'has-error': loginForm.get('userName').hasError('required') && formSubmitted}\"\n\t>\n  </div>\n  <div clas=\"form-group\">\n    <label>Password</label>\n\t<input\n\t  type=\"password\"\n\t  name=\"password\"\n\t  formControlName=\"password\"\n\t  class=\"form-control\"\n\t  [ngClass]=\"{'has-error': loginForm.get('password').hasError('required') && formSubmitted}\"\n\t>\n  </div>\n  <input\n    type=\"submit\"\n    class=\"btn btn-primary margin-btn\"\n    value=\"Submit\"\n    [disabled]=\"!loginForm.dirty\"\n  >\n</form>\n<div class=\"flash-error\">\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(registerService, flashMessagesService, router, fb) {
        this.registerService = registerService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.fb = fb;
        this.formSubmitted = false;
        //one way to add validation
        this.userName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.loginForm = this.fb.group({
            "userName": this.userName,
            "password": this.password
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.observable.unsubscribe();
    };
    /**
    * on form submit
    */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.loginForm.invalid) {
            this.flashMessagesService.show('required fileds not set', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var user = {
            userName: this.loginForm.get('userName').value,
            password: this.loginForm.get('password').value
        };
        this.observable = this.registerService.onLogin(user).subscribe(function (data) {
            if (data.success) {
                var logedUser = {
                    'userName': data.user.userName,
                    'name': data.user.name,
                    'email': data.user.email,
                    'userId': data.user.id
                };
                //add a socket connection
                _this.registerService.joinUserToChannel(logedUser);
                //add user to store
                _this.registerService.addUserToStore(logedUser);
                //add to local storage
                _this.registerService.storeLocalStorage(data.token, logedUser);
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                //this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigationbar/navigationbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigationbar/navigationbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggle collapsed\"\n              data-toggle=\" collapse\"\n              data-target=\"#navbar-main\"\n              (click)=\"toggleState()\"\n            >\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Todo App</a>\n        </div>\n        <div\n          class=\"collapse navbar-collapse\"\n          id=\"navbar-main\"\n          [ngClass]=\"{ 'in': isIn  }\"\n        >\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/']\">Home</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li\n                  *ngIf=\"registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/profile']\">Profile</a>\n                </li>\n      \n                <li\n                  *ngIf=\"!registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/register']\">Register</a>\n                </li>\n                <li\n                  *ngIf=\"!registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/login']\">Login</a>\n                </li>\n                <li\n                  *ngIf=\"registerService.loggedIn()\"\n                ><a (click)=\"onLogout()\">Logout</a>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navigationbar/navigationbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_connection_service__ = __webpack_require__("../../../../../src/app/services/socket-connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationbarComponent = /** @class */ (function () {
    function NavigationbarComponent(registerService, flashMessagesService, router, socket) {
        this.registerService = registerService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.socket = socket;
        this.isIn = false; // store state
    }
    NavigationbarComponent.prototype.ngOnInit = function () {
    };
    NavigationbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavigationbarComponent.prototype.onLogout = function () {
        this.registerService.logout();
        this.socketIo = this.socket.getSocket();
        this.socketIo.emit('logOut', 'user logged out');
        this.socketIo.disconnect();
        this.router.navigate(['/']);
        return false;
    };
    NavigationbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigationbar',
            template: __webpack_require__("../../../../../src/app/components/navigationbar/navigationbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigationbar/navigationbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_socket_connection_service__["a" /* SocketConnectionService */]])
    ], NavigationbarComponent);
    return NavigationbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-margin {\r\n  margin-top: 7rem !important;\r\n}\r\n.margin-btn {\r\n  margin-top: 1rem !important;\t\r\n}\r\n.has-error {\r\n  border-color: red;\t\r\n}\r\n.flash-error {\r\n  margin-top: 2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header header-margin\">Register</h2>\n<form novalidate  (submit)=\"onRegister()\" [formGroup]=\"registrationForm\">\n  <div clas=\"form-group\">\n\t  <label>Name</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"name\"\n      name=\"name\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('name').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n    <label>UserName</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"userName\"\n      name=\"userName\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('userName').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n\t  <label>Email</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"email\"\n      name=\"email\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('email').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n\t  <label>Password</label>\n\t  <input\n      type=\"password\"\n      formControlName=\"password\" \n      name=\"password\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('password').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <input\n    type=\"submit\"\n    class=\"btn btn-primary margin-btn\"\n    value=\"Submit\"\n    [disabled]=\"!registrationForm.dirty\"\n  >\n</form>\n<div class=\"flash-error\">\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_validate_service__ = __webpack_require__("../../../../../src/app/services/user-validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userValidateService, flashMessagesService, registerService, router, fb) {
        this.userValidateService = userValidateService;
        this.flashMessagesService = flashMessagesService;
        this.registerService = registerService;
        this.router = router;
        this.fb = fb;
        this.formSubmitted = false;
        //one way to add validation
        this.name = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required);
        this.registrationForm = this.fb.group({
            "name": this.name,
            "userName": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            "password": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    //to submit  the form
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.registrationForm.invalid) {
            this.flashMessagesService.show('required fileds not set', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var user = {
            name: this.registrationForm.get('name').value,
            userName: this.registrationForm.get('userName').value,
            email: this.registrationForm.get('email').value,
            password: this.registrationForm.get('password').value
        };
        //check validation required
        if (!this.userValidateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Email is not in valid format', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register user
        this.registerService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('yor are now register', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessagesService.show('error in registering', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_validate_service__["a" /* UserValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo-list-item/todo-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".todo-completed-icon, .todo-not-completed-icon{\r\n position: absolute;\r\n right: 3rem;\r\n margin-top: 26.2rem !important;\r\n}\r\n\r\n.todo-title {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.todo-completed-icon {\r\n color: green !important;\r\n}\r\n\r\n.todo-not-completed-icon {\r\n color: red !important;\r\n}\r\n\r\n.todo-edit-icon {\r\n  float: right !important;\r\n}\r\n\r\n.thumbnail-height {\r\n  height: 30rem !important;\r\n  max-height: 30rem !important;\r\n}\r\n\r\n.todo-delete-icon {\r\n  position: absolute !important;\r\n  margin-top: 26.2rem !important;\r\n  left: 3rem !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-list-item/todo-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-md-3\" *ngIf=\"todolist\">\n    <div class=\"thumbnail thumbnail-height\">\n        <div class=\"caption\">\n\t          <span class=\"glyphicon glyphicon-pushpin\" aria-hidden=\"true\"></span>\n        \t  <span\n        \t    aria-hidden=\"true\"\n        \t    class=\"glyphicon glyphicon-edit todo-edit-icon\"\n        \t    (click)=\"editTodo(index)\"\n        \t  ></span>\n            <h3\n              class=\"todo-title\"\n              *ngIf=\"todolist.title.length < 20\"\n            >{{ todolist.title }}</h3>\n            <h3\n              class=\"todo-title\"\n              *ngIf=\"todolist.title.length > 20\"\n            >{{ todolist.title.substring(0, 20)}}...</h3>\n            <p *ngIf=\"todolist.description.length < 90\">\n              {{ todolist.description }}</p>\n            <p *ngIf=\"todolist.description.length > 90\">\n              {{ todolist.description.substring(0, 90) }}...\n            </p>\n            <p>Created: {{todolist.createdOn}}</p>\n            <button\n              class=\"btn btn-info btn-xs\"\n              type=\"button\"\n              *ngIf=\"todolist.description.length > 90\"\n              (click)=\"showDetails(index)\"\n            >Read More</button>\n            <span\n              class=\"glyphicon glyphicon-ok-circle todo-completed-icon\"\n              aria-hidden=\"true\"\n              *ngIf=\"todolist.completed\"\n            ></span>\n            <span\n              class=\"glyphicon glyphicon-remove-circle todo-not-completed-icon\"\n              aria-hidden=\"true\"\n              *ngIf=\"!todolist.completed\"\n            ></span>\n            <span\n              class=\"glyphicon glyphicon-trash todo-delete-icon\"\n              (click)=\"deleteTodo(index, todolist._id)\"\n            ></span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo-list-item/todo-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListItemComponent = /** @class */ (function () {
    function TodoListItemComponent() {
        this.onTodoEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTodoDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShowDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
        //set the index
        this.index = this.todoIndex;
    };
    /**
    * edit the todo
    *
    * @param number indexSelected
    **/
    TodoListItemComponent.prototype.editTodo = function (indexSelected) {
        this.onTodoEdit.emit(indexSelected);
    };
    /**
    * delete the todo
    *
    * @param number indexSelected
    * @param number id
    **/
    TodoListItemComponent.prototype.deleteTodo = function (indexSelected, id) {
        this.onTodoDelete.emit({ indexSelected: indexSelected, id: id });
    };
    /**
    * show the todo details
    **/
    TodoListItemComponent.prototype.showDetails = function (indexSelected) {
        this.onShowDetails.emit(indexSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TodoListItemComponent.prototype, "todolist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TodoListItemComponent.prototype, "todoIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "onTodoEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "onTodoDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "onShowDetails", void 0);
    TodoListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list-item',
            template: __webpack_require__("../../../../../src/app/components/todo-list-item/todo-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo-list-item/todo-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flash-success {\r\n position: fixed;\r\n z-index: 1000;\r\n width: 50%;\r\n bottom:0;\r\n left:50%;\r\n}\r\n\r\n.top-margin {\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.completed-checkbox {\r\n  height: 4rem !important;\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.description-textarea {\r\n  min-height: 13rem !important;\r\n}\r\n\r\n.todo-list-container {\r\n  margin-top: -4rem;\r\n}\r\n\r\n.todo-wrapper { \r\n  margin-top: 2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userId\">\n  <div class=\"flash-success\">\n    <flash-messages></flash-messages>\n  </div>\n  <!-- if length of todo is 0 -->\n  <div *ngIf=\"todos.length === 0\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-12\">\n        <div class=\"thumbnail\">\n          <div class=\"caption\">\n            <h3>Welcome, {{ user['name'] }}</h3>\n            <p>Seems like you are new to this site,\n               start exploring by adding your first Todo.\n            </p>\n            <p>\n              <button\n                class=\"btn btn-primary\"\n                type=\"button\"\n                (click)=\"openAddTodoModal()\"\n              >Add Todo</button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- if length of todo is greater than 0 -->\n  <div\n    *ngIf=\"todos.length > 0\" class=\"todo-list-container\"\n  >\n    <div>\n      <button\n        class=\"btn btn-primary\"\n        type=\"button\"\n        (click)=\"openAddTodoModal()\"\n      >Add Todo</button>\n      <button\n        class=\"btn btn-primary\"\n        type=\"button\"\n        (click)=\"sortTodoByDate()\"\n      >{{ sortOrder ? 'Oldest' : 'Newest' }}</button>\n    </div>\n    <div\n      *ngFor=\"let row of rows; let i = index\"\n      class=\"todo-wrapper\"\n    >\n      <div class=\"row\">\n        <app-todo-list-item\n          *ngFor=\"let item of [0,1,2,3]\"\n          [todoIndex]=\"4*i + item\"\n          [todolist]=\"todos[4*i + item]\"\n          (onTodoEdit)=\"todoEdit($event)\"\n          (onTodoDelete)=\"todoDelete($event)\"\n          (onShowDetails)=\"todoShowDetails($event)\"\n        ></app-todo-list-item>\n  \t  </div>\n    </div>\n  </div>  \n</div>\n<!-- Modal -->\n<div\n  class=\"modal fade\"\n  id=\"myModal\" #myModal\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        ><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{ modalTitle }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group input-group-sm\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Title</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Title\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoTitle\"\n          >\n        </div>\n        <div class=\"input-group input-group-sm top-margin\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Description</span>\n          <textarea\n            class=\"form-control description-textarea\"\n            placeholder=\"Description\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoDescription\"\n          ></textarea>\n        </div>\n        <div class=\"input-group input-group-sm top-margin\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Completed</span>\n          <input\n            type=\"checkbox\"\n            class=\"form-control completed-checkbox\"\n            placeholder=\"Completed\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoCompleted\"\n          >\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          *ngIf=\"modalAction == 'edit'\"\n          (click)=\"saveEditTodo()\"\n        >Save changes</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          *ngIf=\"modalAction == 'add'\"\n          (click)=\"addTodo()\"\n        >Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- modal --> \n<div\n  class=\"modal fade\"\n  id=\"showDetailModal\" #showDetailModal\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"showDetailModalLabel\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" *ngIf=\"todos && todos[selectedIndex]\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        ><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"showDetailModalLabel\">ToDo Details</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"page-header\">\n          <h3>Title: <small>{{ todos[selectedIndex].title }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Description: <small>{{ todos[selectedIndex].description }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Creation Date: <small>{{ todos[selectedIndex].createdOn }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Completed: <small>{{ todos[selectedIndex].completed }}</small></h3>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__ = __webpack_require__("../../../../../src/app/services/todo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__ = __webpack_require__("../../../../../src/app/pipes/order-by-date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoDataService, flashMessagesService, myFilter, store) {
        this.todoDataService = todoDataService;
        this.flashMessagesService = flashMessagesService;
        this.myFilter = myFilter;
        this.store = store;
        this.todos = [];
        this.sortOrder = true; //true means newest, false means oldest
        //this is for now defined in two places  
        this.description = 'A list of things that one wants to get done or that need to get done.These are prioritized lists of all the tasks that you need to carry out.';
        //Get user profile
        this.data$ = this.store.select('user');
        this.data$.subscribe(function (user) {
            console.log(user);
        });
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.userId = this.user['userId'];
        this.creationDate = __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, 'days').format('DD/MM/YYYY');
        //get the list of all todo for user 1 from api or local storage
        if (localStorage.getItem("todos") === null) {
            this.obs = this.todoDataService.getToDos(this.user['userId'])
                .subscribe(function (data) {
                if (data.todos.length > 0) {
                    _this.todos = data.todos;
                    //sort the todos according to date, latest first
                    _this.todos = _this.myFilter.transform(_this.todos, _this.sortOrder);
                    //store todos in  local storage
                    localStorage.setItem('todos', JSON.stringify(_this.todos));
                    _this.setTheTodoItemData();
                }
            });
        }
        else {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            //sort the todos according to date, latest first
            this.todos = this.myFilter.transform(this.todos, this.sortOrder);
            this.setTheTodoItemData();
        }
    };
    /**
    * set the dat for the todo list item
    **/
    TodoListComponent.prototype.setTheTodoItemData = function () {
        this.count = this.todos.length % 4 == 0 ? Math.floor(this.todos.length / 4) : Math.floor(this.todos.length / 4) + 1;
        this.rows = Array(this.count).fill(1);
    };
    /**
    * edit the todo
    *
    * @param number index
    **/
    TodoListComponent.prototype.todoEdit = function (index) {
        this.modalTitle = 'Edit ToDo';
        this.modalAction = 'edit';
        this.todoSelectedIndex = index;
        this.todoTitle = this.todos[index].title;
        this.todoDescription =
            this.todos[index].description ? this.todos[index].description : this.description;
        this.todoCompleted = this.todos[index].completed;
        this.todoId = this.todos[index]._id;
        //open the modal to edit
        $("#myModal").modal('show');
    };
    /**
    * save the edited note
    **/
    TodoListComponent.prototype.saveEditTodo = function () {
        var _this = this;
        this.todos[this.todoSelectedIndex].title = this.todoTitle;
        this.todos[this.todoSelectedIndex].description = this.todoDescription;
        this.todos[this.todoSelectedIndex].completed = this.todoCompleted;
        this.newTodo = {
            'id': this.todoId,
            'userId': this.user['userId'],
            'todoId': this.todoId,
            'title': this.todoTitle,
            'description': this.todoDescription,
            'completed': this.todoCompleted
        };
        this.todoDataService.editTodo(this.newTodo).subscribe(function (data) {
            //update the local storage
            localStorage.setItem('todos', JSON.stringify(_this.todos));
            _this.flashMessagesService.show('ToDo edited successfully', {
                cssClass: 'alert-success',
                timeout: 2000
            });
            //open the modal to edit
            $("#myModal").modal('hide');
        });
    };
    /**
    * open the ad todo modal
    **/
    TodoListComponent.prototype.openAddTodoModal = function () {
        this.modalTitle = 'Add ToDo';
        this.modalAction = 'add';
        this.todoTitle = '';
        this.todoDescription = '';
        this.todoCompleted = false;
        //open the modal to edit
        $("#myModal").modal('show');
    };
    /**
    * add a new todo to the array
    **/
    TodoListComponent.prototype.addTodo = function () {
        var _this = this;
        this.newTodo = {
            'userId': this.user['userId'],
            'title': this.todoTitle,
            'description': this.todoDescription,
            'createdOn': __WEBPACK_IMPORTED_MODULE_3_moment__().format('DD/MM/YYYY'),
            'completionDate': __WEBPACK_IMPORTED_MODULE_3_moment__().add(7, 'days').format('DD/MM/YYYY'),
            'completed': this.todoCompleted ? this.todoCompleted : false
        };
        this.todoDataService.addTodo(this.newTodo).subscribe(function (data) {
            _this.todos.push(data.data);
            _this.flashMessagesService.show('ToDo added successfully', {
                cssClass: 'alert-success',
                timeout: 2000
            });
            //update the local storage
            localStorage.setItem('todos', JSON.stringify(_this.todos));
            //sort the todos according to date, latest first
            _this.todos = _this.myFilter.transform(_this.todos, _this.sortOrder);
            _this.setTheTodoItemData();
            //open the modal to edit
            $("#myModal").modal('hide');
        });
    };
    /**
    * delete the todo
    *
    * @param object event
    **/
    TodoListComponent.prototype.todoDelete = function (event) {
        var _this = this;
        this.todoDataService.deleteTodo(event.id).subscribe(function (data) {
            _this.todos.splice(event.indexSelected, 1);
            _this.flashMessagesService.show('ToDo deleted successfully', {
                cssClass: 'alert-success',
                timeout: 2000
            });
            //update the local storage
            localStorage.setItem('todos', JSON.stringify(_this.todos));
            _this.setTheTodoItemData();
        });
    };
    /**
    * show todo details
    *
    * @param number index
    **/
    TodoListComponent.prototype.todoShowDetails = function (index) {
        this.selectedIndex = index;
        //open the modal to edit
        $("#showDetailModal").modal('show');
    };
    /**
    * sort todo by creation date
    **/
    TodoListComponent.prototype.sortTodoByDate = function () {
        this.sortOrder = !this.sortOrder;
        console.log(this.todos, this.sortOrder);
        //sort the todos according to date, latest first
        this.todos = this.myFilter.transform(this.todos, this.sortOrder);
    };
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__["a" /* TodoDataService */], __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__["a" /* TodoDataService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- todo component -->\n<div *ngIf=\"userId\">\n  <!-- <app-todo-list [user]=\"user\"></app-todo-list> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
        //Get user profile
        this.data$ = this.store.select('user');
        this.data$.subscribe(function (user) {
            console.log(user);
        });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.userId = this.user['userId'];
    };
    TodoComponent.prototype.ngOnDestroy = function () {
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/order-by-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByDatePipe = /** @class */ (function () {
    function OrderByDatePipe() {
    }
    OrderByDatePipe.prototype.transform = function (array, sortOrder) {
        //sortOrder true means newest, false means oldest
        if (!array || array === undefined || array.length === 0)
            return null;
        return array.sort(function (a, b) {
            if (a.createdOn < b.createdOn) {
                return sortOrder ? 1 : -1;
            }
            else if (a.createdOn > b.createdOn) {
                return sortOrder ? -1 : 1;
            }
            else {
                return 0;
            }
        });
    };
    OrderByDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderByDate'
        })
    ], OrderByDatePipe);
    return OrderByDatePipe;
}());

//You need to return 0 if the two elements are equal, 
//a negative number if a should be before b and 
//a positive number if b should be before a. 


/***/ }),

/***/ "../../../../../src/app/redux-states/user/user-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserActions; });
var LOGIN = 'LOGIN';
var LOGOUT = 'LOGOUT';
var UserActions = /** @class */ (function () {
    function UserActions(type, payload) {
        this.type = type;
        this.payload = payload;
    }
    return UserActions;
}());



/***/ }),

/***/ "../../../../../src/app/redux-states/user/user-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__("../../../../../src/app/redux-states/user/user-actions.ts");

var initialState = {
    userName: null,
    name: null,
    email: null,
    userId: null,
};
function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["a" /* LOGIN */]:
            console.log(action.payload, 'action');
            console.log(state, 'state');
            // Create a new state from payload
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["b" /* LOGOUT */]:
            return state;
        default:
            return state;
    }
}
;


/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_states_user_user_actions__ = __webpack_require__("../../../../../src/app/redux-states/user/user-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_connection_service__ = __webpack_require__("../../../../../src/app/services/socket-connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterService = /** @class */ (function () {
    function RegisterService(http, store, socket) {
        this.http = http;
        this.store = store;
        this.socket = socket;
        this.testMode = true;
        this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
    }
    /**
    * Register user
    *
    * @param {Object} user
    * @returns Json
    */
    RegisterService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'api/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
    * Signs user in
    *
    * @param {Object} user
    * @returns Json
    */
    RegisterService.prototype.onLogin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'api/login', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
    * Signs out the user
    */
    RegisterService.prototype.logout = function () {
        localStorage.clear();
        this.authToken = null;
        this.user = null;
    };
    /**
    * Sore the token/user in local storage
    *
    * @param {string} token
    * @param {Object} user
    */
    RegisterService.prototype.storeLocalStorage = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    /**
    * Get's the user profile who is logged in
    *
    * @returns Json
    */
    RegisterService.prototype.getUserProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'api/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
    * Sets the token for logged in user
    */
    RegisterService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    /**
    * Checks if the token is expired or not
    *
    * @returns {bool}
    */
    RegisterService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    /**
    * join the user to the socket channel
    *
    * @param {Object} logedUser
    */
    RegisterService.prototype.joinUserToChannel = function (logedUser) {
        //join the socket channel
        this.socket.joinChannel(logedUser);
    };
    /**
    * update the user store with the logged in user
    *
    * @param {Object} logedUser
    */
    RegisterService.prototype.addUserToStore = function (logedUser) {
        //call store to store state
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__redux_states_user_user_actions__["c" /* UserActions */]('LOGIN', logedUser));
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__socket_connection_service__["a" /* SocketConnectionService */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket-connection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketConnectionService = /** @class */ (function () {
    function SocketConnectionService() {
        this.testMode = true;
        this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
    }
    /**
    * Return the connected socket
    */
    SocketConnectionService.prototype.getSocket = function () {
        return this.socket;
    };
    /**
    * Connect to a socket
    */
    SocketConnectionService.prototype.connect = function () {
        //connect to socket io
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](this.url, {
            'reconnection': true,
            'reconnectionDelay': 500,
            'reconnectionAttempts': 10
        });
    };
    /**
    * Join the user to a socket channel
    */
    SocketConnectionService.prototype.joinChannel = function (data) {
        //join the public channel
        this.connect();
        this.socket.emit("joinPublicChannel", {
            'channel': 'public',
            'userId': data['userId'],
            'userName': data['name']
        });
    };
    /**
    * Send messasge to user
    *
    * @param string userId
    * @param string message
    */
    SocketConnectionService.prototype.sendMessage = function (userId, message) {
        this.socket.emit('sendMessage', {
            'userId': userId,
            'message': message
        });
    };
    /**
    * To ge the messages for the user
    *
    * @return Observable
    */
    SocketConnectionService.prototype.getMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            //receive message when user joined 
            _this.socket.on("receiveMessage", function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /**
    * Get the emitted value back from the server
    * of the total joined users
    *
    * @returns Observable
    */
    SocketConnectionService.prototype.getJoinedUsers = function (data) {
        var _this = this;
        if (!this.socket) {
            this.joinChannel(data);
        }
        this.socket.emit("getJoinedUsers", {
            'channel': 'public'
        });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            //receive message when user joined 
            _this.socket.on("userOnPublicChannel", function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketConnectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketConnectionService);
    return SocketConnectionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/todo-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
        this.testMode = true;
        this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
    }
    /**
     * Get Todos for user, by default for user 1
     *
     * @returns Json
     */
    TodoDataService.prototype.getToDos = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + userId).map(res => res.json());
        return this.http.get(this.url + 'api/todo/' + userId, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * add a todo to db
     *
     * @param array todo
     *
     * @returns Json
    **/
    TodoDataService.prototype.addTodo = function (todo) {
        console.log(todo);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'api/todo', todo, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * save the edit todo
     *
     * @param array todo
     *
     * @returns Json
    **/
    TodoDataService.prototype.editTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'api/todo', todo, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * Delete the selected todo
     *
     * @param number id
    */
    TodoDataService.prototype.deleteTodo = function (id) {
        console.log(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'api/todo/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
    * Sets the token for logged in user
    */
    TodoDataService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    TodoDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserValidateService = /** @class */ (function () {
    function UserValidateService() {
    }
    /**
    * Validate email
    *
    * @param {string} email
    *
    * @returns {bool}
    */
    UserValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UserValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserValidateService);
    return UserValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
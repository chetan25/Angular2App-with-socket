webpackJsonp([1,4],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketConnectionService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketConnectionService);
    return SocketConnectionService;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/socket-connection.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGaurdService);
    return AuthGaurdService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/auth-gaurd.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_connection_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(854),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_connection_service__["a" /* SocketConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_connection_service__["a" /* SocketConnectionService */]) === 'function' && _b) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/chat.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
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
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(855),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/dashboard.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(856),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/home.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_connection_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(registerService, flashMessagesService, router, fb, socket) {
        this.registerService = registerService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.fb = fb;
        this.socket = socket;
        this.formSubmitted = false;
        //one way to add validation
        this.userName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required);
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
                _this.socket.joinChannel(logedUser);
                _this.registerService.storeLocalStorage(data.token, logedUser);
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(857),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_connection_service__["a" /* SocketConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_socket_connection_service__["a" /* SocketConnectionService */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/login.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_validate_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(userValidateService, flashMessagesService, registerService, router, fb) {
        this.userValidateService = userValidateService;
        this.flashMessagesService = flashMessagesService;
        this.registerService = registerService;
        this.router = router;
        this.fb = fb;
        this.formSubmitted = false;
        //one way to add validation
        this.name = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required);
        this.registrationForm = this.fb.group({
            "name": this.name,
            "userName": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required],
            "password": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(859),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_validate_service__["a" /* UserValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_validate_service__["a" /* UserValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */]) === 'function' && _e) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/register.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
        //Get user profile
        this.user = JSON.parse(localStorage.getItem("user"));
        this.userId = this.user['userId'];
    };
    TodoComponent.prototype.ngOnDestroy = function () {
    };
    TodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(862),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/todo.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserValidateService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserValidateService);
    return UserValidateService;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/user-validate.service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 536;


/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(655);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/main.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_gaurd_auth_gaurd_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chat_chat_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_todo_todo_component__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
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
* Angular routes for front end views
*/
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_gaurd_auth_gaurd_service__["a" /* AuthGaurdService */]],
        children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_8__components_todo_todo_component__["a" /* TodoComponent */] },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_7__components_chat_chat_component__["a" /* ChatComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/app-routing.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(851),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/app.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigationbar_navigationbar_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_validate_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_register_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_socket_connection_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_gaurd_auth_gaurd_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_card_component_card_component_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_todo_list_todo_list_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_todo_list_item_todo_list_item_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_carousel_component_carousel_component_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_chat_chat_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_todo_todo_component__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navigationbar_navigationbar_component__["a" /* NavigationbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_card_component_card_component_component__["a" /* CardComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_carousel_component_carousel_component_component__["a" /* CarouselComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_todo_todo_component__["a" /* TodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_validate_service__["a" /* UserValidateService */], __WEBPACK_IMPORTED_MODULE_11__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_13__auth_gaurd_auth_gaurd_service__["a" /* AuthGaurdService */], __WEBPACK_IMPORTED_MODULE_12__services_socket_connection_service__["a" /* SocketConnectionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/app.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponentComponent = (function () {
    function CardComponentComponent() {
    }
    CardComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CardComponentComponent.prototype, "details", void 0);
    CardComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-component',
            template: __webpack_require__(852),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponentComponent);
    return CardComponentComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/card-component.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponentComponent = (function () {
    function CarouselComponentComponent() {
    }
    CarouselComponentComponent.prototype.ngOnInit = function () {
        this.slides = Array(this.slideCount).fill(1);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CarouselComponentComponent.prototype, "slideCount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CarouselComponentComponent.prototype, "slideData", void 0);
    CarouselComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel-component',
            template: __webpack_require__(853),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponentComponent);
    return CarouselComponentComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/carousel-component.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_connection_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationbarComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigationbar',
            template: __webpack_require__(858),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_connection_service__["a" /* SocketConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_socket_connection_service__["a" /* SocketConnectionService */]) === 'function' && _d) || Object])
    ], NavigationbarComponent);
    return NavigationbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/navigationbar.component.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListItemComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TodoListItemComponent.prototype, "todolist", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], TodoListItemComponent.prototype, "todoIndex", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TodoListItemComponent.prototype, "onTodoEdit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TodoListItemComponent.prototype, "onTodoDelete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TodoListItemComponent.prototype, "onShowDetails", void 0);
    TodoListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list-item',
            template: __webpack_require__(860),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/todo-list-item.component.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__ = __webpack_require__(661);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoListComponent = (function () {
    function TodoListComponent(todoDataService, flashMessagesService, myFilter) {
        this.todoDataService = todoDataService;
        this.flashMessagesService = flashMessagesService;
        this.myFilter = myFilter;
        this.todos = [];
        this.sortOrder = true; //true means newest, false means oldest
        //this is for now defined in two places  
        this.description = 'A list of things that one wants to get done or that need to get done.These are prioritized lists of all the tasks that you need to carry out.';
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TodoListComponent.prototype, "user", void 0);
    TodoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(861),
            styles: [__webpack_require__(849)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__["a" /* TodoDataService */], __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__["a" /* TodoDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_todo_data_service__["a" /* TodoDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */]) === 'function' && _c) || Object])
    ], TodoListComponent);
    return TodoListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/todo-list.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderByDatePipe = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderByDate'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByDatePipe);
    return OrderByDatePipe;
}());
//You need to return 0 if the two elements are equal, 
//a negative number if a should be before b and 
//a positive number if b should be before a. 
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/order-by-date.pipe.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDataService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TodoDataService);
    return TodoDataService;
    var _a;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/todo-data.service.js.map

/***/ }),

/***/ 663:
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
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/environment.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.testMode = true;
        this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
    }
    //for deployment remove 'http://localhost:3020/'
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
//# sourceMappingURL=C:/Angular-Code/Angular2-App/clientApp/src/register.service.js.map

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 396,
	"./af.js": 396,
	"./ar": 403,
	"./ar-dz": 397,
	"./ar-dz.js": 397,
	"./ar-kw": 398,
	"./ar-kw.js": 398,
	"./ar-ly": 399,
	"./ar-ly.js": 399,
	"./ar-ma": 400,
	"./ar-ma.js": 400,
	"./ar-sa": 401,
	"./ar-sa.js": 401,
	"./ar-tn": 402,
	"./ar-tn.js": 402,
	"./ar.js": 403,
	"./az": 404,
	"./az.js": 404,
	"./be": 405,
	"./be.js": 405,
	"./bg": 406,
	"./bg.js": 406,
	"./bn": 407,
	"./bn.js": 407,
	"./bo": 408,
	"./bo.js": 408,
	"./br": 409,
	"./br.js": 409,
	"./bs": 410,
	"./bs.js": 410,
	"./ca": 411,
	"./ca.js": 411,
	"./cs": 412,
	"./cs.js": 412,
	"./cv": 413,
	"./cv.js": 413,
	"./cy": 414,
	"./cy.js": 414,
	"./da": 415,
	"./da.js": 415,
	"./de": 418,
	"./de-at": 416,
	"./de-at.js": 416,
	"./de-ch": 417,
	"./de-ch.js": 417,
	"./de.js": 418,
	"./dv": 419,
	"./dv.js": 419,
	"./el": 420,
	"./el.js": 420,
	"./en-au": 421,
	"./en-au.js": 421,
	"./en-ca": 422,
	"./en-ca.js": 422,
	"./en-gb": 423,
	"./en-gb.js": 423,
	"./en-ie": 424,
	"./en-ie.js": 424,
	"./en-nz": 425,
	"./en-nz.js": 425,
	"./eo": 426,
	"./eo.js": 426,
	"./es": 428,
	"./es-do": 427,
	"./es-do.js": 427,
	"./es.js": 428,
	"./et": 429,
	"./et.js": 429,
	"./eu": 430,
	"./eu.js": 430,
	"./fa": 431,
	"./fa.js": 431,
	"./fi": 432,
	"./fi.js": 432,
	"./fo": 433,
	"./fo.js": 433,
	"./fr": 436,
	"./fr-ca": 434,
	"./fr-ca.js": 434,
	"./fr-ch": 435,
	"./fr-ch.js": 435,
	"./fr.js": 436,
	"./fy": 437,
	"./fy.js": 437,
	"./gd": 438,
	"./gd.js": 438,
	"./gl": 439,
	"./gl.js": 439,
	"./gom-latn": 440,
	"./gom-latn.js": 440,
	"./he": 441,
	"./he.js": 441,
	"./hi": 442,
	"./hi.js": 442,
	"./hr": 443,
	"./hr.js": 443,
	"./hu": 444,
	"./hu.js": 444,
	"./hy-am": 445,
	"./hy-am.js": 445,
	"./id": 446,
	"./id.js": 446,
	"./is": 447,
	"./is.js": 447,
	"./it": 448,
	"./it.js": 448,
	"./ja": 449,
	"./ja.js": 449,
	"./jv": 450,
	"./jv.js": 450,
	"./ka": 451,
	"./ka.js": 451,
	"./kk": 452,
	"./kk.js": 452,
	"./km": 453,
	"./km.js": 453,
	"./kn": 454,
	"./kn.js": 454,
	"./ko": 455,
	"./ko.js": 455,
	"./ky": 456,
	"./ky.js": 456,
	"./lb": 457,
	"./lb.js": 457,
	"./lo": 458,
	"./lo.js": 458,
	"./lt": 459,
	"./lt.js": 459,
	"./lv": 460,
	"./lv.js": 460,
	"./me": 461,
	"./me.js": 461,
	"./mi": 462,
	"./mi.js": 462,
	"./mk": 463,
	"./mk.js": 463,
	"./ml": 464,
	"./ml.js": 464,
	"./mr": 465,
	"./mr.js": 465,
	"./ms": 467,
	"./ms-my": 466,
	"./ms-my.js": 466,
	"./ms.js": 467,
	"./my": 468,
	"./my.js": 468,
	"./nb": 469,
	"./nb.js": 469,
	"./ne": 470,
	"./ne.js": 470,
	"./nl": 472,
	"./nl-be": 471,
	"./nl-be.js": 471,
	"./nl.js": 472,
	"./nn": 473,
	"./nn.js": 473,
	"./pa-in": 474,
	"./pa-in.js": 474,
	"./pl": 475,
	"./pl.js": 475,
	"./pt": 477,
	"./pt-br": 476,
	"./pt-br.js": 476,
	"./pt.js": 477,
	"./ro": 478,
	"./ro.js": 478,
	"./ru": 479,
	"./ru.js": 479,
	"./sd": 480,
	"./sd.js": 480,
	"./se": 481,
	"./se.js": 481,
	"./si": 482,
	"./si.js": 482,
	"./sk": 483,
	"./sk.js": 483,
	"./sl": 484,
	"./sl.js": 484,
	"./sq": 485,
	"./sq.js": 485,
	"./sr": 487,
	"./sr-cyrl": 486,
	"./sr-cyrl.js": 486,
	"./sr.js": 487,
	"./ss": 488,
	"./ss.js": 488,
	"./sv": 489,
	"./sv.js": 489,
	"./sw": 490,
	"./sw.js": 490,
	"./ta": 491,
	"./ta.js": 491,
	"./te": 492,
	"./te.js": 492,
	"./tet": 493,
	"./tet.js": 493,
	"./th": 494,
	"./th.js": 494,
	"./tl-ph": 495,
	"./tl-ph.js": 495,
	"./tlh": 496,
	"./tlh.js": 496,
	"./tr": 497,
	"./tr.js": 497,
	"./tzl": 498,
	"./tzl.js": 498,
	"./tzm": 500,
	"./tzm-latn": 499,
	"./tzm-latn.js": 499,
	"./tzm.js": 500,
	"./uk": 501,
	"./uk.js": 501,
	"./ur": 502,
	"./ur.js": 502,
	"./uz": 504,
	"./uz-latn": 503,
	"./uz-latn.js": 503,
	"./uz.js": 504,
	"./vi": 505,
	"./vi.js": 505,
	"./x-pseudo": 506,
	"./x-pseudo.js": 506,
	"./yo": 507,
	"./yo.js": 507,
	"./zh-cn": 508,
	"./zh-cn.js": 508,
	"./zh-hk": 509,
	"./zh-hk.js": 509,
	"./zh-tw": 510,
	"./zh-tw.js": 510
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 836;


/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ".margin-carousel {\r\n  margin: 7rem !important;\r\n}\r\n.item-container {\r\n  height: 20rem !important;\r\n  background: darkseagreen !important;\r\n}\r\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = ".nested-links-wrapper {\r\n  margin-top: -4rem;\r\n  float: right;\t\r\n}\r\n\r\n.router-wrapper {\r\n  margin-top: 11rem;\t\r\n}\r\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ".header-margin {\r\n  margin-top: 7rem !important;\r\n}\r\n.margin-btn {\r\n  margin-top: 1rem !important;\t\r\n}\r\n.has-error {\r\n  border-color: red;\t\r\n}\r\n.flash-error {\r\n  margin-top: 2rem;\r\n}"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ".header-margin {\r\n  margin-top: 7rem !important;\r\n}\r\n.margin-btn {\r\n  margin-top: 1rem !important;\t\r\n}\r\n.has-error {\r\n  border-color: red;\t\r\n}\r\n.flash-error {\r\n  margin-top: 2rem;\r\n}"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".todo-completed-icon, .todo-not-completed-icon{\r\n position: absolute;\r\n right: 3rem;\r\n margin-top: 26.2rem !important;\r\n}\r\n\r\n.todo-title {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.todo-completed-icon {\r\n color: green !important;\r\n}\r\n\r\n.todo-not-completed-icon {\r\n color: red !important;\r\n}\r\n\r\n.todo-edit-icon {\r\n  float: right !important;\r\n}\r\n\r\n.thumbnail-height {\r\n  height: 30rem !important;\r\n  max-height: 30rem !important;\r\n}\r\n\r\n.todo-delete-icon {\r\n  position: absolute !important;\r\n  margin-top: 26.2rem !important;\r\n  left: 3rem !important;\r\n}"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ".flash-success {\r\n position: fixed;\r\n z-index: 1000;\r\n width: 50%;\r\n bottom:0;\r\n left:50%;\r\n}\r\n\r\n.top-margin {\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.completed-checkbox {\r\n  height: 4rem !important;\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.description-textarea {\r\n  min-height: 13rem !important;\r\n}\r\n\r\n.todo-list-container {\r\n  margin-top: -4rem;\r\n}\r\n\r\n.todo-wrapper { \r\n  margin-top: 2rem;\r\n}"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<app-navigationbar></app-navigationbar>\n<h1>\n  {{title}}\n</h1>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"card card-outline-primary mb-3 text-center\"\n  *ngFor=\"let detail of details\"\n>\n    <div class=\"card-block\">\n        <blockquote class=\"card-blockquote\">\n            <p>{{ detail.description }}</p>\n            <footer>{{ detail.name }}</footer>\n        </blockquote>\n    </div>\n</div>"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf =\"slides.length >0\"\n  id=\"carousel-example-generic\"\n  class=\"carousel slide margin-carousel\"\n  data-ride=\"carousel\"\n>\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n        <li\n          *ngFor=\"let slide of slides; let i = index\"\n          data-target=\"#carousel-example-generic\"\n          [attr.data-slide-to]=\"i\"\n          [ngClass]=\"{'active': i == 0}\"\n        ></li>\n    </ol>\n\n  <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\t    <div\n\t      *ngFor=\"let data of slideData; let i = index\" \n\t      class=\"item item-container\"\n\t      [ngClass]=\"{'active': i == 0}\"\n\t    >\n\t        <!-- <img src=\"...\" alt=\"\"> -->\n\t        <div class=\"carousel-caption\">\n\t\t        <h3>{{ data.header }}</h3>\n\t\t        <p>{{ data.description }}</p>\n\t\t    </div>\n\t    </div>\n    </div>\n\n    <!-- Controls -->\n    <a\n      class=\"left carousel-control\"\n      href=\"#carousel-example-generic\"\n      role=\"button\"\n      data-slide=\"prev\"\n    >\n        <span\n          class=\"glyphicon glyphicon-chevron-left\"\n          aria-hidden=\"true\"\n        ></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a\n      class=\"right carousel-control\"\n      href=\"#carousel-example-generic\"\n      role=\"button\" data-slide=\"next\"\n    >\n        <span\n          class=\"glyphicon glyphicon-chevron-right\"\n          aria-hidden=\"true\"\n        ></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      Logged In Users\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"list-group\">\n        <button\n          type=\"button\"\n          class=\"list-group-item\"\n          *ngFor=\"let user of users\"\n          (click)=\"openChat(user)\"\n        >{{ user.userName }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"flash-success\">\n  <flash-messages></flash-messages>\n</div>"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<!-- caraousel starts-->\n<div>\n  <app-carousel-component\n    [slideCount]=\"2\"\n    [slideData]=\"slideData\"\n  ></app-carousel-component>\n</div>\n<!-- carousel ends -->\n<div class=\"nested-links-wrapper\">\n  <ul class=\"nav nav-pills\">\n    <li\n      role=\"presentation\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <a [routerLink]=\"['todo']\">TODO's</a>\n    </li>\n    <li\n      role=\"presentation\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <a [routerLink]=\"['chat']\">\n        Users\n      </a>\n    </li>\n  </ul>\t\n</div>\n<div class=\"router-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1 class=\"display-3\">Welcome to the site</h1>\n    <p class=\"lead\"> To start please register or login in the App.</p>\n    <hr class=\"my-4\">\n    <div>\n        <a\n          class=\"btn btn-primary\"\n          [routerLink]=\"['/register']\"\n          *ngIf=\"!registerService.loggedIn()\"\n        >Register</a>\n    </div>\n</div>\n\n<app-card-component [details] = \"strackTraceDetails\"></app-card-component>"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header header-margin\">Login</h2>\n<form novalidate [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\n  <div clas=\"form-group\">\n\t<label>UserName</label>\n\t<input\n\t  type=\"text\"\n\t  name=\"userName\"\n\t  formControlName=\"userName\"\n    class=\"form-control\"\n    [ngClass]=\"{'has-error': loginForm.get('userName').hasError('required') && formSubmitted}\"\n\t>\n  </div>\n  <div clas=\"form-group\">\n    <label>Password</label>\n\t<input\n\t  type=\"password\"\n\t  name=\"password\"\n\t  formControlName=\"password\"\n\t  class=\"form-control\"\n\t  [ngClass]=\"{'has-error': loginForm.get('password').hasError('required') && formSubmitted}\"\n\t>\n  </div>\n  <input\n    type=\"submit\"\n    class=\"btn btn-primary margin-btn\"\n    value=\"Submit\"\n    [disabled]=\"!loginForm.dirty\"\n  >\n</form>\n<div class=\"flash-error\">\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggle collapsed\"\n              data-toggle=\" collapse\"\n              data-target=\"#navbar-main\"\n              (click)=\"toggleState()\"\n            >\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Todo App</a>\n        </div>\n        <div\n          class=\"collapse navbar-collapse\"\n          id=\"navbar-main\"\n          [ngClass]=\"{ 'in': isIn  }\"\n        >\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/']\">Home</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li\n                  *ngIf=\"registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/profile']\">Profile</a>\n                </li>\n      \n                <li\n                  *ngIf=\"!registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/register']\">Register</a>\n                </li>\n                <li\n                  *ngIf=\"!registerService.loggedIn()\"\n                  [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact: true}\"\n                ><a [routerLink] =\"['/login']\">Login</a>\n                </li>\n                <li\n                  *ngIf=\"registerService.loggedIn()\"\n                ><a (click)=\"onLogout()\">Logout</a>\n                </li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>\n\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header header-margin\">Register</h2>\n<form novalidate  (submit)=\"onRegister()\" [formGroup]=\"registrationForm\">\n  <div clas=\"form-group\">\n\t  <label>Name</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"name\"\n      name=\"name\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('name').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n    <label>UserName</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"userName\"\n      name=\"userName\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('userName').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n\t  <label>Email</label>\n\t  <input\n      type=\"text\"\n      formControlName=\"email\"\n      name=\"email\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('email').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <div clas=\"form-group\">\n\t  <label>Password</label>\n\t  <input\n      type=\"password\"\n      formControlName=\"password\" \n      name=\"password\"\n      class=\"form-control\"\n      [ngClass]=\"{'has-error': registrationForm.get('password').hasError('required') && formSubmitted}\"\n    >\n  </div>\n  <input\n    type=\"submit\"\n    class=\"btn btn-primary margin-btn\"\n    value=\"Submit\"\n    [disabled]=\"!registrationForm.dirty\"\n  >\n</form>\n<div class=\"flash-error\">\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-md-3\" *ngIf=\"todolist\">\n    <div class=\"thumbnail thumbnail-height\">\n        <div class=\"caption\">\n\t          <span class=\"glyphicon glyphicon-pushpin\" aria-hidden=\"true\"></span>\n        \t  <span\n        \t    aria-hidden=\"true\"\n        \t    class=\"glyphicon glyphicon-edit todo-edit-icon\"\n        \t    (click)=\"editTodo(index)\"\n        \t  ></span>\n            <h3\n              class=\"todo-title\"\n              *ngIf=\"todolist.title.length < 20\"\n            >{{ todolist.title }}</h3>\n            <h3\n              class=\"todo-title\"\n              *ngIf=\"todolist.title.length > 20\"\n            >{{ todolist.title.substring(0, 20)}}...</h3>\n            <p *ngIf=\"todolist.description.length < 90\">\n              {{ todolist.description }}</p>\n            <p *ngIf=\"todolist.description.length > 90\">\n              {{ todolist.description.substring(0, 90) }}...\n            </p>\n            <p>Created: {{todolist.createdOn}}</p>\n            <button\n              class=\"btn btn-info btn-xs\"\n              type=\"button\"\n              *ngIf=\"todolist.description.length > 90\"\n              (click)=\"showDetails(index)\"\n            >Read More</button>\n            <span\n              class=\"glyphicon glyphicon-ok-circle todo-completed-icon\"\n              aria-hidden=\"true\"\n              *ngIf=\"todolist.completed\"\n            ></span>\n            <span\n              class=\"glyphicon glyphicon-remove-circle todo-not-completed-icon\"\n              aria-hidden=\"true\"\n              *ngIf=\"!todolist.completed\"\n            ></span>\n            <span\n              class=\"glyphicon glyphicon-trash todo-delete-icon\"\n              (click)=\"deleteTodo(index, todolist._id)\"\n            ></span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<div class=\"flash-success\">\n    <flash-messages></flash-messages>\n</div>\n<!-- if length of todo is 0 -->\n<div *ngIf=\"todos.length === 0\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"thumbnail\">\n                <div class=\"caption\">\n                    <h3>Welcome, {{ user['name'] }}</h3>\n                    <p>Seems like you are new to this site,\n                     start exploring by adding your first Todo.\n                    </p>\n                    <p>\n                        <button\n                          class=\"btn btn-primary\"\n                          type=\"button\"\n                          (click)=\"openAddTodoModal()\"\n                        >Add Todo</button>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- if length of todo is greater than 0 -->\n<div *ngIf=\"todos.length > 0\" class=\"todo-list-container\">\n    <div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"openAddTodoModal()\"\n        >Add Todo</button>\n        <button\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"sortTodoByDate()\"\n        >{{ sortOrder ? 'Oldest' : 'Newest' }}</button>\n    </div>\n    <div *ngFor=\"let row of rows; let i = index\" class=\"todo-wrapper\">\n        <div class=\"row\">\n        \t  <app-todo-list-item\n            \t*ngFor=\"let item of [0,1,2,3]\"\n            \t[todoIndex]=\"4*i + item\"\n            \t[todolist]=\"todos[4*i + item]\"\n            \t(onTodoEdit)=\"todoEdit($event)\"\n            \t(onTodoDelete)=\"todoDelete($event)\"\n              (onShowDetails)=\"todoShowDetails($event)\"\n        \t  ></app-todo-list-item>\n\t      </div>\n    </div>\n</div>  \n\n<!-- Modal -->\n<div\n  class=\"modal fade\"\n  id=\"myModal\" #myModal\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        ><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{ modalTitle }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group input-group-sm\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Title</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Title\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoTitle\"\n          >\n        </div>\n        <div class=\"input-group input-group-sm top-margin\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Description</span>\n          <textarea\n            class=\"form-control description-textarea\"\n            placeholder=\"Description\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoDescription\"\n          ></textarea>\n        </div>\n        <div class=\"input-group input-group-sm top-margin\">\n          <span class=\"input-group-addon\" id=\"sizing-addon1\">Completed</span>\n          <input\n            type=\"checkbox\"\n            class=\"form-control completed-checkbox\"\n            placeholder=\"Completed\"\n            aria-describedby=\"sizing-addon1\"\n            [(ngModel)]=\"todoCompleted\"\n          >\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          *ngIf=\"modalAction == 'edit'\"\n          (click)=\"saveEditTodo()\"\n        >Save changes</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          *ngIf=\"modalAction == 'add'\"\n          (click)=\"addTodo()\"\n        >Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- modal --> \n<div\n  class=\"modal fade\"\n  id=\"showDetailModal\" #showDetailModal\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"showDetailModalLabel\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" *ngIf=\"todos && todos[selectedIndex]\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        ><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"showDetailModalLabel\">ToDo Details</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"page-header\">\n          <h3>Title: <small>{{ todos[selectedIndex].title }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Description: <small>{{ todos[selectedIndex].description }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Creation Date: <small>{{ todos[selectedIndex].createdOn }}</small></h3>\n        </div>\n        <div class=\"page-header\">\n          <h3>Completed: <small>{{ todos[selectedIndex].completed }}</small></h3>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<!-- todo component -->\n<div *ngIf=\"userId\">\n  <app-todo-list [user]=\"user\"></app-todo-list>\n</div>\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ })

},[890]);
//# sourceMappingURL=main.bundle.map
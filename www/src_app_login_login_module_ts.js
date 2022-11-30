"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth/ */ 1577);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);

















let LoginPage = class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };

    if (!(0,_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.isPlatform)('capacitor')) {
      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__.GoogleAuth.initialize();
    }

    let country = 'Nigeria';
    this.CountryCode = '+234';
    this.numberT = '+234';
  }

  HideSplash() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__.SplashScreen.hide();
    })();
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(20)]
        })
      }); // this.router.navigateByUrl('details');
      // this.show();
    })();
  }

  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setOverlaysWebView({
        overlay: false
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  Hide() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setOverlaysWebView({
        overlay: true
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.form.valid) {
          _this2.form.markAllAsTouched();

          return;
        }

        console.log(_this2.form.value);
        _this2.approve2 = true;
        const response = yield _this2.auth.signInWithPhoneNumber(_this2.numberT + _this2.form.value.phone);
        _this2.approve2 = false;
        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__.OtpComponent,
          componentProps: {
            phone: _this2.form.value.phone,
            countryCode: _this2.numberT
          },
          swipeToClose: true
        };

        const modal = _this2.modalCtrl.create(options);

        (yield modal).present();
        const data = (yield modal).onWillDismiss();

        const buf = _this2.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            _this2.avatar.getUserProfile(user).subscribe( /*#__PURE__*/function () {
              var _ref2 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                if (!data) {
                  _this2.router.navigateByUrl('details');

                  _this2.overlay.hideLoader();
                } else {
                  _this2.router.navigateByUrl('tabs');

                  _this2.overlay.hideLoader();
                }
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            buf();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());

        console.log(data);
      } catch (e) {
        console.log(e);

        _this2.overlay.showAlert('Error', JSON.stringify(e));

        _this2.approve2 = false;
      }
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
}, {
  type: _angular_fire_auth___WEBPACK_IMPORTED_MODULE_15__.Auth
}, {
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_9__.AvatarService
}, {
  type: _services_overlay_service__WEBPACK_IMPORTED_MODULE_6__.OverlayService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1784:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4707)).then(m => new m.GoogleAuthWeb())
});



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer ion-row {\n  background: transparent;\n  display: block;\n}\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer ion-row ion-list ion-input, ion-footer ion-row ion-list ion-text {\n  font-size: 1.3rem;\n}\nion-footer ion-row ion-list .error {\n  font-size: 0.75em !important;\n}\nion-toolbar, ion-header {\n  height: 44px;\n}\nion-img {\n  margin: auto;\n  width: auto;\n}\nion-slides {\n  height: 440px;\n}\nion-select {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 30%;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 500;\n}\n.pm-awesome-divider {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0lPTklDJTIwUFJPSkVDVFMvbXlEcml2ZXIvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNFLHdCQUFBO0VDQUo7RURFRTtJQUNFLDZCQUFBO0VDQUo7QUFDRjtBREdFO0VBQ0U7SUFDRSx3QkFBQTtFQ0RKO0VER0U7SUFDRSw0QkFBQTtFQ0RKO0FBQ0Y7QURJQTtFQUNDLG9FQUFBO0FDRkQ7QURLQTtFQUNDLHFFQUFBO0FDRkQ7QURNSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0hSO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FEU2dCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ1BwQjtBRFdZO0VBQ0ksaUJBQUE7QUNUaEI7QURhUTtFQUNJLDRCQUFBO0FDWFo7QURpQkE7RUFFRSxZQUFBO0FDZkY7QURrQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsYUFBQTtBQ2ZGO0FEbUJBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNDLFVBQUE7RUFDRCx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2hCRjtBRG1CQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEb0JBO0VBRUUsdURBQUE7QUNsQkYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgICB9XG4gIH1cbiAgXG4uc2xpZGUtbGVmdCB7XG5cdGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcblx0YW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA4dmg7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCwgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXJ7XG4gXG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWltZ3tcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG5cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wbS1hd2Vzb21lLWRpdmlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbi5zaGFkb3ctdG9wXG57XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59XG4iLCJAa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG59XG4uc2xpZGUtbGVmdCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4uc2xpZGUtcmlnaHQge1xuICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXJvdyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMi41dmg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCBpb24taW5wdXQsIGlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wbS1hd2Vzb21lLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2hhZG93LXRvcCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-list lines=\"none\">\n  <ion-list-header class=\"ion-padding\" >\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>PANA DRIVER</h1>\n      <p>Drive and earn With Confidence and integrity</p></ion-label>\n</ion-list-header>\n    \n<ion-slides pager=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <ion-img src=\"../assets/imgs/main.svg\"></ion-img>\n  </ion-slide>\n  <ion-slide>\n    <ion-img src=\"../assets/imgs/main1.svg\"></ion-img>\n  </ion-slide>\n  <ion-slide>\n    <ion-img src=\"../assets/imgs/main2.svg\"></ion-img>\n  </ion-slide>\n</ion-slides>\n      \n      </ion-list>\n</ion-header>\n\n<ion-content class=\"ion-no-border\">\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\n  \n  \n  <ion-row class=\"ion-no-padding\">\n    <ion-list class=\"ion-no-padding\">\n     \n      <ion-item-group class=\"ion-margin-horizontal\">\n        <form [formGroup]=\"form\" class=\"ion-padding\"> \n\n          <div id=\"sign-in-button\"></div>\n\n          <div class=\"ion-margin-vertical\">\n            \n            \n            <ion-item >\n                 <!-- <ion-label color=\"primary\"><h1>{{CountryCode}}</h1></ion-label> -->\n                <ion-select slot=\"start\" placeholder=\"{{CountryCode}}\" (ionChange)=\"countryCodeChange($event)\">\n                  <ion-select-option  *ngFor=\"let country of CountryJson\" [value]='country.dialCode'>\n                      {{country.dialCode}} {{country.name}}\n                  </ion-select-option>\n                </ion-select>\n           \n\n              <ion-input \n                formControlName=\"phone\" \n                placeholder=\"Mobile Number\" \n                type=\"tel\"\n                clearInput\n                minlength=\"0\"\n                (ionFocus)=\"Show()\"\n                (ionBlur)=\"Hide()\"\n                maxlength=\"20\">\n              </ion-input>\n            </ion-item>\n\n\n            <ion-text class=\"ion-text-center\" *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">\n              <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('required')\" color=\"danger\">\n                * Please enter the Mobile Number\n              </ion-text>\n              <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('minlength') \n                && !form.get('phone').hasError('required')\" color=\"danger\">\n                * Please enter a valid Mobile Number\n              </ion-text>\n            </ion-text>\n              \n          </div>\n\n          \n              <ion-button  shape='round' size=\"large\" type=\"submit\" [disabled]=\"!form.get('phone').valid\" color=\"primary\" (click)=\"signIn()\" expand=\"block\">\n                <ion-label *ngIf=\"!approve2\">Continue</ion-label>\n                <ion-icon *ngIf=\"!approve2\" color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                <ion-progress-bar *ngIf=\"approve2\" color='light' type=\"indeterminate\"></ion-progress-bar>\n              </ion-button>\n          \n\n        </form>\n\n\n        <!-- <ion-label class=\"pm-awesome-divider\" color='medium' data-label=\"or\">OR</ion-label>\n\n       \n\n        <ion-row  class=\"ion-no-padding\">\n          <ion-col>\n            <ion-button size=\"large\" type=\"submit\" color=\"primary\" (click)=\"loginWithGoogle()\" expand=\"block\">\n              <ion-icon *ngIf=\"!approve\" color='light' slot=\"icon-only\" name=\"logo-google\"></ion-icon>\n              <ion-label *ngIf=\"!approve\">oogle</ion-label> \n              <ion-progress-bar *ngIf=\"approve\"color='light' type=\"indeterminate\"></ion-progress-bar>\n            </ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-item-group>\n    </ion-list>\n  </ion-row>\n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.html?ngResource */ 6366);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ 4241);













let DetailsPage = class DetailsPage {
  constructor(overlay, authy, auth, avatar, router) {
    this.overlay = overlay;
    this.authy = authy;
    this.auth = auth;
    this.avatar = avatar;
    this.router = router;
    this.selected = 'Select Car Type';
    this.imageURl = '';
    this.licenseURl = '';
    this.licenseImage = '';
    this.profileImage = '';
  }

  ngOnInit() {
    this.images = [];
    this.texts = [];
    this.subscription = this.avatar.getCartypes().subscribe(d => {
      console.log(d);
      this.cartypes = d;
      this.subscription.unsubscribe();
    });
    this.subscription2 = this.avatar.getDocuments().subscribe(d => {
      console.log(d);
      this.docs = d;
      this.subscription2.unsubscribe();
    });
    this.avatar.getDocs().subscribe(d => {
      console.log(d);
      this.addDocs = d;
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      car: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      plate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      })
    });
  }

  chooseCarType(even) {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(even.detail.value);
      _this.currentcar = even.detail.value.name;
    })();
  }

  changeImage(g) {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
          quality: 20,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Prompt // Camera, Photos or Prompt!

        });

        for (let index = 0; index < _this2.docs.length; index++) {
          const element = _this2.docs[index];
          console.log(element);

          if (element.name == g.name) {
            console.log(element);
            _this2.docs[index].image = image.dataUrl;

            _this2.overlay.showLoader('');

            const bol = yield _this2.avatar.createDocument(g.name, g.type, g.id, image.dataUrl, '');
            console.log(bol);

            _this2.overlay.hideLoader();
          }
        }
      } catch (e) {
        _this2.overlay.showAlert('Error', e);
      }
    })();
  }

  changeProfile(g) {
    var _this3 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
          quality: 20,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Prompt // Camera, Photos or Prompt!

        });
        _this3.imageURl = image.dataUrl;
      } catch (e) {
        _this3.overlay.showAlert('Error', e);
      }
    })();
  }

  chooseText(e, value) {
    var _this4 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.avatar.createDocument(e.name, e.type, e.id, '', value.detail);
    })();
  }

  signIn() {
    var _this5 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.checkPermissions();
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();

        if (_this5.currentcar && _this5.form.value.fullname && _this5.form.value.lastname && _this5.form.value.email && _this5.form.value.car && _this5.form.value.plate && _this5.imageURl && _this5.addDocs) {
          _this5.approve2 = true;
          yield _this5.avatar.CreateNewDriver(coordinates, _this5.form.value.fullname + '' + _this5.form.value.lastname, _this5.form.value.email, _this5.authy.currentUser.phoneNumber, _this5.form.value.car, _this5.currentcar, _this5.form.value.plate, _this5.imageURl, _this5.licenseURl);
          yield _this5.avatar.createCard('Cash', 0, 'cash', 'None');
          _this5.approve2 = false;

          _this5.router.navigateByUrl('waiting');
        } else {
          _this5.overlay.showAlert('Incomplete', "Complete the form");
        }
      } catch (e) {
        _this5.overlay.showAlert('Error', e);
      }
    })();
  }

};

DetailsPage.ctorParameters = () => [{
  type: src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__.OverlayService
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-details',
  template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsPage);


/***/ }),

/***/ 791:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  margin: auto;\n  width: auto;\n}\n\nion-avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vSU9OSUMlMjBQUk9KRUNUUy9teURyaXZlci9zcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURJRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FETUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0FDSEoiLCJmaWxlIjoiZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWltZ3tcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgXG4gIH1cbiAgXG4gIC5wcmV2aWV3IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mYWxsYmFjayB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gXG4gIFxuICAjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cblxuXG4gIFxuICAiLCJpb24taW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cblxuLnByZXZpZXcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 6366:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-text-center\">\n \n    <ion-title> Complete Your Profile </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-list class=\"ion-padding\">\n   \n    <ion-item-group>\n   \n      <form [formGroup]=\"form\">\n\n        <div>\n          <ion-list-header>\n           \n            <ion-label color=\"primary\" class=\"ion-text-center\">\n              <h1>Personal Information</h1>\n              </ion-label>\n             </ion-list-header>\n\n\n             <div class=\"preview\">\n\n              <ion-avatar (click)=\"changeProfile()\">\n                <img *ngIf=\"imageURl; else placeholder_avatar;\" [src]=\"imageURl\" />\n          \n                <ng-template #placeholder_avatar>\n                  <div class=\"fallback\">\n                    <p>Profile Picture</p>\n                  </div>\n                </ng-template>\n              </ion-avatar>\n              \n            </div>\n\n          <ion-item class=\"ion-margin\">\n\n\n     \n      \n\n\n            <ion-input \n              formControlName=\"fullname\" \n              placeholder=\"First Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n\n            <ion-input \n              formControlName=\"lastname\" \n              placeholder=\"Last Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n            <ion-input \n            formControlName=\"email\" \n            placeholder=\"Your Email\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n          </ion-item>\n\n        </div>\n\n\n        <div >\n          <ion-list-header class=\"ion-padding-top\" >\n           \n            <ion-label color=\"primary\" class=\"ion-text-center\">\n             \n              <h1>Car Information</h1>\n              </ion-label>\n             </ion-list-header>\n          <ion-item class=\"ion-margin\">\n\n\n            <ion-input \n              formControlName=\"car\" \n              placeholder=\"Car Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n            <ion-select placeholder=\"{{selected}}\" [value]=\"selected\" (ionChange)=\"chooseCarType($event)\">\n            <ion-select-option *ngFor=\"let card of cartypes\" [value]=\"card\">{{card.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n\n          <ion-item class=\"ion-margin\">\n            <ion-input \n            formControlName=\"plate\" \n            placeholder=\"Car Plate Number\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n          </ion-item>\n\n        </div>\n\n       \n\n\n\n      </form>\n\n \n\n      <ion-list lines=\"none\">\n        <ion-list-header >\n         \n          <ion-label color=\"primary\" class=\"ion-text-center\">\n            <h1>Documents</h1>\n            </ion-label>\n           </ion-list-header>\n\n\n           <div *ngFor=\"let card of docs\">\n\n            <div *ngIf=\"card.type == 'image'\" class=\"preview\">\n\n              <ion-avatar (click)=\"changeImage(card)\">\n                <img *ngIf=\"card.image; else placeholder_avatar;\" [src]=\"card.image\" />\n          \n                <ng-template #placeholder_avatar>\n                  <div class=\"fallback\">\n                    <p>{{card.name}}</p>\n                  </div>\n                </ng-template>\n              </ion-avatar>\n              \n            </div>\n\n            <ion-input (ionChange)=\"chooseText(card, $event)\" *ngIf=\"card.type == 'text'\"\n            placeholder=\"{{card.name}}\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n\n           </div>\n          </ion-list>\n\n\n      <ion-button shape=\"round\" size=\"large\" type=\"submit\" [disabled]=\"!form.valid\" color=\"primary\" (click)=\"signIn()\" expand=\"block\">\n        <ion-label *ngIf=\"!approve2\">Continue</ion-label>\n        <ion-icon *ngIf=\"!approve2\" color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        <ion-progress-bar *ngIf=\"approve2\" color='light' type=\"indeterminate\"></ion-progress-bar>\n      </ion-button>\n\n    </ion-item-group>\n\n\n\n\n      </ion-list>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map
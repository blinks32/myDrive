"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_waiting_waiting_module_ts"],{

/***/ 8745:
/*!*********************************************************!*\
  !*** ./src/app/pages/waiting/waiting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingPageRoutingModule": () => (/* binding */ WaitingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _waiting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting.page */ 3876);




const routes = [
    {
        path: '',
        component: _waiting_page__WEBPACK_IMPORTED_MODULE_0__.WaitingPage
    }
];
let WaitingPageRoutingModule = class WaitingPageRoutingModule {
};
WaitingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WaitingPageRoutingModule);



/***/ }),

/***/ 3849:
/*!*************************************************!*\
  !*** ./src/app/pages/waiting/waiting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingPageModule": () => (/* binding */ WaitingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _waiting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-routing.module */ 8745);
/* harmony import */ var _waiting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting.page */ 3876);







let WaitingPageModule = class WaitingPageModule {
};
WaitingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _waiting_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitingPageRoutingModule
        ],
        declarations: [_waiting_page__WEBPACK_IMPORTED_MODULE_1__.WaitingPage]
    })
], WaitingPageModule);



/***/ }),

/***/ 3876:
/*!***********************************************!*\
  !*** ./src/app/pages/waiting/waiting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingPage": () => (/* binding */ WaitingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _waiting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting.page.html?ngResource */ 5462);
/* harmony import */ var _waiting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting.page.scss?ngResource */ 1694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/app */ 3253);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let WaitingPage = class WaitingPage {
    constructor(platform) {
        this.platform = platform;
    }
    ngOnInit() {
        this.platform.backButton.subscribeWithPriority(-1, () => {
            if (!this.routerOutlet.canGoBack()) {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.exitApp();
            }
        });
    }
    Exit() {
        this.approve = true;
        _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.exitApp();
    }
};
WaitingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
WaitingPage.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }]
};
WaitingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-waiting',
        template: _waiting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_waiting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WaitingPage);



/***/ }),

/***/ 1694:
/*!************************************************************!*\
  !*** ./src/app/pages/waiting/waiting.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWl0aW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5462:
/*!************************************************************!*\
  !*** ./src/app/pages/waiting/waiting.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title> Review </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-img src=\"../assets/imgs/waiting.svg\"></ion-img>\n\n  <ion-list-header style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>Account Under Review...</h1>\n      <p>Please be patient while we review your documents</p>\n    </ion-label>\n</ion-list-header>\n\n<ion-button  size=\"large\" shape=\"round\" type=\"submit\" color=\"primary\" (click)=\"Exit()\" expand=\"block\">\n  <ion-label *ngIf=\"!approve\">Exit</ion-label> \n  <ion-progress-bar *ngIf=\"approve\"color='light' type=\"indeterminate\"></ion-progress-bar>\n</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_waiting_waiting_module_ts.js.map
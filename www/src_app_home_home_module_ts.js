"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/app */ 3253);









 // import { Marker } from '@capacitor/google-maps';






let HomePage = class HomePage {
  constructor(auth, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl) {
    this.auth = auth;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.profile = null;
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = 'Loading...';
    this.price = 0;
    this.current_Request_Number = -1;
    this.approve = true;
    this.acceptedState = false;
  } //start the scene


  ngOnInit() {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.EnterBookingStage();

      yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.checkPermissions();
      const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });
      _this.coordinates = coordinates;

      _this.platform.backButton.subscribeWithPriority(-1, () => {
        if (!_this.routerOutlet.canGoBack()) {
          _capacitor_app__WEBPACK_IMPORTED_MODULE_8__.App.exitApp();
        }
      });

      yield _this.map.createMap(_this.mapRef.nativeElement, coordinates);
      _this.mapy = true;
      _this.LatLng = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      _this.D_LatLng = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };

      const sub = _this.auth.onAuthStateChanged( /*#__PURE__*/function () {
        var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          _this.database.getEarnings(user.uid).subscribe( /*#__PURE__*/function () {
            var _ref2 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
              _this.earnings = d.Earnings;
              _this.currentState = d.onlineState;
              console.log(_this.currentState);
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }()); //get all the list of cards


          _this.database.getCards().subscribe( /*#__PURE__*/function () {
            var _ref3 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
              _this.cards = d;
              _this.approve = false; // await this.database.deleDriverFromRequest(this.database.profile.Driver_id)

              _this.cards.forEach(element => {
                console.log(element);

                if (element.selected == true) {
                  _this.selected = element;
                  _this.selectedCard = element.name;
                  console.log(_this.selectedCard);
                }
              });
            });

            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }()); // timer(10000).subscribe(async ()=>{
          //   await this.database.RequestRideWithRiderDetails(this.LatLng, this.D_LatLng, user.uid);
          //   this.startTimer(10);
          //  })
          ///Listen for requests from riders


          if (user) {
            const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_this.firestore, "Request", user.uid), /*#__PURE__*/function () {
              var _ref4 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
                _this.riderInfo = doc.data();

                if (_this.riderInfo != undefined) {
                  console.log(_this.riderInfo);

                  if (_this.riderInfo.cancel == false) {
                    if (!_this.acceptedState) {
                      if (_this.riderInfo.countDown <= 1) {
                        _this.ClearRide();

                        _this.FCOUNT = true;
                      } else {
                        _this.EnterConfirmStage();

                        if (_this.riderInfo.cash == true) _this.cash = true;

                        _this.getDistanceandDirections(doc.data());

                        _this.map.newMap.enableCurrentLocation(false);
                      }
                    } else {
                      if (_this.riderInfo.start == true && _this.riderInfo.Driver_car) {
                        _this.EnterDrivingToDestinationStage();

                        _this.getDistanceandDirections(doc.data());
                      } else if (_this.riderInfo.stop == true && _this.riderInfo.Driver_car) {
                        _this.EnterBookingStage();

                        _this.ReturnHome();

                        _this.EndRide(doc.data());
                      } else {
                        if (_this.riderInfo.Driver_car) {
                          _this.EnterTrackingStage();

                          _this.getDistanceandDirections(doc.data());
                        }
                      }
                    }
                  } else {
                    if (!_this.driverCleared && !_this.FCOUNT) {
                      _this.ClearRide();

                      _this.overlay.showAlert('Cancelled', 'Rider cancelled');
                    }

                    if (_this.FCOUNT) {
                      _this.overlay.showAlert('Lost', 'You Lost the Ride');

                      yield _this.database.deleDriverFromRequest(_this.auth.currentUser.uid);
                    }
                  }
                }
              });

              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          } else {}

          sub();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this.actualLocation = _this.map.actualLocation;
      _this.locationAddress = _this.map.locationAddress;

      _this.map.newMap.setOnCameraIdleListener(g => {
        _this.ngZone.run(() => {
          _this.showResetLocationButton = true;
        });
      });
    })();
  }

  EndRide(user) {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let Drivershare = 80 / 100 * user.price;
      let amt = user.price - Drivershare;

      _this2.overlay.showLoader('Ending Ride..');

      yield _this2.database.createHistory(user);
      yield _this2.database.deleDriverFromRequest(_this2.auth.currentUser.uid);
      yield _this2.database.updateEarnings(amt + _this2.earnings);

      _this2.SwitchOn();

      _this2.overlay.hideLoader();
    })();
  }

  startTimer(sec) {
    var _this3 = this;

    let nop = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(1000).subscribe( /*#__PURE__*/(0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.database.UpdateCountDown(sec);
      sec--;

      if (sec == 0) {
        nop.unsubscribe();
      }
    }));
  }

  ionViewDidLeave() {// this.map.newMap.close();
  }

  chooseCard(even) {
    var _this4 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(even);

      _this4.overlay.showLoader('Selcting Card..');

      yield _this4.database.updateCArd(_this4.selected.name, _this4.selected.number, _this4.selected.type, _this4.selected.id, false);

      _this4.cards.forEach( /*#__PURE__*/function () {
        var _ref6 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
          console.log(element);

          if (element.name == even) {
            yield _this4.database.updateCArd(element.name, element.number, element.type, element.id, true);

            _this4.overlay.hideLoader();
          }
        });

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }

  AcceptRide() {
    var _this5 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this5.acceptedState = true;

        if (_this5.distanceText) {
          yield _this5.overlay.showLoader('');
          yield _this5.database.PushDriverToRequest(_this5.coordinates, _this5.database.profile.Driver_name, _this5.database.profile.Driver_email, _this5.database.profile.Driver_phone, _this5.database.profile.Driver_car, _this5.database.profile.Driver_cartype, _this5.database.profile.Driver_plate, _this5.database.profile.Driver_imgUrl, _this5.database.profile.Document);

          _this5.EnterTrackingStage();

          _this5.overlay.hideLoader();
        }
      } catch (e) {
        _this5.overlay.showAlert('Error', e);
      }
    })();
  } //reset the map to the user location view


  resetLocation() {
    var _this6 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this6.LatLng);
      yield _this6.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this6.LatLng
      });
      _this6.showResetLocationButton = false;
    })();
  }

  PickUp() {
    var _this7 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.overlay.showLoader('Picking Up..');

      yield _this7.database.PickRider();

      _this7.overlay.hideLoader();
    })();
  }

  DropOff() {
    var _this8 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.database.EndRide();
    })();
  }

  Navigate() {
    var _this9 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.platform.is('android')) {
        // tslint:disable-next-line: max-line-length
        window.open('geo://' + _this9.LatLng.lat + ',' + _this9.LatLng.lng + '?q=' + _this9.D_LatLng.lat + ',' + _this9.D_LatLng.lng + '(' + (yield _this9.geocode.getAddress(_this9.LatLng.lat, _this9.LatLng.lng)) + ')', '_system');
      }

      if (_this9.platform.is('ios')) {
        // tslint:disable-next-line: max-line-length
        window.open('maps://?q=' + (yield _this9.geocode.getAddress(_this9.LatLng.lat, _this9.LatLng.lng)) + '&saddr=' + _this9.LatLng.lat + ',' + _this9.LatLng.lng + '&daddr=' + _this9.D_LatLng.lat + ',' + _this9.D_LatLng.lng, '_system');
      }

      if (_this9.platform.is('mobileweb')) {
        // tslint:disable-next-line: max-line-length
        window.open('geo://' + _this9.LatLng.lat + ',' + _this9.LatLng.lng + '?q=' + _this9.D_LatLng.lat + ',' + _this9.D_LatLng.lng + '(' + (yield _this9.geocode.getAddress(_this9.LatLng.lat, _this9.LatLng.lng)) + ')', '_system');
      }
    })();
  }

  SwitchOff() {
    var _this10 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.approve = true;
      yield _this10.database.updateOnlineState(false);
      _this10.approve = false;
      _this10.currentState = false;
    })();
  }

  SwitchOn() {
    var _this11 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.approve = true;
      yield _this11.database.updateOnlineState(true);
      _this11.approve = false;
      _this11.currentState = true;
    })();
  } ///get the distance and directions to destination


  getDistanceandDirections(_d) {
    var _this12 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this12.canStart) {
        _this12.canStart = true;
        var origin1 = new google.maps.LatLng(_this12.LatLng.lat, _this12.LatLng.lng);
        var origin2 = new google.maps.LatLng(_d.Loc_lat, _d.Loc_lng);
        _this12.D_LatLng = {
          lat: _d.Loc_lat,
          lng: _d.Loc_lng
        };
        var request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };

        _this12.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref7 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            console.log(status, response);

            if (status == 'OK') {
              _this12.direction = response;
              _this12.canStart = false;
              _this12.distance = response.routes[0].legs[0].distance.value;
              _this12.distanceText = response.routes[0].legs[0].distance.text;
              _this12.durationText = response.routes[0].legs[0].duration.text;
              _this12.bounds = response.routes[0].bounds;
              yield _this12.createAndAddMarkers(_this12.LatLng, _this12.D_LatLng, _this12.bounds);
            }
          });

          return function (_x6, _x7) {
            return _ref7.apply(this, arguments);
          };
        }());
      }
    })();
  } //Return to Map page


  ReturnHome() {
    var _this13 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.canStart = false;
      _this13.distanceText = null;
      _this13.durationText = null;
      _this13.FCOUNT = false; // this.driverCleared = false;

      _this13.riderInfo = null;

      if (_this13.marker1) {
        yield _this13.map.newMap.removeMarker(_this13.marker1);
        _this13.marker1 = null;
        console.log('removed ', _this13.marker1);
      }

      if (_this13.marker2) {
        yield _this13.map.newMap.removeMarker(_this13.marker2);
        _this13.marker2 = null;
        console.log('removed ', _this13.marker2);
      }

      _this13.EnterBookingStage();

      yield _this13.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this13.LatLng
      });
    })();
  } //Cancel the Current Ride Request.....


  CancelRide() {
    var _this14 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.driverCleared = true;

      _this14.overlay.showLoader('Cancelling Ride..');

      yield _this14.database.RejectRider();
      yield _this14.database.deleDriverFromRequest(_this14.auth.currentUser.uid);

      _this14.overlay.hideLoader();

      _this14.overlay.showAlert('Cancelled', 'You cancelled');

      _this14.ReturnHome();
    })();
  }

  ClearRide() {
    var _this15 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.overlay.showLoader('Clearing Ride..');

      yield _this15.database.RejectRider();
      yield _this15.database.deleDriverFromRequest(_this15.auth.currentUser.uid);

      _this15.overlay.hideLoader();

      _this15.ReturnHome();
    })();
  } ///create markers and possition them in the view of the user


  createAndAddMarkers(loc, des, bounds) {
    var _this16 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this16.marker1) {
        _this16.marker1 = yield _this16.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
          title: 'My 2'
        });
      } else {//this.marker1.coordinate(loc);
      }

      if (!_this16.marker2) {
        _this16.marker2 = yield _this16.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'https://i.ibb.co/bWx9V64/favourite.png',
          title: 'My 2'
        });
      } else {//this.marker2.coordinate(des);
      }

      const locs = [{
        geoCode: {
          latitude: loc.lat,
          longitude: loc.lng
        }
      }, {
        geoCode: {
          latitude: des.lat,
          longitude: des.lng
        }
      }];
      yield _this16.map.newMap.setPadding({
        top: 300,
        left: 150,
        right: 150,
        bottom: 1200
      });
      let go = {
        lat: (yield _this16.map.CalculateCenter(locs)).latitude,
        lng: (yield _this16.map.CalculateCenter(locs)).longitude
      };
      let mapDim = {
        height: _this16.mapRef.nativeElement.offsetHeight / 2,
        width: _this16.mapRef.nativeElement.offsetWidth
      };
      yield _this16.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: yield _this16.map.getBoundsZoomLevel(bounds, mapDim),
        coordinate: go,
        bearing: 0
      });
    })();
  } //Timer Animation


  EnterBookingStage() {
    this.bookingStage = true;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterConfirmStage() {
    this.bookingStage = false;
    this.confirmStage = true;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterSearchingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterNoDriverStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterTrackingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = true;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterDrivingToDestinationStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = true;
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.Auth
}, {
  type: _services_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.Firestore
}, {
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__.AvatarService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone
}, {
  type: _services_geocode_service__WEBPACK_IMPORTED_MODULE_5__.GeocodeService
}, {
  type: _services_overlay_service__WEBPACK_IMPORTED_MODULE_4__.OverlayService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}];

HomePage.propDecorators = {
  mapRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['map']
  }],
  mapElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['mapElement']
  }],
  routerOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 8793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);






let GeocodeService = class GeocodeService {
  constructor(client, overlay) {
    this.client = client;
    this.overlay = overlay;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
  } //convert the lat and lng numbers to an actual address


  getAddress(lat, lng) {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const address = yield _this.client.reverseGeocode({
          params: {
            latlng: {
              lat: lat,
              lng: lng
            },
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
          },
          timeout: 5000 // milliseconds

        });
        console.log(address);
        return address;
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);
      }
    })();
  } //convert the address to lat and lng


  getLatLng(addressi) {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const latlng = yield _this2.client.geocode({
          params: {
            address: addressi,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
          },
          timeout: 5000 // milliseconds

        });
        return latlng;
      } catch (e) {
        _this2.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  } //Get the distance between the origin and destination


  getDirections(from, to) {
    var _this3 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {} catch (e) {
        _this3.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  }

};

GeocodeService.ctorParameters = () => [{
  type: _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__.Client
}, {
  type: _overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService
}];

GeocodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], GeocodeService);


/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geocode.service */ 8793);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.service */ 5596);







let MapService = class MapService {
  constructor(overlay, geocode) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.locationAddress = 'Loading..';
  } //create google maps get the map movement listener


  createMap(ref, coords) {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.newMap = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: 5.5122138,
              lng: 7.4919135
            },
            zoom: 8
          }
        });
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        };

        _this.newMap.enableTrafficLayer(true);

        yield _this.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        });
        const address = yield _this.geocode.getAddress(_this.LatLng.lat, _this.LatLng.lng);
        _this.actualLocation = address.data.results[0].formatted_address;
        _this.locationAddress = address.data.results[1].address_components[0].long_name + ' ' + address.data.results[1].address_components[1].long_name;

        _this.newMap.enableCurrentLocation(true);
      } catch (e) {
        _this.overlay.showAlert('Error', e);
      }
    })();
  }

  CalculateCenter(locations) {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var latitude = 0,
          longitude = 0;

      for (var location of locations) {
        longitude += location.geoCode.longitude;
        latitude += location.geoCode.latitude;
      }

      latitude = latitude / locations.length;
      longitude = longitude / locations.length;
      yield latitude, longitude;
      return {
        latitude,
        longitude
      };
    })();
  }

  getBoundsZoomLevel(bounds, mapDim) {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var WORLD_DIM = {
        height: 256,
        width: 256
      };
      var ZOOM_MAX = 21;

      function latRad(lat) {
        var sin = Math.sin(lat * Math.PI / 180);
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
      }

      function zoom(mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
      }

      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
      var lngDiff = ne.lng() - sw.lng();
      var lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
      var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
      var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
      yield Math.min(latZoom, lngZoom, ZOOM_MAX);
      return Math.min(latZoom, lngZoom, ZOOM_MAX);
    })();
  }

};

MapService.ctorParameters = () => [{
  type: _overlay_service__WEBPACK_IMPORTED_MODULE_4__.OverlayService
}, {
  type: _geocode_service__WEBPACK_IMPORTED_MODULE_3__.GeocodeService
}];

MapService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], MapService);


/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation */ 1819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
      }

      yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.create(options);

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }

  static getElementBounds(element) {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();

        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }

              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @returns void
   */


  enableClustering() {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableClustering({
        id: _this.id
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.disableClustering({
        id: _this2.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this3 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarker({
        id: _this3.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this4 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarkers({
        id: _this4.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this5 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarker({
        id: _this5.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this6 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarkers({
        id: _this6.id,
        markerIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this7 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this7.disableScrolling();
      }

      _this7.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.destroy({
        id: _this7.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this8 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setCamera({
        id: _this8.id,
        config
      });
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this9 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setMapType({
        id: _this9.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this10 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this10.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this11 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this11.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this12 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this12.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this13 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this13.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this14 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setPadding({
        id: _this14.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this15 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.getMapBounds({
        id: _this15.id
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this16 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.onCameraIdleListener) {
        _this16.onCameraIdleListener.remove();
      }

      if (callback) {
        _this16.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraIdle', _this16.generateCallback(callback));
      } else {
        _this16.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this17 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.onBoundsChangedListener) {
        _this17.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this17.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this17.generateCallback(callback));
      } else {
        _this17.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this18 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.onCameraMoveStartedListener) {
        _this18.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this18.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this18.generateCallback(callback));
      } else {
        _this18.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this19 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this19.onClusterClickListener) {
        _this19.onClusterClickListener.remove();
      }

      if (callback) {
        _this19.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterClick', _this19.generateCallback(callback));
      } else {
        _this19.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this20 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this20.onClusterInfoWindowClickListener) {
        _this20.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this20.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this20.generateCallback(callback));
      } else {
        _this20.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this21 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this21.onInfoWindowClickListener) {
        _this21.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this21.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this21.generateCallback(callback));
      } else {
        _this21.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this22 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.onMapClickListener) {
        _this22.onMapClickListener.remove();
      }

      if (callback) {
        _this22.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapClick', _this22.generateCallback(callback));
      } else {
        _this22.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this23 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.onMarkerClickListener) {
        _this23.onMarkerClickListener.remove();
      }

      if (callback) {
        _this23.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerClick', _this23.generateCallback(callback));
      } else {
        _this23.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this24 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this24.onMarkerDragStartListener) {
        _this24.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this24.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this24.generateCallback(callback));
      } else {
        _this24.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this25 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this25.onMarkerDragListener) {
        _this25.onMarkerDragListener.remove();
      }

      if (callback) {
        _this25.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this25.generateCallback(callback));
      } else {
        _this25.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this26 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onMarkerDragEndListener) {
        _this26.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this26.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this26.generateCallback(callback));
      } else {
        _this26.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this27 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onMyLocationButtonClickListener) {
        _this27.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this27.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this27.generateCallback(callback));
      } else {
        _this27.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this28 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onMyLocationClickListener) {
        _this28.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this28.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this28.generateCallback(callback));
      } else {
        _this28.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this29 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myDriver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onBoundsChangedListener) {
        _this29.onBoundsChangedListener.remove();

        _this29.onBoundsChangedListener = undefined;
      }

      if (_this29.onCameraIdleListener) {
        _this29.onCameraIdleListener.remove();

        _this29.onCameraIdleListener = undefined;
      }

      if (_this29.onCameraMoveStartedListener) {
        _this29.onCameraMoveStartedListener.remove();

        _this29.onCameraMoveStartedListener = undefined;
      }

      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();

        _this29.onClusterClickListener = undefined;
      }

      if (_this29.onClusterInfoWindowClickListener) {
        _this29.onClusterInfoWindowClickListener.remove();

        _this29.onClusterInfoWindowClickListener = undefined;
      }

      if (_this29.onInfoWindowClickListener) {
        _this29.onInfoWindowClickListener.remove();

        _this29.onInfoWindowClickListener = undefined;
      }

      if (_this29.onMapClickListener) {
        _this29.onMapClickListener.remove();

        _this29.onMapClickListener = undefined;
      }

      if (_this29.onMarkerClickListener) {
        _this29.onMarkerClickListener.remove();

        _this29.onMarkerClickListener = undefined;
      }

      if (_this29.onMyLocationButtonClickListener) {
        _this29.onMyLocationButtonClickListener.remove();

        _this29.onMyLocationButtonClickListener = undefined;
      }

      if (_this29.onMyLocationClickListener) {
        _this29.onMyLocationClickListener.remove();

        _this29.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "capacitor-google-maps {\n  display: inline-block;\n  width: 100%;\n  height: 100vh;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-bottom {\n  100% {\n    transform: translateY(50%);\n  }\n  0% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-bottom {\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-top {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-content {\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer ion-row {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\n\nion-footer ion-row ion-list {\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer ion-fab {\n  margin-top: -40px;\n}\n\nion-footer ion-list .payment {\n  font-size: 1.1em;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light);\n}\n\nion-footer ion-list .payment ion-item {\n  color: var(--ion-color-dark);\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: var(--ion-color-light);\n}\n\nion-footer ion-list .payment ion-item p {\n  color: var(--ion-color-dark);\n}\n\nion-skeleton-text {\n  --background: rgba(188, 232, 198, 0.962);\n}\n\n.accept {\n  font-size: 1.3em;\n  padding: 12px;\n}\n\n.unbook {\n  background: #0a602d;\n}\n\n.book {\n  background: var(--ion-color-success);\n}\n\n.center-button {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.acceptTimer {\n  font-size: 1.3em;\n  color: aliceblue;\n  margin-right: auto;\n  background: var(--ion-color-danger);\n  padding: 12px;\n  border-radius: 100px;\n  border: 1.3px solid aliceblue;\n}\n\n.centerElem {\n  justify-content: center;\n  align-items: center;\n}\n\n.pickMe {\n  height: 300px;\n}\n\n.price {\n  margin-left: auto;\n  flex: 0.7;\n}\n\n.shadow-top {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.top_bar {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vSU9OSUMlMjBQUk9KRUNUUy9teURyaXZlci9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FESUE7RUFDRTtJQUNFLDJCQUFBO0VDREY7RURHQTtJQUNFLHlCQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsMEJBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtBQUNGOztBRE1BO0VBQ0Msc0VBQUE7QUNKRDs7QURPQTtFQUNDLG1FQUFBO0FDSkQ7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQ0FBQTtBQ0xGOztBRFdBO0VBQWMseUJBQUE7RUFBMkIsZ0JBQUE7QUNOekM7O0FEVUU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFFJO0VBQ0ksbUJBQUE7QUNOUjs7QURRSTtFQUNJLDRCQUFBO0FDTlI7O0FEU1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDUGhCOztBRFlFO0VBQ0UsaUJBQUE7QUNWSjs7QURhSztFQUNDLGdCQUFBO0VBRUMsNEJBQUE7RUFDQSxvQ0FBQTtBQ1pQOztBRGFPO0VBQ0MsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDWFI7O0FEWVE7RUFDRSw0QkFBQTtBQ1ZWOztBRG9CQTtFQUNFLHdDQUFBO0FDakJGOztBRG9CQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ2pCRjs7QURvQkE7RUFDRSxtQkFBQTtBQ2pCRjs7QURxQkE7RUFDRSxvQ0FBQTtBQ2xCRjs7QURzQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDbkJGOztBRHVCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNwQkY7O0FEdUJBO0VBRUUsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxhQUFBO0FDckJGOztBRHdCQTtFQUVFLGlCQUFBO0VBQ0EsU0FBQTtBQ3RCRjs7QUR5QkM7RUFFRyx1REFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUN2Qko7O0FEMEJFO0VBQ0Usc0RBQUE7QUN2Qko7O0FENkJFO0VBQ0UsdURBQUE7QUMxQko7O0FENkJBO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtBQzFCRjs7QUQ4QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQzNCRjs7QUQrQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDN0JGOztBRGdDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUM3QkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNhcGFjaXRvci1nb29nbGUtbWFwcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuXG5cbi5zbGlkZS1ib3R0b20ge1xuXHRhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuLnNsaWRlLXRvcCB7XG5cdGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG5cbi5jZW50ZXJQaW57XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbn1cblxuLmJvdHRvbUl0ZW1ze1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuNjI1KTtcbn1cblxuXG4gIFxuXG5pb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IG1hcmdpbi10b3A6IDIwcHg7fVxuXG5cbmlvbi1mb290ZXJ7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA2dmg7XG4gICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuICBpb24tZmFie1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICB9XG4gICBpb24tbGlzdHtcbiAgICAgLnBheW1lbnR7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgLy8gIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOyBcbiAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgaW9uLWl0ZW17XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxuICAgICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBwe1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxuICAgICAgICB9XG4gICAgICAgfVxuICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgIH1cblxuICB9XG59XG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxODgsIDIzMiwgMTk4LCAwLjk2Mik7XG59XG5cbi5hY2NlcHR7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi51bmJvb2t7XG4gIGJhY2tncm91bmQ6ICMwYTYwMmQ7XG4gIFxufVxuXG4uYm9va3tcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG5cbi5jZW50ZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4uYWNjZXB0VGltZXJ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDEuM3B4IHNvbGlkIGFsaWNlYmx1ZTtcbn1cblxuLmNlbnRlckVsZW1cbntcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWNrTWV7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5wcmljZVxuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsZXg6IDAuNztcbiB9XG4gXG4gLnNoYWRvdy10b3BcbiAge1xuICAgIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIH1cblxuICAudG9wX2JhcntcbiAgICBib3gtc2hhZG93OiAwcHggMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIC8vIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1ib3R0b207XG4gICAgLy8gYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICB9XG5cbiAgLmNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgfVxuXG4ubWFpbi1idXR0b257XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlXG59XG5cblxuIiwiY2FwYWNpdG9yLWdvb2dsZS1tYXBzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbi5zbGlkZS1ib3R0b20ge1xuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4uc2xpZGUtdG9wIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLmNlbnRlclBpbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbn1cblxuLmJvdHRvbUl0ZW1zIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWZvb3RlciBpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCAucGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgLnBheW1lbnQgaW9uLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCAucGF5bWVudCBpb24taXRlbSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTg4LCAyMzIsIDE5OCwgMC45NjIpO1xufVxuXG4uYWNjZXB0IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnVuYm9vayB7XG4gIGJhY2tncm91bmQ6ICMwYTYwMmQ7XG59XG5cbi5ib29rIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uY2VudGVyLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hY2NlcHRUaW1lciB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDEuM3B4IHNvbGlkIGFsaWNlYmx1ZTtcbn1cblxuLmNlbnRlckVsZW0ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpY2tNZSB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5wcmljZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmbGV4OiAwLjc7XG59XG5cbi5zaGFkb3ctdG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuXG4udG9wX2JhciB7XG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuXG4ubWFpbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mYWxsYmFjayB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n   <!--menu button-->\n   <ion-toolbar class=\"ion-padding-top top_bar\">\n   <ion-list lines=\"none\">\n  <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\" *ngIf=\"bookingStage\">\n    <ion-button shape=\"round\" *ngIf=\"!currentState\" class=\"main-button\" color=\"danger\" size=\"large\" (click)=\"SwitchOn()\" expand=\"block\">\n      <ion-icon  *ngIf=\"!approve\" slot=\"start\" name=\"power-sharp\" color=\"light\"></ion-icon>\n      <ion-label  *ngIf=\"!approve\" color=\"light\">Go ONLINE</ion-label>\n      <ion-progress-bar *ngIf=\"approve\" color='light' type=\"indeterminate\"></ion-progress-bar>\n    </ion-button>\n   \n    <ion-button shape=\"round\" *ngIf=\"currentState\" class=\"main-button\" color=\"success\" size=\"large\" (click)=\"SwitchOff()\" expand=\"block\">\n      <ion-icon  *ngIf=\"!approve\" slot=\"start\" name=\"power-sharp\" color=\"light\"></ion-icon>\n      <ion-label  *ngIf=\"!approve\" color=\"light\">Go OFFLINE</ion-label>\n      <ion-progress-bar *ngIf=\"approve\" color='light' type=\"indeterminate\"></ion-progress-bar>\n    </ion-button>\n  </ion-item-group>\n\n  <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\" *ngIf=\"confirmStage\">\n    <ion-button  class=\"main-button\" color=\"danger\" shape=\"round\" size=\"large\" (click)=\"CancelRide()\" expand=\"block\">\n      <ion-icon  *ngIf=\"!approve\" slot=\"start\" name=\"trash-sharp\"></ion-icon>\n      <ion-label  *ngIf=\"!approve\">DEcline</ion-label>\n      <ion-progress-bar *ngIf=\"approve\" color='light' type=\"indeterminate\"></ion-progress-bar>\n    </ion-button>\n  </ion-item-group>\n\n  <ion-item class=\"ion-margin-bottom\" *ngIf=\"trackingStage\">\n    <ion-button slot=\"start\"  class=\"main-button\" color=\"primary\" shape=\"round\" size=\"large\" >\n      <ion-icon  *ngIf=\"!approve\" slot=\"start\" name=\"call-sharp\"></ion-icon>\n      <ion-label  *ngIf=\"!approve\">Call Rider</ion-label>\n      <ion-progress-bar *ngIf=\"approve\" color='light' type=\"indeterminate\"></ion-progress-bar>\n    </ion-button>\n\n    <ion-button slot=\"end\" class=\"main-button\" color=\"danger\" shape=\"round\" size=\"large\" (click)=\"CancelRide()\" >\n      <ion-icon  *ngIf=\"!approve\" slot=\"start\" name=\"trash-sharp\"></ion-icon>\n      <ion-label  *ngIf=\"!approve\">Cancel</ion-label>\n      <ion-progress-bar *ngIf=\"approve\" color='light' type=\"indeterminate\"></ion-progress-bar>\n    </ion-button>\n  </ion-item>\n\n  <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\" *ngIf=\"drivingToDestinationStage\">\n    <ion-button shape=\"round\" class=\"main-button\" color=\"primary\" size=\"large\" type=\"submit\" (click)=\"Navigate()\" expand=\"block\">\n      <ion-icon slot=\"start\" name=\"map-sharp\" color=\"light\"></ion-icon>\n      <ion-label color=\"light\">Navigate</ion-label>\n    </ion-button>\n  </ion-item-group>\n\n</ion-list>\n</ion-toolbar>\n\n\n<!--Capacitor Google Map-->\n\n<ion-content [fullscreen]=\"true\">\n\n  \n  <capacitor-google-maps #map>\n   \n  </capacitor-google-maps>\n  \n</ion-content>\n\n\n\n  <ion-footer [translucent]=\"true\" class=\"ion-no-border\">\n\n    <!--location Button-->\n    <ion-fab *ngIf=\"bookingStage && showResetLocationButton\" vertical=\"top\" horizontal=\"end\" >\n      <ion-fab-button color=\"light\" (click)=\"resetLocation()\">\n        <ion-icon name=\"locate\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n\n    <ion-row>\n\n      <!--Price Section-->\n      <ion-list class=\"shadow-top\" *ngIf=\"bookingStage\" lines=\"full\">\n  \n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom \">\n          \n          <ion-button shape=\"round\" class=\"main-button\" color=\"primary\" size=\"large\" type=\"submit\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"cash-sharp\" color=\"light\"></ion-icon>\n            <ion-label color=\"light\">${{earnings}}</ion-label>\n          </ion-button>\n        \n        </ion-item-group>\n\n      </ion-list>\n\n\n      <!--Accept Ride Section-->\n      <ion-list class='shadow-top book' *ngIf=\"confirmStage\" lines=\"none\" (click)=\"AcceptRide()\">\n\n\n        <ion-list-header *ngIf=\"distanceText\" class=\"ion-margin-bottom\">\n            <ion-label class=\"ion-padding\">\n              <h1 class=\"accept\">{{durationText}} . {{distanceText}}</h1>\n              <p style=\"font-size:1em; padding: 12px; color: white;\">{{riderInfo.Rider_Location}}</p>\n              <h1 class=\"acceptTimer ion-text-center\">Time Left <strong>{{riderInfo.countDown}}</strong> sec(s)</h1>\n            </ion-label>\n        </ion-list-header>\n\n        <ion-list-header *ngIf=\"!distanceText\" class=\"ion-margin-bottom\">\n          <ion-label class=\"ion-padding\">\n            <h1 class=\"accept\"> <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text> .  <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text></h1>\n            <p style=\"font-size:1em; padding: 10px; color: white;\"><ion-skeleton-text [animated]=\"true\" style=\"width: 160px;\"></ion-skeleton-text></p>\n            <h1 class=\"acceptTimer ion-text-center\"><ion-skeleton-text [animated]=\"true\"></ion-skeleton-text></h1>\n          </ion-label>\n      </ion-list-header>\n\n      \n      <!--pick up button and drop off button-->\n      <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom \">\n\n        <ion-button shape=\"round\" fill='clear'  class=\"main-button\" color=\"success\" size=\"large\" type=\"submit\"  expand=\"block\">\n          <ion-icon color='light' slot=\"start\" name=\"checkmark-sharp\"></ion-icon>\n          <ion-label color=\"light\">Accept</ion-label>\n        </ion-button>\n      </ion-item-group>\n\n    </ion-list>\n\n    \n      <!--Pick Ride Section-->\n      <ion-list class='shadow-top' *ngIf=\"trackingStage || drivingToDestinationStage\" lines=\"none\">\n\n\n          <ion-list-header class=\"ion-margin-bottom\" >\n              <ion-label class=\"ion-text-center\">\n                <h1>Arrival in {{durationText}}</h1>\n              </ion-label>\n          </ion-list-header>\n  \n          <div class=\"card\">\n  \n            <ion-item>\n              <ion-item>\n                <ion-label>\n                  <h1>Your Rider is {{riderInfo.Rider_name}}</h1> \n                  <p><strong>Destinaion </strong>{{riderInfo.Rider_Destination}}</p>\n                </ion-label>\n              </ion-item>\n                  \n                    <ion-item class=\"price\">\n                      <ion-avatar>\n                        <ion-img [src]=\"riderInfo.Rider_imgUrl\"></ion-img>\n                      </ion-avatar>\n                      <ion-label>\n                        <p><ion-icon slot=\"icon-only\" color=\"secondary\" name=\"star\"></ion-icon> 5 </p>\n                      </ion-label>\n                    </ion-item>\n                    \n            </ion-item>\n\n          <ion-item>\n  \n            <ion-item *ngIf=\"cash\">\n            \n              <ion-label>\n               <h1><ion-icon color='primary'  slot=\"icon-only\" name=\"cash\"></ion-icon> Cash</h1> \n              </ion-label>\n            </ion-item>\n  \n            <ion-item *ngIf=\"!cash\">\n             \n              <ion-label>\n                <h1> <ion-icon color='primary' slot=\"icon-only\" name=\"card\"></ion-icon> Card</h1>\n              </ion-label>\n            </ion-item>\n            \n            <ion-item class=\"price\">\n              <ion-label>\n                <h1>${{riderInfo.price}}</h1>\n              </ion-label>\n            </ion-item>\n                \n                 \n          </ion-item>\n  \n       </div>\n  \n        <!--pick up button and drop off button-->\n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom \">\n\n          <ion-button  shape=\"round\" class=\"main-button\" *ngIf=\"trackingStage\" color=\"success\" size=\"large\" type=\"submit\" (click)=\"PickUp()\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n            <ion-label color=\"light\">Pick Up</ion-label>\n          </ion-button>\n\n\n          <ion-button  shape=\"round\" class=\"main-button\" *ngIf=\"drivingToDestinationStage\"  color=\"success\" size=\"large\" type=\"submit\" (click)=\"DropOff()\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n            <ion-label color=\"light\">Drop Off</ion-label>\n          </ion-button>\n\n          <ion-button *ngIf=\"trackingStage\" shape=\"round\" class=\"main-button\" color=\"primary\" size=\"large\" type=\"submit\" (click)=\"Navigate()\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"map-sharp\" color=\"light\"></ion-icon>\n            <ion-label color=\"light\">Navigate</ion-label>\n          </ion-button>\n         \n        \n        </ion-item-group>\n\n      </ion-list>\n\n     \n    </ion-row>\n    \n  </ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
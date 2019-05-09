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
/* harmony import */ var _components_item_card_stack_item_card_stack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/item-card-stack/item-card-stack.component */ "./src/app/components/item-card-stack/item-card-stack.component.ts");
/* harmony import */ var _components_trade_page_trade_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/trade-page/trade-page.component */ "./src/app/components/trade-page/trade-page.component.ts");





var routes = [
    { path: '', component: _components_item_card_stack_item_card_stack_component__WEBPACK_IMPORTED_MODULE_3__["ItemCardStackComponent"] },
    // { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: 'trade', component: _components_trade_page_trade_page_component__WEBPACK_IMPORTED_MODULE_4__["TradePageComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

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
        this.title = 'ReStyle';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item-card/item-card.component */ "./src/app/components/item-card/item-card.component.ts");
/* harmony import */ var _components_item_card_stack_item_card_stack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/item-card-stack/item-card-stack.component */ "./src/app/components/item-card-stack/item-card-stack.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_trade_page_trade_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/trade-page/trade-page.component */ "./src/app/components/trade-page/trade-page.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_6__["ItemCardComponent"],
                _components_item_card_stack_item_card_stack_component__WEBPACK_IMPORTED_MODULE_7__["ItemCardStackComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_trade_page_trade_page_component__WEBPACK_IMPORTED_MODULE_10__["TradePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // import HttpClientModule after BrowserModule.
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar fixed-bottom\" style=\"background-color: #da8678;\">\n  <div id=\"home-icon\">🏠</div>\n  <div id=\"add-icon\">➕</div>\n  <div id=\"filter-icon\">🔻</div>\n  <div id=\"profile-icon\">💾</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Nunito');\n\n.header{\n  font-family: 'Nunito', sans-serif;\n  font-size: 1.5em;\n  letter-spacing: 0.1em;\n  font-style: italic;\n  font-weight: 800;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEOztBQUU3RDtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bycpO1xuXG4uaGVhZGVye1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogODAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header navbar navbar-dark fixed-top\" style=\"background-color: #da8678;\" data-offset-top=\"300\">\n  ReStyle\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/item-card-stack/item-card-stack.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/item-card-stack/item-card-stack.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-item-card \n    *ngFor=\"let item of items\" [item]=\"item\"\n    [item]=\"item\"\n    (passItem)=\"passItem($event)\"\n    (tradeItem)=\"tradeItem($event)\">\n    <!-- See item-card-stack.component.ts for passItem() and tradeItem() -->\n</app-item-card>"

/***/ }),

/***/ "./src/app/components/item-card-stack/item-card-stack.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/components/item-card-stack/item-card-stack.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1jYXJkLXN0YWNrL2l0ZW0tY2FyZC1zdGFjay5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/item-card-stack/item-card-stack.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/item-card-stack/item-card-stack.component.ts ***!
  \*************************************************************************/
/*! exports provided: ItemCardStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardStackComponent", function() { return ItemCardStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_card_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item-card-service.service */ "./src/app/services/item-card-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ItemCardStackComponent = /** @class */ (function () {
    function ItemCardStackComponent(itemCardServiceService, router) {
        this.itemCardServiceService = itemCardServiceService;
        this.router = router;
    }
    ItemCardStackComponent.prototype.ngOnInit = function () {
        var temp = this.itemCardServiceService.getItems();
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var card = temp_1[_i];
            card.pass = false;
            card.trade = false;
        }
        this.items = temp;
    };
    /**
     * Pass item
     * Sets the pass attribute of the item to true, this causes the class to be set to slide the item.
     * @param item the item to be passed. Emitted from item-card.component.ts
     */
    ItemCardStackComponent.prototype.passItem = function (item) {
        var _this = this;
        console.log(item);
        item.pass = true;
        // Remove the item from the list so that there isn't a blank space in the scrolling space.
        setTimeout(function () {
            _this.items = _this.items.filter(function (i) { return i.itemId !== item.itemId; });
        }, 1000);
    };
    /**
     * Trades item.
     * Sets the trade attribute of the item to true, this causes the class to be set to slide the item.
     * @param item the item to be traded. Emitted from the item-card.component.ts
     */
    ItemCardStackComponent.prototype.tradeItem = function (item) {
        var _this = this;
        console.log(item);
        item.trade = true;
        setTimeout(function () {
            _this.router.navigate(['/trade'], { queryParams: { user: item.userId, item: item.itemId } });
        }, 1000);
    };
    ItemCardStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-card-stack',
            template: __webpack_require__(/*! ./item-card-stack.component.html */ "./src/app/components/item-card-stack/item-card-stack.component.html"),
            styles: [__webpack_require__(/*! ./item-card-stack.component.sass */ "./src/app/components/item-card-stack/item-card-stack.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_card_service_service__WEBPACK_IMPORTED_MODULE_2__["ItemCardServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ItemCardStackComponent);
    return ItemCardStackComponent;
}());



/***/ }),

/***/ "./src/app/components/item-card/item-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/item-card/item-card.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ----------------------------------------------\n * Generated by Animista on 2019-5-5 13:37:19\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-out-left\n * ----------------------------------------\n */\n\n@-webkit-keyframes slide-out-left {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-1000px);\n            transform: translateX(-1000px);\n    opacity: 0;\n  }\n}\n\n@keyframes slide-out-left {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-1000px);\n            transform: translateX(-1000px);\n    opacity: 0;\n  }\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2019-5-3 14:44:13\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-out-right\n * ----------------------------------------\n */\n\n@-webkit-keyframes slide-out-right {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(1000px);\n            transform: translateX(1000px);\n    opacity: 0;\n  }\n}\n\n@keyframes slide-out-right {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(1000px);\n            transform: translateX(1000px);\n    opacity: 0;\n  }\n}\n\n.card {\n  max-width: 90%;\n  margin: 20px auto;\n  font-size: 0.3em;\n  background-image: url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f);\n  background-size: 100%;\n}\n\n.card:nth-child(1) {\n   margin-top: 65px;\n}\n\n.card-footer {\n  background: lightgray;\n}\n\n.btn {\n  margin-top: 10px;\n  width: 40%;\n}\n\n.slide-out-left {\n\t-webkit-animation: slide-out-left 1s ease-in both;\n\t        animation: slide-out-left 1s ease-in both;\n}\n\n.slide-out-right {\n\t-webkit-animation: slide-out-right 1s ease-in both;\n\t        animation: slide-out-right 1s ease-in both;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLWNhcmQvaXRlbS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzttREFHbUQ7O0FBRW5EOzs7O0VBSUU7O0FBQ0Q7RUFDQztJQUNFLGdDQUFnQztZQUN4Qix3QkFBd0I7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQ0FBc0M7WUFDOUIsOEJBQThCO0lBQ3RDLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxnQ0FBZ0M7WUFDeEIsd0JBQXdCO0lBQ2hDLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0NBQXNDO1lBQzlCLDhCQUE4QjtJQUN0QyxVQUFVO0VBQ1o7QUFDRjs7QUFHQTs7O21EQUdtRDs7QUFFbkQ7Ozs7RUFJRTs7QUFDRDtFQUNDO0lBQ0UsZ0NBQWdDO1lBQ3hCLHdCQUF3QjtJQUNoQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLHFDQUFxQztZQUM3Qiw2QkFBNkI7SUFDckMsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGdDQUFnQztZQUN4Qix3QkFBd0I7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxxQ0FBcUM7WUFDN0IsNkJBQTZCO0lBQ3JDLFVBQVU7RUFDWjtBQUNGOztBQUdBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUZBQW1GO0VBQ25GLHFCQUFxQjtBQUN2Qjs7QUFFQTtHQUNHLGdCQUFnQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7Q0FDQyxpREFBaUQ7U0FDekMseUNBQXlDO0FBQ2xEOztBQUVBO0NBQ0Msa0RBQWtEO1NBQzFDLDBDQUEwQztBQUNuRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1jYXJkL2l0ZW0tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktNS01IDEzOjM3OjE5XG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtb3V0LWxlZnRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQtbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtb3V0LWxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktNS0zIDE0OjQ0OjEzXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtb3V0LXJpZ2h0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0LXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtb3V0LXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZm9udC1zaXplOiAwLjNlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTEyNDM2OTkxNjQxLTY3NDVjZGIxNzIzZik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuLmNhcmQ6bnRoLWNoaWxkKDEpIHtcbiAgIG1hcmdpbi10b3A6IDY1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zbGlkZS1vdXQtbGVmdCB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtbGVmdCAxcyBlYXNlLWluIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQtbGVmdCAxcyBlYXNlLWluIGJvdGg7XG59XG5cbi5zbGlkZS1vdXQtcmlnaHQge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0LXJpZ2h0IDFzIGVhc2UtaW4gYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLW91dC1yaWdodCAxcyBlYXNlLWluIGJvdGg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/item-card/item-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/item-card/item-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\" class=\"card\">\n  <div class=\"card-body\">\n    <br> item id: {{ item.itemId }}\n    <br> user id: {{ item.userId }}\n    <br> user picture path: {{ item.userPicturePath }}\n    <br> user verified: {{ item.verified }}\n    <br> user rating: {{ item.rating }}\n    <br> title: {{ item.title }}\n    <br> size number: {{ item.size }}\n    <br> size name: {{ sizeArray[item.size] }}\n    <br> category: {{ item.category }}\n    <br> description: {{ item.description }}\n    <br> picturepaths: \n    <ul>\n      <li *ngFor=\"let path of item.picturePath; let myIndex = index\">\n        {{ item.picturePath[myIndex] }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"item-card card-footer\">\n    <div class=\"bookmark\">Bookmark: t/f</div>\n    <div class=\"user-picture\">\n      User Picture: {{ item.userPicturePath }}\n      </div>\n    <div class=\"item-info\">\n      <div class=\"title\">title: {{ item.title }}</div>\n      <div class=\"size\">size: {{ item.size }}</div>\n      <div class=\"description\">description: {{ item.description }}</div>\n      <div class=\"buttons d-flex justify-content-around\">\n          <button (click)=\"onPass(item)\" class=\"pass-btn btn btn-danger\">&lt; Pass</button>\n          <button (click)=\"onTrade(item)\" class=\"trade-btn btn btn-success\">Trade &gt;</button>\n      </div>\n    </div>\n  </div>\n  <button (click)=\"retrieveJSON()\">retrieve JSON from backend</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/item-card/item-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/item-card/item-card.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ItemCard */ "./src/app/models/ItemCard.ts");
/* harmony import */ var _services_item_card_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item-card-service.service */ "./src/app/services/item-card-service.service.ts");




var ItemCardComponent = /** @class */ (function () {
    /**
     * Creates an instance of an item card component.
     * @param itemCardServiceService used to communicate with the back end
     */
    function ItemCardComponent(itemCardServiceService) {
        this.itemCardServiceService = itemCardServiceService;
        /**
         * Output used to call the onPass function in the item card stack ts
         */
        this.passItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tradeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sizeArray = ['xs', 's', 'm', 'l', 'xl'];
    }
    ItemCardComponent.prototype.ngOnInit = function () {
        this.setClasses();
        this.item.pass = false;
    };
    /**
     * Sets dynamic classes
     * @returns the classes that need to be set by angular
     * When the value of an attribute changes, the class is automatically set.
     * For example, when the value of this.item.pass changes from false to true,
     * the 'slide-out-left' class is automatically added.
     */
    ItemCardComponent.prototype.setClasses = function () {
        var classes = {
            item: true,
            size: this.sizeArray[this.item.size],
            // Changes the class attribute (html class="") based on the size of the item.
            'slide-out-left': this.item.pass,
            'slide-out-right': this.item.trade
        };
        return classes;
    };
    /**
     * Retrieves json from the server
     * ! This is an example and should not be kept long term
     */
    ItemCardComponent.prototype.retrieveJSON = function () {
        /**
         * Logs the observable returned by the item card service's test server method without subscribing to it.
         * This shows what we get if we don't subscribe.
         */
        console.log(this.itemCardServiceService.testServer());
        /**
         * * Logs the JSON returned from the back end.
         * By subscribing to the observable,
         * we should get updated whenever there is a change.
         */
        this.itemCardServiceService.testServer().subscribe(function (JSON) {
            console.log(JSON);
        });
    };
    /**
     * Is called when the trade button is clicked on a card.
     * See item-card.component.html for the code that causes this function to be called
     * Emits the ItemCard object that represents the item that was clicked.
     * this causes '(tradeItem)=tradeItem($event)' to fire
     * See item-card-stack.component.html
     * @param item the ItemCard object that is associated with the item that was clicked.
     * TODO: In the future, this should be used to take the user to the trade screen.
     */
    ItemCardComponent.prototype.onTrade = function (item) {
        this.tradeItem.emit(item);
    };
    /**
     * Is called when the user clicks the 'pass' button on a card.
     * See item-card.component.html for the code that causes this function to be called
     * Emits the ItemCard object that represents the item that was clicked.
     * this causes '(passItem)=passItem($event)' to fire
     * See item-card-stack.component.html
     * @param item the ItemCard object that is associated with the item that was clicked.
     * TODO: Should tell the backend to update the database so that this item is never showed to the user again.
     */
    ItemCardComponent.prototype.onPass = function (item) {
        this.passItem.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_ItemCard__WEBPACK_IMPORTED_MODULE_2__["ItemCard"])
    ], ItemCardComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ItemCardComponent.prototype, "passItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ItemCardComponent.prototype, "tradeItem", void 0);
    ItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-card',
            template: __webpack_require__(/*! ./item-card.component.html */ "./src/app/components/item-card/item-card.component.html"),
            styles: [__webpack_require__(/*! ./item-card.component.css */ "./src/app/components/item-card/item-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_card_service_service__WEBPACK_IMPORTED_MODULE_3__["ItemCardServiceService"]])
    ], ItemCardComponent);
    return ItemCardComponent;
}());



/***/ }),

/***/ "./src/app/components/trade-page/trade-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/trade-page/trade-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trade-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/trade-page/trade-page.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/trade-page/trade-page.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhZGUtcGFnZS90cmFkZS1wYWdlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/trade-page/trade-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/trade-page/trade-page.component.ts ***!
  \***************************************************************/
/*! exports provided: TradePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePageComponent", function() { return TradePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TradePageComponent = /** @class */ (function () {
    function TradePageComponent(router) {
        this.router = router;
    }
    TradePageComponent.prototype.ngOnInit = function () {
        console.log(this.router.url);
        console.log(this.router.parseUrl(this.router.url).queryParams);
        var temp = this.router.parseUrl(this.router.url).queryParams;
        this.queryParams = { user: temp.user, item: temp.item };
        console.log(this.queryParams);
    };
    TradePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade-page',
            template: __webpack_require__(/*! ./trade-page.component.html */ "./src/app/components/trade-page/trade-page.component.html"),
            styles: [__webpack_require__(/*! ./trade-page.component.sass */ "./src/app/components/trade-page/trade-page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TradePageComponent);
    return TradePageComponent;
}());



/***/ }),

/***/ "./src/app/models/ItemCard.ts":
/*!************************************!*\
  !*** ./src/app/models/ItemCard.ts ***!
  \************************************/
/*! exports provided: ItemCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCard", function() { return ItemCard; });
/**
 * A class for ItemCard objects
 * Used for the cards on the scrolling page
 */
var ItemCard = /** @class */ (function () {
    function ItemCard() {
    }
    return ItemCard;
}());



/***/ }),

/***/ "./src/app/services/item-card-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/item-card-service.service.ts ***!
  \*******************************************************/
/*! exports provided: ItemCardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardServiceService", function() { return ItemCardServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemCardServiceService = /** @class */ (function () {
    // an http client called http, used to get data from the back end
    function ItemCardServiceService(http) {
        this.http = http;
    }
    /**
     * An example of retrieving json from the back end.
     * Because this is an observable, it needs to be subscribed to.
     * Using the .subscribe() method.
     * * .subscribe(val => {console.log(val)});
     * @returns an observable that, when subscribed to, returns json.
     */
    ItemCardServiceService.prototype.testServer = function () {
        // test response from server
        return this.http.get('/ajax');
    };
    // Get Items
    // The items could be formatted from DB style to front end style in the front-end,
    // but it would make more sense to do this in the back-end.
    ItemCardServiceService.prototype.getItems = function () {
        // return hard coded data for testing
        return [
            {
                itemId: 'i',
                userId: 'u',
                userPicturePath: '/path',
                verified: true,
                rating: 5,
                title: 'test shirt',
                size: 3,
                category: 'shirt',
                description: 'lorem ipsum dolor sit amet',
                picturePath: ['/path1', '/path2', '/path3'],
                bookmarked: false
            },
            {
                itemId: 'j',
                userId: 'v',
                userPicturePath: '/path',
                verified: false,
                rating: 4,
                title: 'test pants',
                size: 2,
                category: 'pants',
                description: 'lorem ipsum dolor sit amet',
                picturePath: ['/path1', '/path2', '/path3'],
                bookmarked: true
            }
        ];
    };
    ItemCardServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemCardServiceService);
    return ItemCardServiceService;
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

module.exports = __webpack_require__(/*! /Users/haejoonchoi/deployment/ReStyle-Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
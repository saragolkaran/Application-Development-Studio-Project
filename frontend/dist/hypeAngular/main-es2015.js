(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/algorithm/algorithm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/algorithm/algorithm.component.ts ***!
  \**************************************************/
/*! exports provided: AlgorithmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmComponent", function() { return AlgorithmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AlgorithmComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlgorithmComponent.ɵfac = function AlgorithmComponent_Factory(t) { return new (t || AlgorithmComponent)(); };
AlgorithmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlgorithmComponent, selectors: [["app-algorithm"]], decls: 177, vars: 0, consts: [[1, "container"], [1, "calendar"], [1, "front"], [1, "current-date"], [1, "current-month"], [1, "week-days"], [1, "weeks"], [1, "first"], [1, "last-month"], [1, "second"], [1, "event"], [1, "third"], [1, "active"], [1, "fourth"], [1, "fifth"], [1, "back"], ["placeholder", "What's the event?"], [1, "info"], [1, "date"], [1, "info-date"], [1, "info-time"], [1, "address"], [1, "observations"], [1, "actions"], [1, "save"], [1, "ion-checkmark"], [1, "dismiss"], [1, "ion-android-close"], [1, "card"], [1, "card-body"], ["id", "basic-data-filter-form"], [1, "form-row"], [1, "col-4"], ["type", "number", "key", "performanceId", "placeholder", "Performance Id", 1, "form-control"], ["type", "number", "key", "festivalId", "placeholder", "Festival Id", 1, "form-control"], ["type", "number", "placeholder", "StartTime", "key", "startTime__gt", 1, "form-control"], [1, "col-4", "pt-2"], ["type", "number", "placeholder", "EndTime", "key", "endTime", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-2"], [1, "table", "mt-3"], [1, "thead-dark"], ["scope", "col"], ["id", "basic-data-tbody"], [1, "col-10"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["fn", "gottoFirstPage", "id", "basic-data-first-page", 1, "page-link"], ["id", "basic-data-previous-page", "fn", "changePage", "value", "-1", 1, "page-link"], ["id", "basic-data-next-page", "fn", "changePage", "value", "1", 1, "page-link"], [1, "col-1"], ["id", "basic-data-page-size", "fn", "changePageSize", 1, "custom-select"], ["value", "5", "selected", ""], ["value", "10"], ["value", "20"]], template: function AlgorithmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Friday 15th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "January 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "THU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "FRI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Jan 15th, 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "6:35 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "129 W 81st St, New York, NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Observations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Be there 15 minutes earlier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Dismiss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "thead", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Performance Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Festival Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "StartTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "EndTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "tbody", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nav", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto', sans-serif;\r\n    list-style: none;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n      background: #dfebed;\r\n      font-family: 'Roboto', sans-serif;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n      align-items: center;\r\n      display: flex;\r\n      height: 100%;\r\n      justify-content: center;\r\n      margin: 0 auto;\r\n      max-width: 600px;\r\n      width: 100%;\r\n  }\r\n  \r\n  .calendar[_ngcontent-%COMP%] {\r\n      background: #2b4450;\r\n      border-radius: 4px;\r\n      box-shadow: 0 5px 20px rgba(0, 0, 0, .3);\r\n      height: 501px;\r\n    perspective: 1000;\r\n      transition: .9s;\r\n      transform-style: preserve-3d;\r\n      width: 100%;\r\n  }\r\n  \r\n  \r\n  \r\n  .front[_ngcontent-%COMP%] {\r\n      transform: rotateY(0deg);\r\n  }\r\n  \r\n  .current-date[_ngcontent-%COMP%] {\r\n      border-bottom: 1px solid rgba(73, 114, 133, .6);\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding: 30px 40px;\r\n  }\r\n  \r\n  .current-date[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      color: #dfebed;\r\n      font-size: 1.4em;\r\n      font-weight: 300;\r\n  }\r\n  \r\n  .week-days[_ngcontent-%COMP%] {\r\n      color: #dfebed;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      font-weight: 600;\r\n      padding: 30px 40px;\r\n  }\r\n  \r\n  .days[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n  }\r\n  \r\n  .weeks[_ngcontent-%COMP%] {\r\n      color: #fff;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding: 0 40px;\r\n  }\r\n  \r\n  .weeks[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      font-size: 1.2em;\r\n      font-weight: 300;\r\n      justify-content: space-between;\r\n      margin-bottom: 20px;\r\n      width: 100%;\r\n  }\r\n  \r\n  .last-month[_ngcontent-%COMP%] {\r\n      opacity: .3;\r\n  }\r\n  \r\n  .weeks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      padding: 10px;\r\n  }\r\n  \r\n  .weeks[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\r\n      background: #f78536;\r\n      border-radius: 50%;\r\n  }\r\n  \r\n  .weeks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.last-month):hover {\r\n      cursor: pointer;\r\n      font-weight: 600;\r\n  }\r\n  \r\n  .event[_ngcontent-%COMP%] {\r\n      position: relative;\r\n  }\r\n  \r\n  .event[_ngcontent-%COMP%]:after {\r\n      content: '\u2022';\r\n      color: #f78536;\r\n      font-size: 1.4em;\r\n      position: absolute;\r\n      right: -4px;\r\n      top: -4px;\r\n  }\r\n  \r\n  \r\n  \r\n  .back[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      transform: rotateY(180deg);\r\n  }\r\n  \r\n  .back[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      background: none;\r\n      border: none;\r\n      border-bottom: 1px solid rgba(73, 114, 133, .6);\r\n      color: #dfebed;\r\n      font-size: 1.4em;\r\n      font-weight: 300;\r\n      padding: 30px 40px;\r\n      width: 100%;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%] {\r\n      color: #dfebed;\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-weight: 600;\r\n      font-size: 1.2em;\r\n      padding: 30px 40px;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.observations) {\r\n      margin-bottom: 40px;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      font-weight: 300;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      justify-content: space-between;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      width: 50%;\r\n  }\r\n  \r\n  .info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n  }\r\n  \r\n  .actions[_ngcontent-%COMP%] {\r\n      bottom: 0;\r\n      border-top: 1px solid rgba(73, 114, 133, .6);\r\n      display: flex;\r\n      justify-content: space-between;\r\n      position: absolute;\r\n      width: 100%;\r\n  }\r\n  \r\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      background: none;\r\n      border: 0;\r\n      color: #fff;\r\n      font-weight: 600;\r\n      letter-spacing: 3px;\r\n      margin: 0;\r\n      padding: 30px 0;\r\n      text-transform: uppercase;\r\n      width: 50%;\r\n  }\r\n  \r\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\r\n      border-right: 1px solid rgba(73, 114, 133, .6);\r\n  }\r\n  \r\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n      background: #497285;\r\n      cursor: pointer;\r\n  }\r\n  \r\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n      background: #5889a0;\r\n      outline: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .flip[_ngcontent-%COMP%] {\r\n      transform: rotateY(180deg);\r\n  }\r\n  \r\n  .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n      -webkit-backface-visibility: hidden;\r\n              backface-visibility: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtL2FsZ29yaXRobS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7TUFDSSxtQkFBbUI7TUFDbkIsaUNBQWlDO0VBQ3JDOztFQUVBO01BQ0ksbUJBQW1CO01BQ25CLGFBQWE7TUFDYixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsV0FBVztFQUNmOztFQUVBO01BQ0ksbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQix3Q0FBd0M7TUFDeEMsYUFBYTtJQUNmLGlCQUFpQjtNQUNmLGVBQWU7TUFDZiw0QkFBNEI7TUFDNUIsV0FBVztFQUNmOztFQUVBLHFCQUFxQjs7RUFDckI7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSwrQ0FBK0M7TUFDL0MsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLGNBQWM7TUFDZCxhQUFhO01BQ2IsOEJBQThCO01BQzlCLGdCQUFnQjtNQUNoQixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxhQUFhO01BQ2IsZUFBZTtNQUNmLDhCQUE4QjtFQUNsQzs7RUFFQTtNQUNJLFdBQVc7TUFDWCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLFdBQVc7RUFDZjs7RUFFQTtNQUNJLFdBQVc7RUFDZjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxtQkFBbUI7TUFDbkIsa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztFQUNiOztFQUVBLHNCQUFzQjs7RUFFdEI7TUFDSSxZQUFZO01BQ1osMEJBQTBCO0VBQzlCOztFQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwrQ0FBK0M7TUFDL0MsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLFdBQVc7RUFDZjs7RUFFQTtNQUNJLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksYUFBYTtNQUNiLDhCQUE4QjtFQUNsQzs7RUFFQTtNQUNJLFVBQVU7RUFDZDs7RUFFQTtNQUNJLFdBQVc7RUFDZjs7RUFFQTtNQUNJLFNBQVM7TUFDVCw0Q0FBNEM7TUFDNUMsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixrQkFBa0I7TUFDbEIsV0FBVztFQUNmOztFQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixVQUFVO0VBQ2Q7O0VBRUE7TUFDSSw4Q0FBOEM7RUFDbEQ7O0VBRUE7TUFDSSxtQkFBbUI7TUFDbkIsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLG1CQUFtQjtNQUNuQixhQUFhO0VBQ2pCOztFQUVBLG1CQUFtQjs7RUFFbkI7TUFDSSwwQkFBMEI7RUFDOUI7O0VBRUE7TUFDSSxtQ0FBMkI7Y0FBM0IsMkJBQTJCO0VBQy9CIiwiZmlsZSI6InNyYy9hcHAvYWxnb3JpdGhtL2FsZ29yaXRobS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSwgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGZlYmVkO1xyXG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxlbmRhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyYjQ0NTA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgaGVpZ2h0OiA1MDFweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuOXM7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBGcm9udCAtIENhbGVuZGFyICovXHJcbiAgLmZyb250IHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuICBcclxuICAuY3VycmVudC1kYXRlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzMsIDExNCwgMTMzLCAuNik7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY3VycmVudC1kYXRlIGgxIHtcclxuICAgICAgY29sb3I6ICNkZmViZWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrLWRheXMge1xyXG4gICAgICBjb2xvcjogI2RmZWJlZDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXlzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrcyB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrcyBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubGFzdC1tb250aCB7XHJcbiAgICAgIG9wYWNpdHk6IC4zO1xyXG4gIH1cclxuICBcclxuICAud2Vla3Mgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrcyBzcGFuLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNzg1MzY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLndlZWtzIHNwYW46bm90KC5sYXN0LW1vbnRoKTpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmV2ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZXZlbnQ6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAn4oCiJztcclxuICAgICAgY29sb3I6ICNmNzg1MzY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC00cHg7XHJcbiAgICAgIHRvcDogLTRweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQmFjayAtIEV2ZW50IGZvcm0gKi9cclxuICBcclxuICAuYmFjayB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrIGlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3MywgMTE0LCAxMzMsIC42KTtcclxuICAgICAgY29sb3I6ICNkZmViZWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvIHtcclxuICAgICAgY29sb3I6ICNkZmViZWQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8gZGl2Om5vdCgub2JzZXJ2YXRpb25zKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAuaW5mbyAuZGF0ZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8gLmRhdGUgcCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvIC5hZGRyZXNzIHAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMge1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDczLCAxMTQsIDEzMywgLjYpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzMsIDExNCwgMTMzLCAuNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0OTcyODU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1ODg5YTA7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZsaXAgYW5pbWF0aW9uICovXHJcbiAgXHJcbiAgLmZsaXAge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmZyb250LCAuYmFjayB7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-algorithm',
                templateUrl: './algorithm.component.html',
                styleUrls: ['./algorithm.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dataviewer_dataviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataviewer/dataviewer.component */ "./src/app/dataviewer/dataviewer.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithm/algorithm.component */ "./src/app/algorithm/algorithm.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");









const routes = [
    { path: 'DataViewer', component: _dataviewer_dataviewer_component__WEBPACK_IMPORTED_MODULE_2__["DataviewerComponent"] },
    { path: 'ArtistViewer', component: _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__["ArtistComponent"] },
    { path: 'Algorithm', component: _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_5__["AlgorithmComponent"] },
    { path: 'Documents', component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"] },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'hypeAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 70, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "navbar", "topNav"], [1, "container"], [1, "navbar-brand"], ["href", "/", 1, "navbar-item"], ["data-target", "", 1, "navbar-burger", "burger"], [1, "navbar-end"], [1, "navbar-item"], [1, "field", "is-grouped"], [1, "control"], ["href", "#", 1, ""], [1, "fa", "fa-user-circle"], [1, "navbar", "shadow"], [1, "navbar-menu"], [1, "navbar-start", "bottomNav"], ["href", "#", 1, "navbar-item"], [1, "fa", "fa-tachometer-alt"], ["href", "/DataViewer", 1, "navbar-item"], [1, "fa", "fa-list"], ["href", "/ArtistViewer", 1, "navbar-item"], [1, "fa", "fa-user"], ["href", "/Algorithm", 1, "navbar-item"], [1, "fa", "fa-chart"], ["href", "/Documents", 1, "navbar-item"], [1, "fa", "fa-star"], [1, "fa", "fa-envelope-open"], [1, "fa", "fa-cog"], [1, "fa", "fa-sign-out"], [1, "columns"], [1, "column", "is-12", "main"], [1, "heading"], [1, "info-tiles"], [1, "progress--circle", "progress--50"], [1, "progress__number"], [1, "progress--circle", "progress--75"], ["id", "order"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " HYPE HYPE HYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SARYL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0 DataViewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u00A0 Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0 Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0 Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0 Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0 Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0 Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "OVERVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css\");\n@import url(https://fonts.googleapis.com/css?family=Roboto:700,400,300);\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", serif;\n  font-size: 16px;\n  line-height: 1.5;\n  background: #edecf3;\n}\n.topNav[_ngcontent-%COMP%] {\n  border-top: 2px solid #1a649c;\n  height: 75px;\n  background-image: linear-gradient(125deg, #edecf3 10%, #ffffff 100%);\n  border-bottom: 1px solid #edecf3;\n}\n.topNav[_ngcontent-%COMP%]   .fa-user-circle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-right: 10px;\n  color: #1a649c;\n}\n.bottomNav[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 30px;\n  color: #505050 !important;\n}\n.bottomNav[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #1a649c;\n  background-color: white !important;\n  color: #1b659e !important;\n}\n.bottomNav[_ngcontent-%COMP%]   .navbar-item.is-active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #1a649c;\n  background-color: white !important;\n  color: #1b659e !important;\n  font-weight: 600;\n}\n.columns[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04), 0 3px 6px rgba(0, 0, 0, 0.08);\n}\n.main[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-transform: none;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: #1a649c;\n  border-radius: 5px;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   article.delivered[_ngcontent-%COMP%] {\n  background: #13c268;\n  border-radius: 5px;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   .media-left[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   .media-right[_ngcontent-%COMP%] {\n  line-height: 48px;\n  padding-top: 11px;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:not(body).is-success {\n  background-color: #53a5e2;\n}\n.main[_ngcontent-%COMP%]   #order[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:not(body).is-delivered {\n  background-color: #0e944f;\n  color: white;\n}\n.tile[_ngcontent-%COMP%]   .is-child[_ngcontent-%COMP%] {\n  background: linear-gradient(155deg, rgba(32, 45, 61, 0.8) 0%, rgba(56, 75, 99, 0.8) 100%), url(http://cdn.backgroundhost.com/backgrounds/subtlepatterns/vaio_hard_edge.png);\n  background-size: cover;\n}\n.tile[_ngcontent-%COMP%]   .is-child[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .tile[_ngcontent-%COMP%]   .is-child[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: white;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.progress--circle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 1rem;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #ddd;\n}\n.progress--circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background-color: white;\n}\n.progress--circle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #63B8FF;\n}\n.progress__number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  line-height: 1;\n  margin-top: -0.75rem;\n  text-align: center;\n  font-size: 1.5rem;\n  color: #777;\n}\n.progress--pie[_ngcontent-%COMP%]:before {\n  display: none;\n  \n}\n.progress--pie[_ngcontent-%COMP%]   .progress__number[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: rgba(0, 0, 0, 0.35) 1px 1px 1px;\n}\n\n.progress--bar.progress--0[_ngcontent-%COMP%]:after {\n  width: 0%;\n}\n.progress--circle.progress--0[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(90deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--5[_ngcontent-%COMP%]:after {\n  width: 5%;\n}\n.progress--circle.progress--5[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(108deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--10[_ngcontent-%COMP%]:after {\n  width: 10%;\n}\n.progress--circle.progress--10[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(126deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--15[_ngcontent-%COMP%]:after {\n  width: 15%;\n}\n.progress--circle.progress--15[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(144deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--20[_ngcontent-%COMP%]:after {\n  width: 20%;\n}\n.progress--circle.progress--20[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(162deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--25[_ngcontent-%COMP%]:after {\n  width: 25%;\n}\n.progress--circle.progress--25[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--30[_ngcontent-%COMP%]:after {\n  width: 30%;\n}\n.progress--circle.progress--30[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(198deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--35[_ngcontent-%COMP%]:after {\n  width: 35%;\n}\n.progress--circle.progress--35[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(216deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--40[_ngcontent-%COMP%]:after {\n  width: 40%;\n}\n.progress--circle.progress--40[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(234deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--45[_ngcontent-%COMP%]:after {\n  width: 45%;\n}\n.progress--circle.progress--45[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(252deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--50[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n.progress--circle.progress--50[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(-90deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--55[_ngcontent-%COMP%]:after {\n  width: 55%;\n}\n.progress--circle.progress--55[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(-72deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--60[_ngcontent-%COMP%]:after {\n  width: 60%;\n}\n.progress--circle.progress--60[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(-54deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--65[_ngcontent-%COMP%]:after {\n  width: 65%;\n}\n.progress--circle.progress--65[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(-36deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--70[_ngcontent-%COMP%]:after {\n  width: 70%;\n}\n.progress--circle.progress--70[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(-18deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--75[_ngcontent-%COMP%]:after {\n  width: 75%;\n}\n.progress--circle.progress--75[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(0deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--80[_ngcontent-%COMP%]:after {\n  width: 80%;\n}\n.progress--circle.progress--80[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(18deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--85[_ngcontent-%COMP%]:after {\n  width: 85%;\n}\n.progress--circle.progress--85[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(36deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--90[_ngcontent-%COMP%]:after {\n  width: 90%;\n}\n.progress--circle.progress--90[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(54deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--95[_ngcontent-%COMP%]:after {\n  width: 95%;\n}\n.progress--circle.progress--95[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(72deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n.progress--bar.progress--100[_ngcontent-%COMP%]:after {\n  width: 100%;\n}\n.progress--circle.progress--100[_ngcontent-%COMP%]:after {\n  background-image: linear-gradient(90deg, #63B8FF 50%, transparent 50%, transparent), linear-gradient(270deg, #63B8FF 50%, #ddd 50%, #ddd);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ0EsK0VBQUE7QUF5R0EsdUVBQUE7QUFuR1I7O0VBRUksbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFSUztBQUtiO0FBTUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtFQUNBLGdDQUFBO0FBSEo7QUFJSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXBCUTtBQWtCaEI7QUFPSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFKUjtBQUtRO0VBQ0ksZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FBSFo7QUFLUTtFQUNJLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSFo7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTEo7QUFRQTtFQUNJLHdFQUFBO0FBTEo7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTlI7QUFRSTtFQUNJLGNBQUE7QUFOUjtBQU9RO0VBQ0ksY0FBQTtBQUxaO0FBT1E7RUFDSSxhQUFBO0VBQ0EseUJBbkVJO0VBb0VKLGtCQUFBO0FBTFo7QUFNWTtFQUNJLG1CQXBFQTtFQXFFQSxrQkFBQTtBQUpoQjtBQU9RO0VBQ0ksZUFBQTtBQUxaO0FBT1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBTFo7QUFPUTtFQUNJLHlCQUFBO0FBTFo7QUFPUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUxaO0FBVUE7RUFDSSwyS0FBQTtFQUNBLHNCQUFBO0FBUEo7QUFRSTtFQUNJLFlBQUE7QUFOUjtBQVlBLFlBQUE7QUFTQTtFQUFJLHNCQUFBO0FBaEJKO0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBWFE7RUFZUixZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBYlU7QUFIWjtBQWlCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBZko7QUFpQkU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBL0JTO0FBZ0JiO0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBaEJGO0FBb0JFO0VBQ0UsYUFBQTtFQUFlLHdEQUFBO0FBaEJuQjtBQWtCRTtFQUNFLFlBQUE7RUFDQSw0Q0FsRFM7QUFrQ2I7QUFvQkE7O0NBQUE7QUFRRTtFQUNFLFNBQUE7QUF0Qko7QUF3QkU7RUFHSSxxSUFBQTtBQXZCTjtBQWlCRTtFQUNFLFNBQUE7QUFkSjtBQWdCRTtFQUdJLHNJQUFBO0FBZk47QUFTRTtFQUNFLFVBQUE7QUFOSjtBQVFFO0VBR0ksc0lBQUE7QUFQTjtBQUNFO0VBQ0UsVUFBQTtBQUVKO0FBQUU7RUFHSSxzSUFBQTtBQUNOO0FBUEU7RUFDRSxVQUFBO0FBVUo7QUFSRTtFQUdJLHNJQUFBO0FBU047QUFmRTtFQUNFLFVBQUE7QUFrQko7QUFoQkU7RUFHSSxzSUFBQTtBQWlCTjtBQXZCRTtFQUNFLFVBQUE7QUEwQko7QUF4QkU7RUFHSSxzSUFBQTtBQXlCTjtBQS9CRTtFQUNFLFVBQUE7QUFrQ0o7QUFoQ0U7RUFHSSxzSUFBQTtBQWlDTjtBQXZDRTtFQUNFLFVBQUE7QUEwQ0o7QUF4Q0U7RUFHSSxzSUFBQTtBQXlDTjtBQS9DRTtFQUNFLFVBQUE7QUFrREo7QUFoREU7RUFHSSxzSUFBQTtBQWlETjtBQXZERTtFQUNFLFVBQUE7QUEwREo7QUF4REU7RUFPSSwwSUFBQTtBQXFETjtBQS9ERTtFQUNFLFVBQUE7QUFrRUo7QUFoRUU7RUFPSSwwSUFBQTtBQTZETjtBQXZFRTtFQUNFLFVBQUE7QUEwRUo7QUF4RUU7RUFPSSwwSUFBQTtBQXFFTjtBQS9FRTtFQUNFLFVBQUE7QUFrRko7QUFoRkU7RUFPSSwwSUFBQTtBQTZFTjtBQXZGRTtFQUNFLFVBQUE7QUEwRko7QUF4RkU7RUFPSSwwSUFBQTtBQXFGTjtBQS9GRTtFQUNFLFVBQUE7QUFrR0o7QUFoR0U7RUFPSSx3SUFBQTtBQTZGTjtBQXZHRTtFQUNFLFVBQUE7QUEwR0o7QUF4R0U7RUFPSSx5SUFBQTtBQXFHTjtBQS9HRTtFQUNFLFVBQUE7QUFrSEo7QUFoSEU7RUFPSSx5SUFBQTtBQTZHTjtBQXZIRTtFQUNFLFVBQUE7QUEwSEo7QUF4SEU7RUFPSSx5SUFBQTtBQXFITjtBQS9IRTtFQUNFLFVBQUE7QUFrSUo7QUFoSUU7RUFPSSx5SUFBQTtBQTZITjtBQXZJRTtFQUNFLFdBQUE7QUEwSUo7QUF4SUU7RUFPSSx5SUFBQTtBQXFJTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2Fuc3xPcGVuK1NhbnMnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNy4xL2Nzcy9idWxtYS5jc3MnKTtcclxuXHJcbiRicmFuZC1wcmltYXJ5OiByZ2IoMjYsIDEwMCwgMTU2KTtcclxuJGJyYW5kLWdyZXk6IHJnYigyMzcsIDIzNiwgMjQzKTsgXHJcbiRicmFuZC1zdWNjZXNzOiByZ2IoMTksIDE5NCwgMTA0KTtcclxuXHJcbmh0bWwsXHJcbmJvZHkgeyBcclxuICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJhY2tncm91bmQ6ICRicmFuZC1ncmV5O1xyXG59XHJcblxyXG4udG9wTmF2IHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkYnJhbmQtcHJpbWFyeTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMTI1ZGVnLCAkYnJhbmQtZ3JleSAxMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJyYW5kLWdyZXk7XHJcbiAgICAuZmEtdXNlci1jaXJjbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBjb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3R0b21OYXYge1xyXG4gICAgLm5hdmJhci1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRicmFuZC1wcmltYXJ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWI2NTllIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJyYW5kLXByaW1hcnk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMxYjY1OWUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbHVtbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4wNCksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgICNvcmRlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4OyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgJi5kZWxpdmVyZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJyYW5kLXN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhLWxlZnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYS1yaWdodCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWc6bm90KGJvZHkpLmlzLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcjogJGJyYW5kLXByaW1hcnksICRhbW91bnQ6IDI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhZzpub3QoYm9keSkuaXMtZGVsaXZlcmVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogJGJyYW5kLXN1Y2Nlc3MsICRhbW91bnQ6IDEwKTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aWxlIC5pcy1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU1ZGVnLCByZ2JhKDMyLDQ1LDYxLDAuOCkgMCUsIHJnYmEoNTYsNzUsOTksMC44KSAxMDAlKSwgdXJsKGh0dHA6Ly9jZG4uYmFja2dyb3VuZGhvc3QuY29tL2JhY2tncm91bmRzL3N1YnRsZXBhdHRlcm5zL3ZhaW9faGFyZF9lZGdlLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLnRpdGxlLCAuc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSAgXHJcblxyXG5cclxuXHJcbi8qIENJUkNMRVMgKi9cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwLDQwMCwzMDApO1xyXG5cclxuJHNwYWNpbmc6IDFyZW07XHJcbiR0aGVtZUNvbG9yOiAjNjNCOEZGO1xyXG4kYmFja0NvbG9yOiAjZGRkO1xyXG4kdGV4dFNoYWRvdzogcmdiYShibGFjaywgMC4zNSkgMXB4IDFweCAxcHg7XHJcblxyXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG5cclxuXHJcbi5wcm9ncmVzcy0tY2lyY2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogJHNwYWNpbmc7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrQ29sb3I7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZUNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2dyZXNzX19udW1iZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy0tcGllIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBHZXQgcmlkIG9mIHdoaXRlIGNpcmNsZSBmb3IgXCJwaWUgY2hhcnQgc3R5bGVcIiBtZXRlciAqL1xyXG4gIH1cclxuICAucHJvZ3Jlc3NfX251bWJlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHRleHRTaGFkb3c7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuKiAkc3RlcCBpcyBzZXQgdG8gNSBieSBkZWZhdWx0LCBtZWFuaW5nIHlvdSBjYW4gb25seSB1c2UgcGVyY2VudGFnZSBjbGFzc2VzIGluIGluY3JlbWVudHMgb2YgZml2ZSAoZS5nLiAyNSwgMzAsIDQ1LCA1MCwgYW5kIHNvIG9uKS4gVGhpcyBoZWxwcyB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGZpbmFsIENTUyBmaWxlLiBJZiB5b3UgbmVlZCBhIG51bWJlciB0aGF0IGRvZXNuJ3QgZW5kIGluIDAgb3IgNSwgeW91IGNhbiBjaGFuZ2UgdGhlIHRleHQgcGVyY2VudGFnZSB3aGlsZSByb3VuZGluZyB0aGUgY2xhc3MgdXAvZG93biB0byB0aGUgbmVhcmVzdCA1LlxyXG4qL1xyXG4kc3RlcDogNTtcclxuJGxvb3BzOiByb3VuZCgxMDAgLyAkc3RlcCk7XHJcbiRpbmNyZW1lbnQ6IDM2MCAvICRsb29wcztcclxuJGhhbGY6IHJvdW5kKCRsb29wcyAvIDIpO1xyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoICRsb29wcyB7XHJcbiAgLnByb2dyZXNzLS1iYXIucHJvZ3Jlc3MtLSN7JGkgKiAkc3RlcH06YWZ0ZXIge1xyXG4gICAgd2lkdGg6ICRpICogJHN0ZXAgKiAxJTtcclxuICB9XHJcbiAgLnByb2dyZXNzLS1jaXJjbGUucHJvZ3Jlc3MtLSN7JGkgKiAkc3RlcH06YWZ0ZXIge1xyXG4gICAgQGlmICRpIDwgJGhhbGYge1xyXG4gICAgICAkbmV4dERlZzogOTBkZWcgKyAoJGluY3JlbWVudCAqICRpKTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmFja0NvbG9yIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgkbmV4dERlZywgJHRoZW1lQ29sb3IgNTAlLCAkYmFja0NvbG9yIDUwJSwgJGJhY2tDb2xvcik7XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICRuZXh0RGVnOiAtOTBkZWcgKyAoJGluY3JlbWVudCAqICgkaSAtICRoYWxmKSk7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkbmV4dERlZywgJHRoZW1lQ29sb3IgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgJHRoZW1lQ29sb3IgNTAlLCAkYmFja0NvbG9yIDUwJSwgJGJhY2tDb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dataviewer_dataviewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataviewer/dataviewer.component */ "./src/app/dataviewer/dataviewer.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./algorithm/algorithm.component */ "./src/app/algorithm/algorithm.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dataviewer_dataviewer_component__WEBPACK_IMPORTED_MODULE_5__["DataviewerComponent"],
        _artist_artist_component__WEBPACK_IMPORTED_MODULE_6__["ArtistComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
        _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_8__["AlgorithmComponent"],
        _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["DocumentationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dataviewer_dataviewer_component__WEBPACK_IMPORTED_MODULE_5__["DataviewerComponent"],
                    _artist_artist_component__WEBPACK_IMPORTED_MODULE_6__["ArtistComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                    _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_8__["AlgorithmComponent"],
                    _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["DocumentationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/artist/artist.component.ts":
/*!********************************************!*\
  !*** ./src/app/artist/artist.component.ts ***!
  \********************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ArtistComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArtistComponent.ɵfac = function ArtistComponent_Factory(t) { return new (t || ArtistComponent)(); };
ArtistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtistComponent, selectors: [["app-artist"]], decls: 96, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "container"], ["id", "featured-content"], [1, "artist-card"], ["src", "https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1"], [1, "play-button"], [1, "fas", "fa-play"], ["src", "https://i.scdn.co/image/0433f521b1fadf1d839b6e70c3914021f122901f"], ["src", "https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa"], ["src", "https://i.scdn.co/image/e33e4245fe5901ed940ba95070bb8d56679b6fe0"], ["src", "https://i.scdn.co/image/1fc2f537d678d701d7d143a8fd4f0c2f29fbde22"], ["src", "https://i.scdn.co/image/b1dfbe843b0b9f54ab2e588f33e7637d2dab065a"], ["src", "https://i.scdn.co/image/2622edec99d68d1d141886be593c88cbe509f6d8"], ["src", "https://i.scdn.co/image/9fef2047e4e3f05031807d5fa9e121b7862ba259"], ["src", "https://i.scdn.co/image/12d5ab979779aa41e697ce823328d527e643e4cf"], ["src", "https://i.scdn.co/image/fec51156ed94b7ee30fbd4c7fd29b4a840e7daec"]], template: function ArtistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Taylor Swift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chance the Rapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lizzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rihanna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ariana Grande");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Billie Eilish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Beyonc\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lil Nas X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Travis Scott");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n   width: 16px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n   border: 4px solid transparent;\r\n   border-radius: 16px;\r\n   background-clip: padding-box;\r\n   min-height: 30px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n   background-color: hsla(0,0%,100%,.3);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n   font-family: \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif;\r\n   color: #fff;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active { \r\n   color: #fff;\r\n}\r\n\r\narticle[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: row;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n   overflow: hidden;\r\n   margin: 0px;\r\n   display: grid;\r\n   grid-template-columns: 250px auto;\r\n   grid-template-rows: auto 100px;\r\n   grid-template-areas:\r\n      \"left main\"\r\n      \"bottom bottom\";\r\n   height: 100vh;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n   grid-area: main;\r\n   min-height: calc(350px);\r\n   max-height: calc(100vh - 100px);\r\n   overflow-y: auto;\r\n   z-index: 3;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #featured-content[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n body[_ngcontent-%COMP%] {\r\n     overflow: hidden;\r\n     margin: 0px;\r\n     display: grid;\r\n     grid-template-columns: auto;\r\n     grid-template-rows: auto 100px;\r\n     grid-template-areas:\r\n        \"main\"\r\n        \"bottom\";\r\n   }\r\n   #featured-content[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n   }\r\n}\r\n\r\n#featured-content[_ngcontent-%COMP%] {\r\n display: flex;\r\n flex-wrap: wrap;\r\n flex-direction: row;\r\n overflow: hidden;\r\n}\r\n\r\n#featured-content[_ngcontent-%COMP%]   .artist-card[_ngcontent-%COMP%] {\r\n width: 180px;\r\n height: 270px;\r\n padding: 10px;\r\n margin: 10px;\r\n box-sizing: border-box;\r\n}\r\n\r\n#featured-content[_ngcontent-%COMP%]   .artist-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%], .artist-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n background: #202020;\r\n border-radius: 10px;\r\n align-items: center;\r\n justify-content: center;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]:hover {\r\n display: flex;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n margin-bottom: 5px;\r\n font-size: 1em;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n font-size: 0.7em;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n padding-top: 0px;\r\n margin-top: 0px;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n border-radius: 50%;\r\n height: 130px;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n display: none;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n background-color: green;\r\n align-items: center;\r\n justify-content: center;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n   display: block;\r\n   width: 35px;\r\n   height: 35px;\r\n   float: right;\r\n   border-radius: 75%;\r\n}\r\n\r\n.artist-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n margin: 10px;\r\n width: 40px;\r\n height: 40px;\r\n padding: 13px;\r\n border-radius: 25px;\r\n background-color: green;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%], #controls[_ngcontent-%COMP%], #slider[_ngcontent-%COMP%], #player[_ngcontent-%COMP%] {\r\n   align-items: center;\r\n   display: flex;\r\n   flex-direction: row;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n   justify-content: flex-start;\r\n}\r\n\r\n.current-song[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   padding-left: 20px;\r\n   width: 40%;\r\n   min-width: 200px;\r\n   flex-direction: row;\r\n}\r\n\r\n.current-song[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n   height: 60px;\r\n}\r\n\r\n.current-song[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n   padding-left: 10px;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.current-song[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n   margin-bottom: 0px;\r\n   font-size: 0.9em;\r\n}\r\n\r\n.current-song[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n   color: #CCC;\r\n   font-size: 0.8em;\r\n   margin-top: 5px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: column;\r\n   width: auto;\r\n   min-width: 400px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\r\n   height: 40px;\r\n   justify-content: space-around;\r\n   display: flex;\r\n   flex-direction: row;\r\n   width: 110px;\r\n   align-self: center;\r\n   align-items: center;\r\n   margin-bottom: 10px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n   color: #b3b3b3;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n   color: white;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .fa-play-circle[_ngcontent-%COMP%] {\r\n   font-size: 1.7em;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: row;\r\n   width: 100%;\r\n   height: 25px;\r\n   align-items: center;\r\n   color: #b3b3b3;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n   font-size: 0.8em;\r\n   letter-spacing: 1px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   #time-elapsed[_ngcontent-%COMP%] {\r\n   margin-right: 32px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   #time-total[_ngcontent-%COMP%] {\r\n   margin-left: 32px;\r\n}\r\n\r\n[type='range'][_ngcontent-%COMP%] {\r\n  outline: none;\r\n   background: transparent;\r\n   font: 1em/1 arial, sans-serif;\r\n   -webkit-appearance: none;\r\n   width: 100%;\r\n}\r\n\r\n[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\r\n box-sizing: border-box;\r\n border: none;\r\n width: 12.5em;\r\n height: 0.15em;\r\n background: #b3b3b3;\r\n}\r\n\r\n[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n margin-top: -0.55em;\r\n -webkit-appearance: none;\r\n box-sizing: border-box;\r\n border: none;\r\n width: 1.2em;\r\n height: 1.2em;\r\n border-radius: 50%;\r\n background: #1cb954;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n   .player[_ngcontent-%COMP%] {\r\n       min-width: 200px;\r\n       width: auto;\r\n       margin-left: 30px;\r\n   }\r\n   .player[_ngcontent-%COMP%]   #time-elapsed[_ngcontent-%COMP%] {\r\n       margin-right: 12px;\r\n   }\r\n   .player[_ngcontent-%COMP%]   #time-total[_ngcontent-%COMP%] {\r\n       margin-left: 12px;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztBQUNkOztBQUVBO0dBQ0csNkJBQTZCO0dBQzdCLG1CQUFtQjtHQUNuQiw0QkFBNEI7R0FDNUIsZ0JBQWdCO0FBQ25COztBQUNBO0dBQ0csb0NBQW9DO0FBQ3ZDOztBQUVBO0dBQ0csNkRBQTZEO0dBQzdELFdBQVc7QUFDZDs7QUFDQTtHQUNHLFdBQVc7QUFDZDs7QUFDQztHQUNFLGFBQWE7R0FDYixtQkFBbUI7QUFDdEI7O0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsV0FBVztHQUNYLGFBQWE7R0FDYixpQ0FBaUM7R0FDakMsOEJBQThCO0dBQzlCOztxQkFFa0I7R0FDbEIsYUFBYTtBQUNoQjs7QUFDQTtHQUNHLGVBQWU7R0FDZix1QkFBdUI7R0FDdkIsK0JBQStCO0dBQy9CLGdCQUFnQjtHQUNoQixVQUFVO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0NBQ0M7S0FDSSxnQkFBZ0I7S0FDaEIsV0FBVztLQUNYLGFBQWE7S0FDYiwyQkFBMkI7S0FDM0IsOEJBQThCO0tBQzlCOztnQkFFVztHQUNiO0dBQ0E7S0FDRSxXQUFXO0dBQ2I7QUFDSDs7QUFDQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiLFlBQVk7Q0FDWixzQkFBc0I7QUFDdkI7O0FBQ0E7QUFDQTs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxXQUFXO0dBQ1gsWUFBWTtHQUNaLFlBQVk7R0FDWixrQkFBa0I7QUFDckI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFDQTtHQUNHLG1CQUFtQjtHQUNuQixhQUFhO0dBQ2IsbUJBQW1CO0FBQ3RCOztBQUNBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUNBO0dBQ0csYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtBQUN0Qjs7QUFDQTtHQUNHLFlBQVk7QUFDZjs7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2Isc0JBQXNCO0FBQ3pCOztBQUNBO0dBQ0csa0JBQWtCO0dBQ2xCLGdCQUFnQjtBQUNuQjs7QUFDQTtHQUNHLFdBQVc7R0FDWCxnQkFBZ0I7R0FDaEIsZUFBZTtBQUNsQjs7QUFDQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsV0FBVztHQUNYLGdCQUFnQjtBQUNuQjs7QUFDQTtHQUNHLFlBQVk7R0FDWiw2QkFBNkI7R0FDN0IsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixtQkFBbUI7QUFDdEI7O0FBQ0E7R0FDRyxjQUFjO0FBQ2pCOztBQUNBO0dBQ0csWUFBWTtBQUNmOztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixXQUFXO0dBQ1gsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixjQUFjO0FBQ2pCOztBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7R0FDWix1QkFBdUI7R0FDdkIsNkJBQTZCO0dBQzdCLHdCQUF3QjtHQUN4QixXQUFXO0FBQ2Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtHQUNHO09BQ0ksZ0JBQWdCO09BQ2hCLFdBQVc7T0FDWCxpQkFBaUI7R0FDckI7R0FDQTtPQUNJLGtCQUFrQjtHQUN0QjtHQUNBO09BQ0ksaUJBQWlCO0dBQ3JCO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9hcnRpc3QvYXJ0aXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgd2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLDAlLDEwMCUsLjMpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmEsIGE6aG92ZXIsIGE6dmlzaXRlZCwgYTphY3RpdmUgeyBcclxuICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIGFydGljbGUge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmJvZHkge1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBtYXJnaW46IDBweDtcclxuICAgZGlzcGxheTogZ3JpZDtcclxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xyXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTAwcHg7XHJcbiAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwibGVmdCBtYWluXCJcclxuICAgICAgXCJib3R0b20gYm90dG9tXCI7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxubWFpbiB7XHJcbiAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgbWluLWhlaWdodDogY2FsYygzNTBweCk7XHJcbiAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAjZmVhdHVyZWQtY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gYm9keSB7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTAwcHg7XHJcbiAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcIm1haW5cIlxyXG4gICAgICAgIFwiYm90dG9tXCI7XHJcbiAgIH1cclxuICAgI2ZlYXR1cmVkLWNvbnRlbnQge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuI2ZlYXR1cmVkLWNvbnRlbnQge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtd3JhcDogd3JhcDtcclxuIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNmZWF0dXJlZC1jb250ZW50IC5hcnRpc3QtY2FyZCB7XHJcbiB3aWR0aDogMTgwcHg7XHJcbiBoZWlnaHQ6IDI3MHB4O1xyXG4gcGFkZGluZzogMTBweDtcclxuIG1hcmdpbjogMTBweDtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuI2ZlYXR1cmVkLWNvbnRlbnQgLmFydGlzdC1jYXJkIGRpdiB7XHJcbn1cclxuLmFydGlzdC1jYXJkLCAuYXJ0aXN0LWNhcmQgKiB7XHJcbiBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYXJ0aXN0LWNhcmQ6aG92ZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxufVxyXG5oMyB7XHJcbiBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiBmb250LXNpemU6IDFlbTtcclxufVxyXG5wIHtcclxuIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuLmFydGlzdC1jYXJkIHAge1xyXG4gcGFkZGluZy10b3A6IDBweDtcclxuIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uYXJ0aXN0LWNhcmQgaW1nIHtcclxuIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuIGhlaWdodDogMTMwcHg7XHJcbn1cclxuLmFydGlzdC1jYXJkIHNwYW4ge1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG4uYXJ0aXN0LWNhcmQgc3BhbiBpIHtcclxuIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXJ0aXN0LWNhcmQ6aG92ZXIgc3BhbiB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogMzVweDtcclxuICAgaGVpZ2h0OiAzNXB4O1xyXG4gICBmbG9hdDogcmlnaHQ7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDc1JTtcclxufVxyXG4uYXJ0aXN0LWNhcmQgc3BhbiBpIHtcclxuIG1hcmdpbjogMTBweDtcclxuIHdpZHRoOiA0MHB4O1xyXG4gaGVpZ2h0OiA0MHB4O1xyXG4gcGFkZGluZzogMTNweDtcclxuIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5mb290ZXIsICNjb250cm9scywgI3NsaWRlciwgI3BsYXllciB7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuZm9vdGVyIHtcclxuICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5jdXJyZW50LXNvbmcge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmN1cnJlbnQtc29uZyBpbWcge1xyXG4gICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmN1cnJlbnQtc29uZyAubGFiZWwge1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmN1cnJlbnQtc29uZyAubGFiZWwgaDMge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuLmN1cnJlbnQtc29uZyAubGFiZWwgcCB7XHJcbiAgIGNvbG9yOiAjQ0NDO1xyXG4gICBmb250LXNpemU6IDAuOGVtO1xyXG4gICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnBsYXllciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIHdpZHRoOiBhdXRvO1xyXG4gICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5wbGF5ZXIgLmNvbnRyb2xzIHtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgd2lkdGg6IDExMHB4O1xyXG4gICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBsYXllciAuY29udHJvbHMgaSB7XHJcbiAgIGNvbG9yOiAjYjNiM2IzO1xyXG59XHJcbi5wbGF5ZXIgLmNvbnRyb2xzIGk6aG92ZXIge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnBsYXllciAuZmEtcGxheS1jaXJjbGUge1xyXG4gICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4ucGxheWVyIC5zbGlkZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAyNXB4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBjb2xvcjogI2IzYjNiMztcclxufVxyXG4ucGxheWVyIHNwYW4ge1xyXG4gICBmb250LXNpemU6IDAuOGVtO1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ucGxheWVyICN0aW1lLWVsYXBzZWQge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5wbGF5ZXIgI3RpbWUtdG90YWwge1xyXG4gICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuW3R5cGU9J3JhbmdlJ10ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICBmb250OiAxZW0vMSBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuW3R5cGU9J3JhbmdlJ106Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBib3JkZXI6IG5vbmU7XHJcbiB3aWR0aDogMTIuNWVtO1xyXG4gaGVpZ2h0OiAwLjE1ZW07XHJcbiBiYWNrZ3JvdW5kOiAjYjNiM2IzO1xyXG59XHJcblxyXG5bdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gbWFyZ2luLXRvcDogLTAuNTVlbTtcclxuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBib3JkZXI6IG5vbmU7XHJcbiB3aWR0aDogMS4yZW07XHJcbiBoZWlnaHQ6IDEuMmVtO1xyXG4gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gYmFja2dyb3VuZDogIzFjYjk1NDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgLnBsYXllciB7XHJcbiAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgfVxyXG4gICAucGxheWVyICN0aW1lLWVsYXBzZWQge1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICB9XHJcbiAgIC5wbGF5ZXIgI3RpbWUtdG90YWwge1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-artist',
                templateUrl: './artist.component.html',
                styleUrls: ['./artist.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dataviewer/dataviewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dataviewer/dataviewer.component.ts ***!
  \****************************************************/
/*! exports provided: DataviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataviewerComponent", function() { return DataviewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//declare const registerBasicDataFilterForm: any;
//declare const registerBasicDataPaginationForm : any;
class DataviewerComponent {
    /*   onClickForm(){
        registerBasicDataFilterForm();
      }
    
      onClickPagination(){
        registerBasicDataPaginationForm();
      } */
    constructor() { }
    ngOnInit() {
    }
}
DataviewerComponent.ɵfac = function DataviewerComponent_Factory(t) { return new (t || DataviewerComponent)(); };
DataviewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataviewerComponent, selectors: [["app-dataviewer"]], decls: 104, vars: 0, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "card"], [1, "card-body"], ["id", "basic-data-filter-form"], [1, "form-row"], [1, "col-4"], ["type", "number", "key", "performanceId", "placeholder", "Performance Id", 1, "form-control"], ["type", "number", "key", "festivalId", "placeholder", "Festival Id", 1, "form-control"], ["type", "number", "placeholder", "StartTime", "key", "startTime__gt", 1, "form-control"], [1, "col-4", "pt-2"], ["type", "number", "placeholder", "EndTime", "key", "endTime", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-2"], [1, "table", "mt-3"], [1, "thead-dark"], ["scope", "col"], ["id", "basic-data-tbody"], [1, "col-10"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["fn", "gottoFirstPage", "id", "basic-data-first-page", 1, "page-link"], ["id", "basic-data-previous-page", "fn", "changePage", "value", "-1", 1, "page-link"], ["id", "basic-data-next-page", "fn", "changePage", "value", "1", 1, "page-link"], [1, "col-1"], ["id", "basic-data-page-size", "fn", "changePageSize", 1, "custom-select"], ["value", "5", "selected", ""], ["value", "10"], ["value", "20"], ["id", "advance-data-filter-form"], ["id", "advance-data-tbody"], ["fn", "gottoFirstPage", "id", "advance-data-first-page", 1, "page-link"], ["id", "advance-data-previous-page", "fn", "changePage", "value", "-1", 1, "page-link"], ["id", "advance-data-next-page", "fn", "changePage", "value", "1", 1, "page-link"], ["id", "advance-data-page-size", "fn", "changePageSize", 1, "custom-select"]], template: function DataviewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Music Festival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Performance Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Festival Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "StartTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EndTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Performance Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Festival Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "StartTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "EndTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "tbody", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF2aWV3ZXIvZGF0YXZpZXdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataviewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dataviewer',
                templateUrl: './dataviewer.component.html',
                styleUrls: ['./dataviewer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/documentation/documentation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(); };
DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["app-documentation"]], decls: 13, vars: 0, consts: [[1, "editor-holder"], [1, "toolbar"], ["href", "#", "id", "indent", "title", "Toggle tabs or spaces"], [1, "fa", "fa-indent"], ["href", "#", "id", "fullscreen", "title", "Toggle fullscreen mode"], [1, "fa", "fa-expand"], [1, "scroller"], [1, "editor", "allow-tabs", 2, "color", "White"], [1, "syntax-highight", "html"]], template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "<div class=\"Editable Textarea\">\n  <h1>This is a fully editable textarea which auto highlights syntax.</h1>\n  <p>Type or paste any code in here...</p>\n<div>\n\n<?php\n  var simple = \"coding\";\n?>\n\n<script>\n  with = \"Tab or double space functionality\";\n</script>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: #72c3c3;\n}\n\n.editor-holder[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 500px;\n  margin-top: 50px;\n  border-radius: 3px;\n  position: relative;\n  top: 0;\n  margin-left: -400px;\n  left: 50%;\n  background: #1f1f1f !important;\n  overflow: auto;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  transition: all 0.5s ease-in-out;\n}\n\n.editor-holder.fullscreen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  left: 0;\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  list-style: none;\n  position: absolute;\n  top: -2px;\n  margin: 0;\n  left: 0;\n  z-index: 3;\n  padding: 8px;\n  background: #afafaf;\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 20px;\n  background: rgba(144, 144, 144, 0.6);\n  color: grey;\n  box-shadow: inset -1px -1px 1px 0px rgba(0, 0, 0, 0.28);\n  display: block;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(144, 144, 144, 0.8);\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(144, 144, 144, 0.8);\n  box-shadow: none;\n}\n\n.editor-holder[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #565656;\n  padding: 8px;\n}\n\n.editor-holder[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .editor-holder[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 450px;\n  font-size: 14px;\n  border: 0;\n  margin: 0;\n  top: 46px;\n  left: 0;\n  padding: 20px !important;\n  line-height: 21px;\n  position: absolute;\n  font-family: Consolas, Liberation Mono, Courier, monospace;\n  overflow: visible;\n  transition: all 0.5s ease-in-out;\n}\n\n.editor-holder[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: transparent !important;\n  z-index: 2;\n  height: auto;\n  resize: none;\n  color: #fff;\n  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent;\n}\n\n.editor-holder[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white;\n}\n\n.editor-holder[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 0;\n  box-shadow: none;\n}\n\n.editor-holder[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #1f1f1f !important;\n  color: #adadad;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%] {\n  color: #a9b7c6;\n  background: #282b2e;\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-number[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-literal[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-bullet[_ngcontent-%COMP%] {\n  color: #6897BB;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-selector-tag[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-deletion[_ngcontent-%COMP%] {\n  color: #cc7832;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-variable[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-template-variable[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-link[_ngcontent-%COMP%] {\n  color: #629755;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-comment[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-quote[_ngcontent-%COMP%] {\n  color: #808080;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-meta[_ngcontent-%COMP%] {\n  color: #bbb529;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-attribute[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-addition[_ngcontent-%COMP%] {\n  color: #6A8759;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-section[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-type[_ngcontent-%COMP%] {\n  color: #ffc66d;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-name[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-selector-id[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-selector-class[_ngcontent-%COMP%] {\n  color: #e8bf6a;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-emphasis[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .hljs-strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7QUFDRDs7QUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQztFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUNFO0VBQ0MscUJBQUE7QUFDSDs7QUFDRTtFQUNDLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0g7O0FBQUc7RUFDQyxvQ0FBQTtBQUVKOztBQUFHO0VBQ0Msb0NBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0MsY0FBQTtFQUNBLFlBQUE7QUFDSDs7QUFHQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlDO0VBQ0Msa0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNGLG9DQUFBO0FBRkY7O0FBSUU7RUFDQyxZQUFBO0FBRkg7O0FBS0U7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUdBLGdCQUFBO0FBSEg7O0FBT0M7RUFDQyxVQUFBO0FBTEY7O0FBU0E7RUFDQyxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBTkQ7O0FBT0M7RUFDQyw4QkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFPRTtFQUNDLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSDs7QUFPRTs7OztFQUlFLGNBQUE7QUFMSjs7QUFPRTs7O0VBR0UsY0FBQTtBQUxKOztBQU9FOzs7RUFHRSxjQUFBO0FBTEo7O0FBT0U7O0VBRUUsY0FBQTtBQUxKOztBQU9FO0VBQ0UsY0FBQTtBQUxKOztBQU9FOzs7RUFHRSxjQUFBO0FBTEo7O0FBT0U7OztFQUdFLGNBQUE7QUFMSjs7QUFPRTs7O0VBR0UsY0FBQTtBQUxKOztBQU9FO0VBQ0Usa0JBQUE7QUFMSjs7QUFPRTtFQUNFLGlCQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogcmdiKDExNCwgMTk1LCAxOTUpO1xyXG59XHJcblxyXG4uZWRpdG9yLWhvbGRlcntcclxuXHR3aWR0aDogODAwcHg7XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICMxZjFmMWYgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHRib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHRcclxuXHQmLmZ1bGxzY3JlZW57XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cdFxyXG5cdC50b29sYmFye1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtMnB4O1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHotaW5kZXg6IDM7XHJcblx0XHRwYWRkaW5nOiA4cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYWZhZmFmO1xyXG5cdFx0bGl7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuNik7XHJcblx0XHRcdGNvbG9yOiBncmV5O1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMjgpO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgxNDQsIDE0NCwgMTQ0LCAwLjgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTQ0LCAxNDQsIDE0NCwgMC44KTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpe1xyXG5cdFx0XHRjb2xvcjogIzU2NTY1NjtcclxuXHRcdFx0cGFkZGluZzogOHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHR0ZXh0YXJlYSwgY29kZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0bWluLWhlaWdodDogNDUwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHR0b3A6IDQ2cHg7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmb250LWZhbWlseTogQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLENvdXJpZXIsbW9ub3NwYWNlO1xyXG5cdFx0b3ZlcmZsb3c6IHZpc2libGU7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHR9XHJcblx0XHJcblx0dGV4dGFyZWF7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHJlc2l6ZTogbm9uZTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHJcblx0XHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG5cdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Jjpmb2N1c3tcclxuXHRcdFx0b3V0bGluZTogMDtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvZGV7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdH1cclxufVxyXG5cclxucHJlIHtcclxuXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICBcclxuXHR3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcclxuXHR3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAgXHJcblx0d2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRjb2Rle1xyXG5cdFx0YmFja2dyb3VuZDogIzFmMWYxZiAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6ICNhZGFkYWQ7XHJcblxyXG5cdFx0LmhsanMge1xyXG5cdFx0XHRjb2xvcjogI2E5YjdjNjtcclxuXHRcdFx0YmFja2dyb3VuZDogIzI4MmIyZTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG92ZXJmbG93LXg6IGF1dG87XHJcblx0XHRcdHBhZGRpbmc6IDAuNWVtXHJcblx0XHR9XHJcblx0XHQuaGxqcy1udW1iZXIsXHJcblx0XHQuaGxqcy1saXRlcmFsLFxyXG5cdFx0LmhsanMtc3ltYm9sLFxyXG5cdFx0LmhsanMtYnVsbGV0IHtcclxuXHRcdFx0XHRjb2xvcjogIzY4OTdCQlxyXG5cdFx0fVxyXG5cdFx0LmhsanMta2V5d29yZCxcclxuXHRcdC5obGpzLXNlbGVjdG9yLXRhZyxcclxuXHRcdC5obGpzLWRlbGV0aW9uIHtcclxuXHRcdFx0XHRjb2xvcjogI2NjNzgzMlxyXG5cdFx0fVxyXG5cdFx0LmhsanMtdmFyaWFibGUsXHJcblx0XHQuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcclxuXHRcdC5obGpzLWxpbmsge1xyXG5cdFx0XHRcdGNvbG9yOiAjNjI5NzU1XHJcblx0XHR9XHJcblx0XHQuaGxqcy1jb21tZW50LFxyXG5cdFx0LmhsanMtcXVvdGUge1xyXG5cdFx0XHRcdGNvbG9yOiAjODA4MDgwXHJcblx0XHR9XHJcblx0XHQuaGxqcy1tZXRhIHtcclxuXHRcdFx0XHRjb2xvcjogI2JiYjUyOVxyXG5cdFx0fVxyXG5cdFx0LmhsanMtc3RyaW5nLFxyXG5cdFx0LmhsanMtYXR0cmlidXRlLFxyXG5cdFx0LmhsanMtYWRkaXRpb24ge1xyXG5cdFx0XHRcdGNvbG9yOiAjNkE4NzU5XHJcblx0XHR9XHJcblx0XHQuaGxqcy1zZWN0aW9uLFxyXG5cdFx0LmhsanMtdGl0bGUsXHJcblx0XHQuaGxqcy10eXBlIHtcclxuXHRcdFx0XHRjb2xvcjogI2ZmYzY2ZFxyXG5cdFx0fVxyXG5cdFx0LmhsanMtbmFtZSxcclxuXHRcdC5obGpzLXNlbGVjdG9yLWlkLFxyXG5cdFx0LmhsanMtc2VsZWN0b3ItY2xhc3Mge1xyXG5cdFx0XHRcdGNvbG9yOiAjZThiZjZhXHJcblx0XHR9XHJcblx0XHQuaGxqcy1lbXBoYXNpcyB7XHJcblx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljXHJcblx0XHR9XHJcblx0XHQuaGxqcy1zdHJvbmcge1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkXHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-documentation',
                templateUrl: './documentation.component.html',
                styleUrls: ['./documentation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 24, vars: 0, consts: [["charset", "UTF-8"], ["href", "https://fonts.googleapis.com/css?family=Montserrat:400,700", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Playfair+Display:400italic,700italic", "rel", "stylesheet", "type", "text/css"], [1, "container"], [1, "container__item", "landing-page-container"], [1, "content__wrapper"], [1, "coords"], [1, "ellipses-container"], [1, "greeting"], [1, "ellipses", "ellipses__outer--thin"], [1, "ellipses", "ellipses__orbit"], [1, "ellipses", "ellipses__outer--thick"], [1, "scroller"], [1, "page-title"], [1, "timeline"], [1, "timeline__unit"], [1, "timeline__unit", "timeline__unit--active"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "N 49\u00B0 16' 35.173\" / W 0\u00B0 42' 11.30\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WELCOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n}\n\n\n\n.container__item[_ngcontent-%COMP%] {\n  margin: 0 auto 40px;\n}\n\n.landing-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: 90rem;\n  background-image: url(\"https://s29.postimg.org/vho8xb2pj/landing_bg.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n  overflow: hidden;\n  font-family: \"Montserrat\", sans-serif;\n  color: #09383E;\n}\n\n.content__wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2rem;\n  padding: 4.5rem 0;\n  display: block;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n}\n\n.menu-icon__line[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.2rem;\n  background-color: #0C383E;\n  display: block;\n}\n\n.menu-icon__line[_ngcontent-%COMP%]:before, .menu-icon__line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 1.5rem;\n  height: 0.2rem;\n  background-color: #0C383E;\n  display: inline-block;\n  position: relative;\n}\n\n.menu-icon__line[_ngcontent-%COMP%]:before {\n  left: 0.5rem;\n  top: -0.6rem;\n}\n\n.menu-icon__line[_ngcontent-%COMP%]:after {\n  top: -1.8rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  width: 90%;\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0;\n  line-height: 1.7rem;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.social-container[_ngcontent-%COMP%] {\n  width: 7.25rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  float: right;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon[_ngcontent-%COMP%] {\n  float: left;\n  cursor: pointer;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon.social__icon--dr[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon.social__icon--dr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon.social__icon--in[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon.social__icon--in[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n\n.social-container[_ngcontent-%COMP%]   .social__icon.social__icon--fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin: 0rem;\n}\n\n.coords[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: inline-block;\n  transform: rotate(-90deg) translateY(50%);\n  float: left;\n  position: relative;\n  top: 40%;\n  letter-spacing: 0.2rem;\n  left: -11.5rem;\n  margin: 0;\n}\n\n.ellipses-container[_ngcontent-%COMP%] {\n  width: 50rem;\n  height: 50rem;\n  border-radius: 50%;\n  margin: 0 auto;\n  position: relative;\n  top: 10.5rem;\n}\n\n.ellipses-container[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11.6rem;\n  left: 13rem;\n  right: 0;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: 4rem;\n  font-size: 2.2rem;\n  font-weight: 400;\n  opacity: 0.5;\n}\n\n.ellipses-container[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0.3rem;\n  height: 0.3rem;\n  border-radius: 50%;\n  display: inline-block;\n  background-color: #0C383E;\n  position: relative;\n  top: -0.65rem;\n  left: -5.05rem;\n}\n\n.ellipses[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  border-style: solid;\n}\n\n.ellipses__outer--thin[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-width: 1px;\n  border-color: rgba(9, 56, 62, 0.1);\n  -webkit-animation: ellipsesOrbit 15s ease-in-out infinite;\n          animation: ellipsesOrbit 15s ease-in-out infinite;\n}\n\n.ellipses__outer--thin[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-image: url(\"https://s29.postimg.org/5h0r4ftkn/ellipses_dial.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  opacity: 0.15;\n}\n\n.ellipses__outer--thick[_ngcontent-%COMP%] {\n  width: 99.5%;\n  height: 99.5%;\n  border-color: #09383E transparent;\n  border-width: 2px;\n  transform: rotate(-45deg);\n  -webkit-animation: ellipsesRotate 15s ease-in-out infinite;\n          animation: ellipsesRotate 15s ease-in-out infinite;\n}\n\n.ellipses__orbit[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-width: 2px;\n  border-color: #09383E;\n  top: 5rem;\n  right: 6.75rem;\n}\n\n.ellipses__orbit[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 50%;\n  display: inline-block;\n  background-color: #09383E;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.scroller[_ngcontent-%COMP%] {\n  width: 7.5rem;\n  display: inline-block;\n  float: right;\n  position: relative;\n  top: -15%;\n  transform: translateY(50%);\n  overflow: hidden;\n}\n\n.scroller[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  letter-spacing: 0.5rem;\n  display: inline-block;\n  float: left;\n  margin-top: 1rem;\n}\n\n.scroller[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 9rem;\n  display: inline-block;\n  float: right;\n}\n\n.scroller[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline__unit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.1rem;\n  display: block;\n  background-color: #0C383E;\n  margin: 0 0 2rem;\n  opacity: 0.2;\n}\n\n.scroller[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline__unit.timeline__unit--active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.scroller[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline__unit.timeline__unit--active[_ngcontent-%COMP%]:after {\n  opacity: 0.2;\n}\n\n.scroller[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline__unit[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 70%;\n  height: 0.1rem;\n  display: block;\n  position: relative;\n  float: right;\n  background-color: #0C383E;\n  top: 1rem;\n}\n\n@-webkit-keyframes ellipsesRotate {\n  0% {\n    transform: rotate(-45deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n\n@keyframes ellipsesRotate {\n  0% {\n    transform: rotate(-45deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n\n@-webkit-keyframes ellipsesOrbit {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ellipsesOrbit {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQU8sZ0JBQUE7QUFIUDs7QUFJQTtFQUFPLGlCQUFBO0FBQVA7O0FBQTRCLFVBQUE7O0FBQzVCO0VBQU8saUJBQUE7QUFJUDs7QUFKNEIsVUFBQTs7QUFFNUI7RUFDSSxtQkFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlFQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBdkJJO0FBNkJSOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBdkRPO0VBd0RQLGNBQUE7QUFNSjs7QUFKSTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQS9ERztFQWdFSCxxQkFBQTtFQUNBLGtCQUFBO0FBS1I7O0FBRkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUlSOztBQURJO0VBQ0ksWUFBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRVI7O0FBQVE7RUFDRSxtQkFBQTtBQUVWOztBQUFVO0VBQ0csWUFBQTtBQUViOztBQUNRO0VBQ0Usb0JBQUE7QUFDVjs7QUFDVTtFQUNHLFlBQUE7QUFDYjs7QUFJWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRmhCOztBQVFBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxSOztBQU9RO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQWxLRDtFQW1LQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTFo7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5REFBQTtVQUFBLGlEQUFBO0FBUko7O0FBV0k7RUFDRSxXQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVROOztBQWFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBdE5JO0VBdU5KLFNBQUE7RUFDQSxjQUFBO0FBVko7O0FBWUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBaE9BO0VBaU9BLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBVlI7O0FBZUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWVJO0VBQ0ksc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBYlI7O0FBZ0JJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFkUjs7QUFnQlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkF0UUQ7RUF1UUMsZ0JBQUE7RUFDQSxZQUFBO0FBZFo7O0FBZ0JZO0VBQ0ksVUFBQTtBQWRoQjs7QUFnQmdCO0VBQ0ksWUFBQTtBQWRwQjs7QUFrQlk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBelJMO0VBMFJLLFNBQUE7QUFoQmhCOztBQXVCQTtFQUNJO0lBQ0kseUJBQUE7RUFwQk47RUF1QkU7SUFDSSwwQkFBQTtFQXJCTjtBQUNGOztBQWNBO0VBQ0k7SUFDSSx5QkFBQTtFQXBCTjtFQXVCRTtJQUNJLDBCQUFBO0VBckJOO0FBQ0Y7O0FBd0JBO0VBQ0k7SUFDSSxvQkFBQTtFQXRCTjtFQXlCRTtJQUNJLHlCQUFBO0VBdkJOO0FBQ0Y7O0FBZ0JBO0VBQ0k7SUFDSSxvQkFBQTtFQXRCTjtFQXlCRTtJQUNJLHlCQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGliZXI6ICMwOTM4M0U7XHJcbiRlbGVwaGFudDogIzBDMzgzRTtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy8gcmVtIGZvbnQgc2l6aW5nLlxyXG5odG1sIHsgZm9udC1zaXplOiA2Mi41JTsgfVxyXG5ib2R5IHsgZm9udC1zaXplOiAxLjRyZW07IH0gLyogPTE0cHggKi9cclxuaDEgICB7IGZvbnQtc2l6ZTogMi40cmVtOyB9IC8qID0yNHB4ICovXHJcblxyXG4uY29udGFpbmVyX19pdGVtIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDQwcHg7XHJcbn1cclxuXHJcbi5sYW5kaW5nLXBhZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogOTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczI5LnBvc3RpbWcub3JnL3Zobzh4YjJwai9sYW5kaW5nX2JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkdGliZXI7XHJcbn1cclxuXHJcbi5jb250ZW50X193cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgcGFkZGluZzogNC41cmVtIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tZW51LWljb25fX2xpbmUge1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVsZXBoYW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlbGVwaGFudDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgdG9wOiAtMC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogLTEuOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNy4yNXJlbTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICAuc29jaWFsX19pY29uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICYuc29jaWFsX19pY29uLS1kciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNvY2lhbF9faWNvbi0taW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNvY2lhbF9faWNvbi0tZmIge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29vcmRzIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICBsZWZ0OiAtMTEuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVsbGlwc2VzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgICBoZWlnaHQ6IDUwcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwLjVyZW07XHJcblxyXG4gICAgLmdyZWV0aW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMS42cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEzcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMC4zcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlbGVwaGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0wLjY1cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNS4wNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZWxsaXBzZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLmVsbGlwc2VzX19vdXRlci0tdGhpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDksIDU2LCA2MiwgMC4xKTtcclxuICAgIGFuaW1hdGlvbjogZWxsaXBzZXNPcmJpdCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczI5LnBvc3RpbWcub3JnLzVoMHI0ZnRrbi9lbGxpcHNlc19kaWFsLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvcGFjaXR5OiAwLjE1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZWxsaXBzZXNfX291dGVyLS10aGljayB7XHJcbiAgICB3aWR0aDogOTkuNSU7XHJcbiAgICBoZWlnaHQ6IDk5LjUlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkdGliZXIgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBhbmltYXRpb246IGVsbGlwc2VzUm90YXRlIDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmVsbGlwc2VzX19vcmJpdCB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogJHRpYmVyO1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gICAgcmlnaHQ6IDYuNzVyZW07XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiAwLjdyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGliZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbGVyIHtcclxuICAgIHdpZHRoOiA3LjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDlyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICAgICAgLnRpbWVsaW5lX191bml0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVsZXBoYW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAycmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcblxyXG4gICAgICAgICAgICAmLnRpbWVsaW5lX191bml0LS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlbGVwaGFudDtcclxuICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZWxsaXBzZXNSb3RhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZWxsaXBzZXNPcmJpdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sara Golkaran\Desktop\github\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
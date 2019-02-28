webpackHotUpdate("static/development/pages/service.js",{

/***/ "./pages/service.js":
/*!**************************!*\
  !*** ./pages/service.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GeneralLayout */ "./components/GeneralLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./pages/post.js");




 // Let's try to style our Service Component using styled-jsx
// We'll not fetch data from any at this moment. we can either create one variable object or
// we can return the data from a function.

var getServices = function getServices() {
  return [{
    id: 'front-end',
    name: 'Learn Front End'
  }, {
    id: 'back-end',
    name: 'Learn Back End'
  }, {
    id: 'no-end',
    name: 'Learn No End'
  }];
}; // Let's use PostLink Component instead :) Let's see how the behaviour changes


var ServiceLink = function ServiceLink(_ref) {
  var service = _ref.service;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-407545656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(service.id),
    href: "/post?id=".concat(service.id)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-407545656"
  }, service.name)), "// We'll need to style the Component here only before using it in other component.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "407545656"
  }, "li.jsx-407545656{list-style:none;margin:5px 0;}a.jsx-407545656{-webkit-text-decoration:none;text-decoration:none;color:#00ff00;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-407545656 a.jsx-407545656:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzRCLEFBS0ssQUFNUixhQUNoQixHQVhnQixhQUNoQixxQkFJaUIsY0FDTSxnREFDdkIiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdCc7XG4vLyBMZXQncyB0cnkgdG8gc3R5bGUgb3VyIFNlcnZpY2UgQ29tcG9uZW50IHVzaW5nIHN0eWxlZC1qc3hcblxuLy8gV2UnbGwgbm90IGZldGNoIGRhdGEgZnJvbSBhbnkgYXQgdGhpcyBtb21lbnQuIHdlIGNhbiBlaXRoZXIgY3JlYXRlIG9uZSB2YXJpYWJsZSBvYmplY3Qgb3Jcbi8vIHdlIGNhbiByZXR1cm4gdGhlIGRhdGEgZnJvbSBhIGZ1bmN0aW9uLlxuXG5cbmNvbnN0IGdldFNlcnZpY2VzID0gKCk9PntcbiAgICByZXR1cm4gW1xuICAgICAgICB7aWQ6J2Zyb250LWVuZCcsbmFtZTonTGVhcm4gRnJvbnQgRW5kJ30sXG4gICAgICAgIHtpZDonYmFjay1lbmQnLG5hbWU6J0xlYXJuIEJhY2sgRW5kJ30sXG4gICAgICAgIHtpZDonbm8tZW5kJyxuYW1lOidMZWFybiBObyBFbmQnfSxcbiAgICBdXG59XG5cblxuLy8gTGV0J3MgdXNlIFBvc3RMaW5rIENvbXBvbmVudCBpbnN0ZWFkIDopIExldCdzIHNlZSBob3cgdGhlIGJlaGF2aW91ciBjaGFuZ2VzXG5cbmNvbnN0IFNlcnZpY2VMaW5rID0gKHtzZXJ2aWNlfSk9PihcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzZXJ2aWNlLmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3NlcnZpY2UuaWR9YH0+XG4gICAgICAgICAgICA8YT57c2VydmljZS5uYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIC8vIFdlJ2xsIG5lZWQgdG8gc3R5bGUgdGhlIENvbXBvbmVudCBoZXJlIG9ubHkgYmVmb3JlIHVzaW5nIGl0IGluIG90aGVyIGNvbXBvbmVudC5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgY29sb3I6IzAwZmYwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICBsaSBhOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U2VydmljZXMgV2UgT2ZmZXI8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2V0U2VydmljZXMoKS5tYXAoKHNlcnZpY2UpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICA8U2VydmljZUxpbmsga2V5PXtzZXJ2aWNlLmlkfSBzZXJ2aWNlPXtzZXJ2aWNlfS8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEsYXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJztcbiAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDBmZjAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKSJdfQ== */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/service.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3926662092"
  }, "Services We Offer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3926662092"
  }, getServices().map(function (service) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ServiceLink, {
      key: service.id,
      service: service
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3926662092"
  }, "h1.jsx-3926662092,a.jsx-3926662092{font-family:'Times New Roman';color:red;}ul.jsx-3926662092{padding:0;margin:0;}li.jsx-3926662092{list-style:none;margin:5px 0;}a.jsx-3926662092{-webkit-text-decoration:none;text-decoration:none;color:#00ff00;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-3926662092 a.jsx-3926662092:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRW9CLEFBRzhDLEFBS3BCLEFBS00sQUFLSyxBQU1SLFVBZkosR0FnQlosR0FYZ0IsR0FKaEIsVUFLQSxDQVhhLFVBQ2IsVUFjaUIsY0FDTSxnREFDdkIiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdCc7XG4vLyBMZXQncyB0cnkgdG8gc3R5bGUgb3VyIFNlcnZpY2UgQ29tcG9uZW50IHVzaW5nIHN0eWxlZC1qc3hcblxuLy8gV2UnbGwgbm90IGZldGNoIGRhdGEgZnJvbSBhbnkgYXQgdGhpcyBtb21lbnQuIHdlIGNhbiBlaXRoZXIgY3JlYXRlIG9uZSB2YXJpYWJsZSBvYmplY3Qgb3Jcbi8vIHdlIGNhbiByZXR1cm4gdGhlIGRhdGEgZnJvbSBhIGZ1bmN0aW9uLlxuXG5cbmNvbnN0IGdldFNlcnZpY2VzID0gKCk9PntcbiAgICByZXR1cm4gW1xuICAgICAgICB7aWQ6J2Zyb250LWVuZCcsbmFtZTonTGVhcm4gRnJvbnQgRW5kJ30sXG4gICAgICAgIHtpZDonYmFjay1lbmQnLG5hbWU6J0xlYXJuIEJhY2sgRW5kJ30sXG4gICAgICAgIHtpZDonbm8tZW5kJyxuYW1lOidMZWFybiBObyBFbmQnfSxcbiAgICBdXG59XG5cblxuLy8gTGV0J3MgdXNlIFBvc3RMaW5rIENvbXBvbmVudCBpbnN0ZWFkIDopIExldCdzIHNlZSBob3cgdGhlIGJlaGF2aW91ciBjaGFuZ2VzXG5cbmNvbnN0IFNlcnZpY2VMaW5rID0gKHtzZXJ2aWNlfSk9PihcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzZXJ2aWNlLmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3NlcnZpY2UuaWR9YH0+XG4gICAgICAgICAgICA8YT57c2VydmljZS5uYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIC8vIFdlJ2xsIG5lZWQgdG8gc3R5bGUgdGhlIENvbXBvbmVudCBoZXJlIG9ubHkgYmVmb3JlIHVzaW5nIGl0IGluIG90aGVyIGNvbXBvbmVudC5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgY29sb3I6IzAwZmYwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICBsaSBhOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U2VydmljZXMgV2UgT2ZmZXI8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2V0U2VydmljZXMoKS5tYXAoKHNlcnZpY2UpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICA8U2VydmljZUxpbmsga2V5PXtzZXJ2aWNlLmlkfSBzZXJ2aWNlPXtzZXJ2aWNlfS8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEsYXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJztcbiAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDBmZjAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKSJdfQ== */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/service.js */"));
});

/***/ })

})
//# sourceMappingURL=service.js.b27435cf153c1488de22.hot-update.js.map
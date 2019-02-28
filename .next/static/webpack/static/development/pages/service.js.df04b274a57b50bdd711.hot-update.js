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


var PostLink = function PostLink() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(service.id),
    href: "/post?id=".concat(service.id)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, service.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2072202124"
  }, "Services We Offer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2072202124"
  }, getServices().map(function (service) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2072202124"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(service.id),
      href: "/post?id=".concat(service.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2072202124"
    }, service.name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2072202124"
  }, "h1.jsx-2072202124,a.jsx-2072202124{font-family:'Times New Roman';}ul.jsx-2072202124{padding:0;margin:0;}li.jsx-2072202124{list-style:none;margin:5px 0;}a.jsx-2072202124{-webkit-text-decoration:none;text-decoration:none;color:#00ff00;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-2072202124 a.jsx-2072202124:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRzhDLEFBSXBCLEFBS00sQUFLSyxBQU1SLFVBZkosR0FnQlosR0FYZ0IsR0FKaEIsVUFLQSxDQVZBLG9CQWNpQixjQUNNLGdEQUN2QiIsImZpbGUiOiIvaG9tZS9pbXJhbi9Eb2N1bWVudHMvZW1tZWlzb2Z0L3BhZ2VzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbExheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gTGV0J3MgdHJ5IHRvIHN0eWxlIG91ciBTZXJ2aWNlIENvbXBvbmVudCB1c2luZyBzdHlsZWQtanN4XG5cbi8vIFdlJ2xsIG5vdCBmZXRjaCBkYXRhIGZyb20gYW55IGF0IHRoaXMgbW9tZW50LiB3ZSBjYW4gZWl0aGVyIGNyZWF0ZSBvbmUgdmFyaWFibGUgb2JqZWN0IG9yXG4vLyB3ZSBjYW4gcmV0dXJuIHRoZSBkYXRhIGZyb20gYSBmdW5jdGlvbi5cblxuXG5jb25zdCBnZXRTZXJ2aWNlcyA9ICgpPT57XG4gICAgcmV0dXJuIFtcbiAgICAgICAge2lkOidmcm9udC1lbmQnLG5hbWU6J0xlYXJuIEZyb250IEVuZCd9LFxuICAgICAgICB7aWQ6J2JhY2stZW5kJyxuYW1lOidMZWFybiBCYWNrIEVuZCd9LFxuICAgICAgICB7aWQ6J25vLWVuZCcsbmFtZTonTGVhcm4gTm8gRW5kJ30sXG4gICAgXVxufVxuXG5cbi8vIExldCdzIHVzZSBQb3N0TGluayBDb21wb25lbnQgaW5zdGVhZCA6KSBMZXQncyBzZWUgaG93IHRoZSBiZWhhdmlvdXIgY2hhbmdlc1xuXG5jb25zdCBQb3N0TGluayA9ICgpPT4oXG4gICAgPGxpPlxuICAgICAgICA8TGluayBhcz17YC9wLyR7c2VydmljZS5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzZXJ2aWNlLmlkfWB9PlxuICAgICAgICA8YT57c2VydmljZS5uYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0ICgpPT4oXG4gICAgPExheW91dD5cbiAgICAgICAgPGgxPlNlcnZpY2VzIFdlIE9mZmVyPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldFNlcnZpY2VzKCkubWFwKChzZXJ2aWNlKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3NlcnZpY2UuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2VydmljZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzZXJ2aWNlLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGgxLGF7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDBmZjAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKSJdfQ== */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/service.js */"));
});

/***/ })

})
//# sourceMappingURL=service.js.df04b274a57b50bdd711.hot-update.js.map
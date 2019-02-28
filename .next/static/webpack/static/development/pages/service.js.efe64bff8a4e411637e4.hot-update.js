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


var ServiceLink = function ServiceLink() {
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ServiceLink, {
      key: service.id,
      service: service
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2072202124"
  }, "h1.jsx-2072202124,a.jsx-2072202124{font-family:'Times New Roman';}ul.jsx-2072202124{padding:0;margin:0;}li.jsx-2072202124{list-style:none;margin:5px 0;}a.jsx-2072202124{-webkit-text-decoration:none;text-decoration:none;color:#00ff00;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-2072202124 a.jsx-2072202124:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBRzhDLEFBSXBCLEFBS00sQUFLSyxBQU1SLFVBZkosR0FnQlosR0FYZ0IsR0FKaEIsVUFLQSxDQVZBLG9CQWNpQixjQUNNLGdEQUN2QiIsImZpbGUiOiIvaG9tZS9pbXJhbi9Eb2N1bWVudHMvZW1tZWlzb2Z0L3BhZ2VzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbExheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9wb3N0Jztcbi8vIExldCdzIHRyeSB0byBzdHlsZSBvdXIgU2VydmljZSBDb21wb25lbnQgdXNpbmcgc3R5bGVkLWpzeFxuXG4vLyBXZSdsbCBub3QgZmV0Y2ggZGF0YSBmcm9tIGFueSBhdCB0aGlzIG1vbWVudC4gd2UgY2FuIGVpdGhlciBjcmVhdGUgb25lIHZhcmlhYmxlIG9iamVjdCBvclxuLy8gd2UgY2FuIHJldHVybiB0aGUgZGF0YSBmcm9tIGEgZnVuY3Rpb24uXG5cblxuY29uc3QgZ2V0U2VydmljZXMgPSAoKT0+e1xuICAgIHJldHVybiBbXG4gICAgICAgIHtpZDonZnJvbnQtZW5kJyxuYW1lOidMZWFybiBGcm9udCBFbmQnfSxcbiAgICAgICAge2lkOidiYWNrLWVuZCcsbmFtZTonTGVhcm4gQmFjayBFbmQnfSxcbiAgICAgICAge2lkOiduby1lbmQnLG5hbWU6J0xlYXJuIE5vIEVuZCd9LFxuICAgIF1cbn1cblxuXG4vLyBMZXQncyB1c2UgUG9zdExpbmsgQ29tcG9uZW50IGluc3RlYWQgOikgTGV0J3Mgc2VlIGhvdyB0aGUgYmVoYXZpb3VyIGNoYW5nZXNcblxuY29uc3QgU2VydmljZUxpbmsgPSAoKT0+KFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgYXM9e2AvcC8ke3NlcnZpY2UuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2VydmljZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzZXJ2aWNlLm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U2VydmljZXMgV2UgT2ZmZXI8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2V0U2VydmljZXMoKS5tYXAoKHNlcnZpY2UpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICA8U2VydmljZUxpbmsga2V5PXtzZXJ2aWNlLmlkfSBzZXJ2aWNlPXtzZXJ2aWNlfS8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEsYXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiMwMGZmMDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4ycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkgYTpob3ZlcntcbiAgICAgICAgICAgICAgICBjb2xvcjpvcmFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pIl19 */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/service.js */"));
});

/***/ })

})
//# sourceMappingURL=service.js.efe64bff8a4e411637e4.hot-update.js.map
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
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2372776706"
  }, "Services We Offer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2372776706"
  }, getServices().map(function (service) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2372776706"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(service.id),
      href: "/post?id=".concat(service.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2372776706"
    }, service.name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2372776706"
  }, "h1.jsx-2372776706,a.jsx-2372776706{font-family:'Times New Roman';}ul.jsx-2372776706{padding:0;margin:0;}li.jsx-2372776706{list-style:none;margin:5px 0;}li.jsx-2372776706>a.jsx-2372776706{-webkit-text-decoration:none;text-decoration:none;color:'#00ff00';-webkit-transform;-ms-transform;transform;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzhDLEFBSXBCLEFBS00sQUFLSyxVQVRaLE1BS0ksR0FKaEIsVUFLQSxDQVZBLG9CQWNtQixnQkFFcEIsMENBQUMiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIExldCdzIHRyeSB0byBzdHlsZSBvdXIgU2VydmljZSBDb21wb25lbnQgdXNpbmcgc3R5bGVkLWpzeFxuXG4vLyBXZSdsbCBub3QgZmV0Y2ggZGF0YSBmcm9tIGFueSBhdCB0aGlzIG1vbWVudC4gd2UgY2FuIGVpdGhlciBjcmVhdGUgb25lIHZhcmlhYmxlIG9iamVjdCBvclxuLy8gd2UgY2FuIHJldHVybiB0aGUgZGF0YSBmcm9tIGEgZnVuY3Rpb24uXG5cblxuY29uc3QgZ2V0U2VydmljZXMgPSAoKT0+e1xuICAgIHJldHVybiBbXG4gICAgICAgIHtpZDonZnJvbnQtZW5kJyxuYW1lOidMZWFybiBGcm9udCBFbmQnfSxcbiAgICAgICAge2lkOidiYWNrLWVuZCcsbmFtZTonTGVhcm4gQmFjayBFbmQnfSxcbiAgICAgICAge2lkOiduby1lbmQnLG5hbWU6J0xlYXJuIE5vIEVuZCd9LFxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U2VydmljZXMgV2UgT2ZmZXI8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2V0U2VydmljZXMoKS5tYXAoKHNlcnZpY2UpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2VydmljZS5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzZXJ2aWNlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3NlcnZpY2UubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEsYXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaSA+IGF7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6JyMwMGZmMDAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaSBhOmhvdmVye1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pIl19 */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/service.js */"));
});

/***/ })

})
//# sourceMappingURL=service.js.0f6dfdc16fa07cf5bcba.hot-update.js.map
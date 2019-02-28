webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/GeneralLayout */ "./components/GeneralLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);











 // We'll use the query string to show our dynamic content
// const stylingList = {
//     listStyle:'none',
//     padding:0,
//     margin:0,
//     marginBottom:10,
//     fontSize:16,
// }
// const parentList = {
//     margin:0,
//     padding:0
// }
// const blogLinks = {
//     textDecoration:'none',
//     color:'green'
// }
// NOW WE HAVE DECIDED TO FETCH THE DATA FROM THE API. Nothing like static stuff would remain
// const PostLink = (props)=>(
//     <li style={stylingList}>
//         <Link as={`/p/title=${props.mask}`} href={`/post?title=${props.title}`}>
//             <a style={blogLinks}>{props.title}</a>
//         </Link>
//     </li>
// )

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-985045663"
      }, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-985045663"
      }, this.props.shows.map(function (_ref) {
        var show = _ref.show;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: show.id,
          className: "jsx-985045663"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          as: "/p/".concat(show.id),
          href: "/post?id=".concat(show.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          className: "jsx-985045663"
        }, show.name)));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "985045663"
      }, "h1.jsx-985045663,a.jsx-985045663{font-family:'Times New Roman';color:red;}ul.jsx-985045663{padding:0;margin:0;}li.jsx-985045663{list-style:none;margin:5px 0;}a.jsx-985045663{-webkit-text-decoration:none;text-decoration:none;color:#333;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-985045663 a.jsx-985045663:hover{color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VvQyxBQUc4RSxBQUlwQixBQUlNLEFBS0ssQUFNVixVQWRGLENBZVosS0FYZ0IsR0FIaEIsVUFJQSxDQVRhLFVBQ2IsVUFZYyxXQUNTLGdEQUN2QiIsImZpbGUiOiIvaG9tZS9pbXJhbi9Eb2N1bWVudHMvZW1tZWlzb2Z0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbExheW91dCc7XG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBXZSdsbCB1c2UgdGhlIHF1ZXJ5IHN0cmluZyB0byBzaG93IG91ciBkeW5hbWljIGNvbnRlbnRcblxuLy8gY29uc3Qgc3R5bGluZ0xpc3QgPSB7XG4vLyAgICAgbGlzdFN0eWxlOidub25lJyxcbi8vICAgICBwYWRkaW5nOjAsXG4vLyAgICAgbWFyZ2luOjAsXG4vLyAgICAgbWFyZ2luQm90dG9tOjEwLFxuLy8gICAgIGZvbnRTaXplOjE2LFxuLy8gfVxuXG4vLyBjb25zdCBwYXJlbnRMaXN0ID0ge1xuLy8gICAgIG1hcmdpbjowLFxuLy8gICAgIHBhZGRpbmc6MFxuLy8gfVxuXG4vLyBjb25zdCBibG9nTGlua3MgPSB7XG4vLyAgICAgdGV4dERlY29yYXRpb246J25vbmUnLFxuLy8gICAgIGNvbG9yOidncmVlbidcbi8vIH1cblxuLy8gTk9XIFdFIEhBVkUgREVDSURFRCBUTyBGRVRDSCBUSEUgREFUQSBGUk9NIFRIRSBBUEkuIE5vdGhpbmcgbGlrZSBzdGF0aWMgc3R1ZmYgd291bGQgcmVtYWluXG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcyk9Pihcbi8vICAgICA8bGkgc3R5bGU9e3N0eWxpbmdMaXN0fT5cbi8vICAgICAgICAgPExpbmsgYXM9e2AvcC90aXRsZT0ke3Byb3BzLm1hc2t9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyAgICAgICAgICAgICA8YSBzdHlsZT17YmxvZ0xpbmtzfT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgICAgICA8L0xpbms+XG4vLyAgICAgPC9saT5cbi8vIClcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aDM+TGV0J3MgVmlzaXQgb3VyIEFib3V0IFBhZ2U8L2gzPiAqL31cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBzdHlsZT17e2NvbG9yOlwiIzAwRkYwMFwiLGZvbnRTaXplOjE1fX0+QUJPVVQgUEFHRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDI+QkxPRyBMSU5LUzo8L2gyPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFdlIGFyZSBwbGFubmluZyB0byBmZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBBUEksIFRWTWF6ZSBBUEkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCByZW5kZXIgdGhlIGRhdGEgRHluYW1pY2FsbHksIHRoYXQgd2lsbCBjb21lIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU28gTGV0J3MgZG8gdGhhdCA6KSAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PIExPTkdFUiBTVEFUSUMgU1RVRkYgOilcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17cGFyZW50TGlzdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIG1hc2s9XCJsZWFybmluZ1wiIHRpdGxlPVwiQWJvdXQgT3ZlcmFsbCBMZWFybmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIG1hc2s9XCJwcm9jZXNzXCIgdGl0bGU9XCJBIEdyYWR1YWwgUHJvY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIG1hc2s9XCJwZWFjZVwiIHRpdGxlPVwiTm8gV2hlcmUgSXMgUGVhY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd3MubWFwKCh7c2hvd30pPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3AvJHtzaG93LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEsYXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzExMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBOb3csIGxldCdzIGRpc2N1c3Mgc29tZXRoaW5nIGFib3V0IGdldEluaXRpYWxQcm9wcyBBc3luY2hyb25vdXMgZnVuY3Rpb25cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhgV0UgSlVTVCBGRVRDSEVEIFNPTUUgQ09PTCBEQVRBLiBUT1RBTCBTSE9XUyBBUkUgJHtkYXRhLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOmRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); // Now, let's discuss something about getInitialProps Asynchronous function


Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          // console.log(data);
          console.log("WE JUST FETCHED SOME COOL DATA. TOTAL SHOWS ARE ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a05aae076427b4a9fbcf.hot-update.js.map
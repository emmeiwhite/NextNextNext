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

var parentList = {
  margin: 0,
  padding: 0 // const blogLinks = {
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

};

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
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, this.props.shows.map(function (_ref) {
        var show = _ref.show;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: show.id,
          className: "jsx-2078787060"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          as: "/p/".concat(show.id),
          href: "/post?id=".concat(show.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          className: "jsx-2078787060"
        }, show.name)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "2078787060"
        }, "h1.jsx-2078787060,a.jsx-2078787060{font-family:'Times New Roman';color:red;}ul.jsx-2078787060{padding:0;margin:0;}li.jsx-2078787060{list-style:none;margin:5px 0;}a.jsx-2078787060{-webkit-text-decoration:none;text-decoration:none;color:#ff0000;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-2078787060 a.jsx-2078787060:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvRCxBQUc4RSxBQUlwQixBQUlNLEFBS0ssQUFNUixVQWRKLEdBZVosR0FYZ0IsR0FIaEIsVUFJQSxDQVRhLFVBQ2IsVUFZaUIsY0FDTSxnREFDdkIiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gV2UnbGwgdXNlIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2hvdyBvdXIgZHluYW1pYyBjb250ZW50XG5cbi8vIGNvbnN0IHN0eWxpbmdMaXN0ID0ge1xuLy8gICAgIGxpc3RTdHlsZTonbm9uZScsXG4vLyAgICAgcGFkZGluZzowLFxuLy8gICAgIG1hcmdpbjowLFxuLy8gICAgIG1hcmdpbkJvdHRvbToxMCxcbi8vICAgICBmb250U2l6ZToxNixcbi8vIH1cblxuY29uc3QgcGFyZW50TGlzdCA9IHtcbiAgICBtYXJnaW46MCxcbiAgICBwYWRkaW5nOjBcbn1cblxuLy8gY29uc3QgYmxvZ0xpbmtzID0ge1xuLy8gICAgIHRleHREZWNvcmF0aW9uOidub25lJyxcbi8vICAgICBjb2xvcjonZ3JlZW4nXG4vLyB9XG5cbi8vIE5PVyBXRSBIQVZFIERFQ0lERUQgVE8gRkVUQ0ggVEhFIERBVEEgRlJPTSBUSEUgQVBJLiBOb3RoaW5nIGxpa2Ugc3RhdGljIHN0dWZmIHdvdWxkIHJlbWFpblxuLy8gY29uc3QgUG9zdExpbmsgPSAocHJvcHMpPT4oXG4vLyAgICAgPGxpIHN0eWxlPXtzdHlsaW5nTGlzdH0+XG4vLyAgICAgICAgIDxMaW5rIGFzPXtgL3AvdGl0bGU9JHtwcm9wcy5tYXNrfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gICAgICAgICAgICAgPGEgc3R5bGU9e2Jsb2dMaW5rc30+e3Byb3BzLnRpdGxlfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyApXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxMYXlvdXQ+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogPGgzPkxldCdzIFZpc2l0IG91ciBBYm91dCBQYWdlPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgc3R5bGU9e3tjb2xvcjpcIiMwMEZGMDBcIixmb250U2l6ZToxNX19PkFCT1VUIFBBR0U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgyPkJMT0cgTElOS1M6PC9oMj4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBXZSBhcmUgcGxhbm5pbmcgdG8gZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgQVBJLCBUVk1hemUgQVBJIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgcmVuZGVyIHRoZSBkYXRhIER5bmFtaWNhbGx5LCB0aGF0IHdpbGwgY29tZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNvIExldCdzIGRvIHRoYXQgOikgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOTyBMT05HRVIgU1RBVElDIFNUVUZGIDopXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3BhcmVudExpc3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TGluayBtYXNrPVwibGVhcm5pbmdcIiB0aXRsZT1cIkFib3V0IE92ZXJhbGwgTGVhcm5pbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TGluayBtYXNrPVwicHJvY2Vzc1wiIHRpdGxlPVwiQSBHcmFkdWFsIFByb2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TGluayBtYXNrPVwicGVhY2VcIiB0aXRsZT1cIk5vIFdoZXJlIElzIFBlYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dzLm1hcCgoe3Nob3d9KT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wLyR7c2hvdy5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSxhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbi8vIE5vdywgbGV0J3MgZGlzY3VzcyBzb21ldGhpbmcgYWJvdXQgZ2V0SW5pdGlhbFByb3BzIEFzeW5jaHJvbm91cyBmdW5jdGlvblxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKGBXRSBKVVNUIEZFVENIRUQgU09NRSBDT09MIERBVEEuIFRPVEFMIFNIT1dTIEFSRSAke2RhdGEubGVuZ3RofWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd3M6ZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/index.js */"));
      })));
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
//# sourceMappingURL=index.js.be3e6c9c14afc385d060.hot-update.js.map
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
        className: "jsx-4190009249"
      }, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-4190009249"
      }, this.props.shows.map(function (_ref) {
        var show = _ref.show;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: show.id,
          className: "jsx-4190009249"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          as: "/p/".concat(show.id),
          href: "/post?id=".concat(show.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          className: "jsx-4190009249"
        }, show.name)));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4190009249"
      }, "h1.jsx-4190009249,a.jsx-4190009249{font-family:'Times New Roman';color:red;}ul.jsx-4190009249{padding:0;margin:400px;}li.jsx-4190009249{list-style:none;margin:5px 0;}a.jsx-4190009249{-webkit-text-decoration:none;text-decoration:none;color:#ff0000;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-4190009249 a.jsx-4190009249:hover{color:orange;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VvQyxBQUc4RSxBQUlwQixBQUlNLEFBS0ssQUFNUixVQWRBLEdBZWhCLEdBWGdCLE9BSGhCLE1BSUEsQ0FUYSxVQUNiLFVBWWlCLGNBQ00sZ0RBQ3ZCIiwiZmlsZSI6Ii9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9HZW5lcmFsTGF5b3V0JztcbmltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbi8vIFdlJ2xsIHVzZSB0aGUgcXVlcnkgc3RyaW5nIHRvIHNob3cgb3VyIGR5bmFtaWMgY29udGVudFxuXG4vLyBjb25zdCBzdHlsaW5nTGlzdCA9IHtcbi8vICAgICBsaXN0U3R5bGU6J25vbmUnLFxuLy8gICAgIHBhZGRpbmc6MCxcbi8vICAgICBtYXJnaW46MCxcbi8vICAgICBtYXJnaW5Cb3R0b206MTAsXG4vLyAgICAgZm9udFNpemU6MTYsXG4vLyB9XG5cbi8vIGNvbnN0IHBhcmVudExpc3QgPSB7XG4vLyAgICAgbWFyZ2luOjAsXG4vLyAgICAgcGFkZGluZzowXG4vLyB9XG5cbi8vIGNvbnN0IGJsb2dMaW5rcyA9IHtcbi8vICAgICB0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG4vLyAgICAgY29sb3I6J2dyZWVuJ1xuLy8gfVxuXG4vLyBOT1cgV0UgSEFWRSBERUNJREVEIFRPIEZFVENIIFRIRSBEQVRBIEZST00gVEhFIEFQSS4gTm90aGluZyBsaWtlIHN0YXRpYyBzdHVmZiB3b3VsZCByZW1haW5cbi8vIGNvbnN0IFBvc3RMaW5rID0gKHByb3BzKT0+KFxuLy8gICAgIDxsaSBzdHlsZT17c3R5bGluZ0xpc3R9PlxuLy8gICAgICAgICA8TGluayBhcz17YC9wL3RpdGxlPSR7cHJvcHMubWFza31gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgICAgICAgIDxhIHN0eWxlPXtibG9nTGlua3N9Pntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0PiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIDxoMz5MZXQncyBWaXNpdCBvdXIgQWJvdXQgUGFnZTwvaDM+ICovfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIHN0eWxlPXt7Y29sb3I6XCIjMDBGRjAwXCIsZm9udFNpemU6MTV9fT5BQk9VVCBQQUdFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMj5CTE9HIExJTktTOjwvaDI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogV2UgYXJlIHBsYW5uaW5nIHRvIGZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEFQSSwgVFZNYXplIEFQSSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHJlbmRlciB0aGUgZGF0YSBEeW5hbWljYWxseSwgdGhhdCB3aWxsIGNvbWUgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTbyBMZXQncyBkbyB0aGF0IDopICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTk8gTE9OR0VSIFNUQVRJQyBTVFVGRiA6KVxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtwYXJlbnRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExpbmsgbWFzaz1cImxlYXJuaW5nXCIgdGl0bGU9XCJBYm91dCBPdmVyYWxsIExlYXJuaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExpbmsgbWFzaz1cInByb2Nlc3NcIiB0aXRsZT1cIkEgR3JhZHVhbCBQcm9jZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExpbmsgbWFzaz1cInBlYWNlXCIgdGl0bGU9XCJObyBXaGVyZSBJcyBQZWFjZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93cy5tYXAoKHtzaG93fSk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcC8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSxhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZjAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbi8vIE5vdywgbGV0J3MgZGlzY3VzcyBzb21ldGhpbmcgYWJvdXQgZ2V0SW5pdGlhbFByb3BzIEFzeW5jaHJvbm91cyBmdW5jdGlvblxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKGBXRSBKVVNUIEZFVENIRUQgU09NRSBDT09MIERBVEEuIFRPVEFMIFNIT1dTIEFSRSAke2RhdGEubGVuZ3RofWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd3M6ZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/index.js */"));
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
//# sourceMappingURL=index.js.82e64e00563a943995fa.hot-update.js.map
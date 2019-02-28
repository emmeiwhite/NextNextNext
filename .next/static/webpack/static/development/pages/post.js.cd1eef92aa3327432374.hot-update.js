webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GeneralLayout */ "./components/GeneralLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);





 // We are trying to use the GLOBAL STYLES

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3980281515"
  }, "We are just trying to style the stuff, just not focus on logic at all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3980281515"
  }, "ID PASSED: ", props.router.query.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3980281515" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\n                    This is our blog post.\n                    Yes. We can have a [link](/link).\n                    And we can have a title as well.\n\n                    ### This is a title\n\n                    And here's the content.\n                    "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3980281515"
  }, ".markdown{font-family:segoe ui;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9DLEFBRzZDLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixFQWQ3Qix1QkFlRSxNQVhhLFdBQ2IiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cblxuLy8gV2UgYXJlIHRyeWluZyB0byB1c2UgdGhlIEdMT0JBTCBTVFlMRVNcblxuY29uc3QgUG9zdCA9IHdpdGhSb3V0ZXIoXG4gICAgKHByb3BzKT0+KFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGg0PldlIGFyZSBqdXN0IHRyeWluZyB0byBzdHlsZSB0aGUgc3R1ZmYsIGp1c3Qgbm90IGZvY3VzIG9uIGxvZ2ljIGF0IGFsbCE8L2g0PlxuICAgICAgICAgICAgPGgyPklEIFBBU1NFRDoge3Byb3BzLnJvdXRlci5xdWVyeS5pZH08L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17IGBcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbiAgICAgICAgICAgICAgICAgICAgQW5kIHdlIGNhbiBoYXZlIGEgdGl0bGUgYXMgd2VsbC5cblxuICAgICAgICAgICAgICAgICAgICAjIyMgVGhpcyBpcyBhIHRpdGxlXG5cbiAgICAgICAgICAgICAgICAgICAgQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgICAgICAgICAgICAgYH0vPlxuICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+eyBgXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZG93bntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNlZ29lIHVpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3duIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubWFya2Rvd24gaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcblxuKVxuLy8gY29uc3QgUGFnZSA9IFxuLy8gICAgIChwcm9wcyk9Pihcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxQb3N0Lz5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBhZ2U7XG5cblxuLy8gbGV0J3MgZ2V0IHRoZSBkYXRhIGJlbG9uZ2luZyB0byB0aGUgcGFydGljdWxhciBpZCBmaXJzdCB1c2luZyB0aGUgZ2V0SW5pdGlhbFByb3BzLlxuXG5cbi8qXG5jb25zdCBQb3N0ID0gKHByb3BzKT0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz4gICBcbiAgICAgICBcbiAgICA8L0xheW91dD5cbilcblxuLy8gZ2V0SW5pdGlhbFByb3BzIG9mIG5leHQgcHJvdmlkZXMgYSBjYWxsYmFjayBjYWxsZWQgY29udGV4dCBvYmplY3QsIHdoaWNoIGhlbHBzIGluIGZldGNoaW5nIFxuLy8gdmFyaW91cyBhbW91bnQgb2YgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcS5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCl7XG4gICAgY29uc3Qge2lkfSA9IGNvbnRleHQucXVlcnk7XG4gICAgLy8gTm93IGJhc2VkIG9uIHRoZSBpZCwgd2UnbGwgbWFrZSB0aGUgQVBJIGNhbGwgYW5kIGdldCB0aGUgcmVsZXZhbnQgZGF0YSB0byBiZSBwYXNzZWQgaW50byB0aGUgXG4gICAgLy8gUG9zdCBDb21wb25lbnQgYW5kIHNob3cgaXQgYXMgcGVyIG91ciB3aXNoXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcbiAgICByZXR1cm57c2hvd307XG59XG4qL1xuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/post.js */"));
}); // const Page = 
//     (props)=>(
//         <Layout>
//             <Post/>
//         </Layout>
//     )
// export default Page;
// let's get the data belonging to the particular id first using the getInitialProps.

/*
const Post = (props)=>(
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>

        <img src={props.show.image.medium} />   
       
    </Layout>
)

// getInitialProps of next provides a callback called context object, which helps in fetching 
// various amount of data associated with the req.
Post.getInitialProps = async function(context){
    const {id} = context.query;
    // Now based on the id, we'll make the API call and get the relevant data to be passed into the 
    // Post Component and show it as per our wish

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`)
    return{show};
}
*/

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.cd1eef92aa3327432374.hot-update.js.map
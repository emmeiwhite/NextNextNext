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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "We are just trying to style the stuff, just not focus on logic at all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "ID PASSED: ", props.router.query.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-521325066" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\n                    This is our blog post.\n                    Yes. We can have a [link](/link).\n                    And we can have a title as well.\n\n                    ### This is a title\n\n                    And here's the content.\n                    "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "521325066"
  }, ".markdown{font-family:segoe ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzZDLHFCQUN4QiIsImZpbGUiOiIvaG9tZS9pbXJhbi9Eb2N1bWVudHMvZW1tZWlzb2Z0L3BhZ2VzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbExheW91dCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuXG4vLyBXZSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgR0xPQkFMIFNUWUxFU1xuXG5jb25zdCBQb3N0ID0gd2l0aFJvdXRlcihcbiAgICAocHJvcHMpPT4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDQ+V2UgYXJlIGp1c3QgdHJ5aW5nIHRvIHN0eWxlIHRoZSBzdHVmZiwganVzdCBub3QgZm9jdXMgb24gbG9naWMgYXQgYWxsITwvaDQ+XG4gICAgICAgICAgICA8aDI+SUQgUEFTU0VEOiB7cHJvcHMucm91dGVyLnF1ZXJ5LmlkfTwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgIFllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuICAgICAgICAgICAgICAgICAgICBBbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxuXG4gICAgICAgICAgICAgICAgICAgICMjIyBUaGlzIGlzIGEgdGl0bGVcblxuICAgICAgICAgICAgICAgICAgICBBbmQgaGVyZSdzIHRoZSBjb250ZW50LlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfS8+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3due1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Vnb2UgdWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcblxuKVxuLy8gY29uc3QgUGFnZSA9IFxuLy8gICAgIChwcm9wcyk9Pihcbi8vICAgICAgICAgPExheW91dD5cbi8vICAgICAgICAgICAgIDxQb3N0Lz5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBhZ2U7XG5cblxuLy8gbGV0J3MgZ2V0IHRoZSBkYXRhIGJlbG9uZ2luZyB0byB0aGUgcGFydGljdWxhciBpZCBmaXJzdCB1c2luZyB0aGUgZ2V0SW5pdGlhbFByb3BzLlxuXG5cbi8qXG5jb25zdCBQb3N0ID0gKHByb3BzKT0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz4gICBcbiAgICAgICBcbiAgICA8L0xheW91dD5cbilcblxuLy8gZ2V0SW5pdGlhbFByb3BzIG9mIG5leHQgcHJvdmlkZXMgYSBjYWxsYmFjayBjYWxsZWQgY29udGV4dCBvYmplY3QsIHdoaWNoIGhlbHBzIGluIGZldGNoaW5nIFxuLy8gdmFyaW91cyBhbW91bnQgb2YgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcS5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCl7XG4gICAgY29uc3Qge2lkfSA9IGNvbnRleHQucXVlcnk7XG4gICAgLy8gTm93IGJhc2VkIG9uIHRoZSBpZCwgd2UnbGwgbWFrZSB0aGUgQVBJIGNhbGwgYW5kIGdldCB0aGUgcmVsZXZhbnQgZGF0YSB0byBiZSBwYXNzZWQgaW50byB0aGUgXG4gICAgLy8gUG9zdCBDb21wb25lbnQgYW5kIHNob3cgaXQgYXMgcGVyIG91ciB3aXNoXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcbiAgICByZXR1cm57c2hvd307XG59XG4qL1xuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/post.js */")));
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
//# sourceMappingURL=post.js.4e9eb40756bb73947c0e.hot-update.js.map
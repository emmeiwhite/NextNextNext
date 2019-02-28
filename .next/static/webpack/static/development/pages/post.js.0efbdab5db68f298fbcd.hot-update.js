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
  }, ".markdown{font-family:segoe ui;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9DLEFBRzZDLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixFQWQ3Qix1QkFlRSxNQVhhLFdBQ2IiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcblxuXG4vLyBXZSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgR0xPQkFMIFNUWUxFU1xuXG5jb25zdCBQb3N0ID0gd2l0aFJvdXRlcihcbiAgICAocHJvcHMpPT4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDQ+V2UgYXJlIGp1c3QgdHJ5aW5nIHRvIHN0eWxlIHRoZSBzdHVmZiwganVzdCBub3QgZm9jdXMgb24gbG9naWMgYXQgYWxsITwvaDQ+XG4gICAgICAgICAgICA8aDI+SUQgUEFTU0VEOiB7cHJvcHMucm91dGVyLnF1ZXJ5LmlkfTwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXsgYFxuICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgIFllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuICAgICAgICAgICAgICAgICAgICBBbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxuXG4gICAgICAgICAgICAgICAgICAgICMjIyBUaGlzIGlzIGEgdGl0bGVcblxuICAgICAgICAgICAgICAgICAgICBBbmQgaGVyZSdzIHRoZSBjb250ZW50LlxuICAgICAgICAgICAgICAgICAgICBgfS8+XG4gICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57IGBcbiAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3due1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Vnb2UgdWk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuXG4pXG4vLyBjb25zdCBQYWdlID0gXG4vLyAgICAgKHByb3BzKT0+KFxuLy8gICAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICAgICAgPFBvc3QvPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICApXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG4vLyBsZXQncyBnZXQgdGhlIGRhdGEgYmVsb25naW5nIHRvIHRoZSBwYXJ0aWN1bGFyIGlkIGZpcnN0IHVzaW5nIHRoZSBnZXRJbml0aWFsUHJvcHMuXG5cblxuLypcbmNvbnN0IFBvc3QgPSAocHJvcHMpPT4oXG4gICAgPExheW91dD5cbiAgICAgICAgPGgxPntwcm9wcy5zaG93Lm5hbWV9PC9oMT5cbiAgICAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2UubWVkaXVtfSAvPiAgIFxuICAgICAgIFxuICAgIDwvTGF5b3V0PlxuKVxuXG4vLyBnZXRJbml0aWFsUHJvcHMgb2YgbmV4dCBwcm92aWRlcyBhIGNhbGxiYWNrIGNhbGxlZCBjb250ZXh0IG9iamVjdCwgd2hpY2ggaGVscHMgaW4gZmV0Y2hpbmcgXG4vLyB2YXJpb3VzIGFtb3VudCBvZiBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxLlxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KXtcbiAgICBjb25zdCB7aWR9ID0gY29udGV4dC5xdWVyeTtcbiAgICAvLyBOb3cgYmFzZWQgb24gdGhlIGlkLCB3ZSdsbCBtYWtlIHRoZSBBUEkgY2FsbCBhbmQgZ2V0IHRoZSByZWxldmFudCBkYXRhIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBcbiAgICAvLyBQb3N0IENvbXBvbmVudCBhbmQgc2hvdyBpdCBhcyBwZXIgb3VyIHdpc2hcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCk7XG4gICAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuICAgIHJldHVybntzaG93fTtcbn1cbiovXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/post.js */"));
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
//# sourceMappingURL=post.js.0efbdab5db68f298fbcd.hot-update.js.map
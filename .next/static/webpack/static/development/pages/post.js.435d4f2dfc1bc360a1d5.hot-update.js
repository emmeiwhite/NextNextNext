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
    className: "jsx-3843155951" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\n                    This is our blog post.\n                    Yes. We can have a [link](/link).\n                    And we can have a title as well.\n\n                    ### This is a title\n\n                    And here's the content.\n                    "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3843155951"
  }, ".markdown{font-family:segoe ui;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzZDLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixFQWQ3Qix1QkFlRSxNQVhhLFdBQ2IiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cblxuLy8gV2UgYXJlIHRyeWluZyB0byB1c2UgdGhlIEdMT0JBTCBTVFlMRVNcblxuY29uc3QgUG9zdCA9IHdpdGhSb3V0ZXIoXG4gICAgKHByb3BzKT0+KFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGg0PldlIGFyZSBqdXN0IHRyeWluZyB0byBzdHlsZSB0aGUgc3R1ZmYsIGp1c3Qgbm90IGZvY3VzIG9uIGxvZ2ljIGF0IGFsbCE8L2g0PlxuICAgICAgICAgICAgPGgyPklEIFBBU1NFRDoge3Byb3BzLnJvdXRlci5xdWVyeS5pZH08L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbiAgICAgICAgICAgICAgICAgICAgQW5kIHdlIGNhbiBoYXZlIGEgdGl0bGUgYXMgd2VsbC5cblxuICAgICAgICAgICAgICAgICAgICAjIyMgVGhpcyBpcyBhIHRpdGxlXG5cbiAgICAgICAgICAgICAgICAgICAgQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0vPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZG93bntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNlZ29lIHVpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3duIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubWFya2Rvd24gaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG5cbilcbi8vIGNvbnN0IFBhZ2UgPSBcbi8vICAgICAocHJvcHMpPT4oXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8UG9zdC8+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgIClcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBQYWdlO1xuXG5cbi8vIGxldCdzIGdldCB0aGUgZGF0YSBiZWxvbmdpbmcgdG8gdGhlIHBhcnRpY3VsYXIgaWQgZmlyc3QgdXNpbmcgdGhlIGdldEluaXRpYWxQcm9wcy5cblxuXG4vKlxuY29uc3QgUG9zdCA9IChwcm9wcyk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuICAgICAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cblxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+ICAgXG4gICAgICAgXG4gICAgPC9MYXlvdXQ+XG4pXG5cbi8vIGdldEluaXRpYWxQcm9wcyBvZiBuZXh0IHByb3ZpZGVzIGEgY2FsbGJhY2sgY2FsbGVkIGNvbnRleHQgb2JqZWN0LCB3aGljaCBoZWxwcyBpbiBmZXRjaGluZyBcbi8vIHZhcmlvdXMgYW1vdW50IG9mIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXEuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpe1xuICAgIGNvbnN0IHtpZH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIC8vIE5vdyBiYXNlZCBvbiB0aGUgaWQsIHdlJ2xsIG1ha2UgdGhlIEFQSSBjYWxsIGFuZCBnZXQgdGhlIHJlbGV2YW50IGRhdGEgdG8gYmUgcGFzc2VkIGludG8gdGhlIFxuICAgIC8vIFBvc3QgQ29tcG9uZW50IGFuZCBzaG93IGl0IGFzIHBlciBvdXIgd2lzaFxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG4gICAgcmV0dXJue3Nob3d9O1xufVxuKi9cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/post.js */")));
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
//# sourceMappingURL=post.js.435d4f2dfc1bc360a1d5.hot-update.js.map
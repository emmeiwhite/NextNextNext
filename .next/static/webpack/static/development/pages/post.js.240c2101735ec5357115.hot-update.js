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


// import Layout from '../components/GeneralLayout';
// import {withRouter} from 'next/router';
// import fetch from 'isomorphic-unfetch';
// import Markdown from 'react-markdown'
// We are trying to use the GLOBAL STYLES

/*
const Post = withRouter(
    (props)=>(
        <Layout>
            <h4>We are just trying to style the stuff, just not focus on logic at all!</h4>
            <h2>ID PASSED: {props.router.query.id}</h2>

            <div className="markdown">
                <Markdown source={ `
                    This is our blog post.
                    Yes. We can have a [link](/link).
                    And we can have a title as well.

                    ### This is a title

                    And here's the content.
                    `}/>
             </div>

                <style jsx global>{ `
                    .markdown{
                        font-family:segoe ui;
                    }

                    .markdown a {
                        text-decoration: none;
                        color: blue;
                      }
                 
                      .markdown a:hover {
                        opacity: 0.6;
                      }
                 
                      .markdown h3 {
                        margin: 0;
                        padding: 0;
                        text-transform: uppercase;
                      }
                    `}
                   
                </style>
        </Layout>
    )

)

*/
// const Page = 
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
// export default Post;




var Page = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3267370368"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3267370368" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n     "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3267370368"
  }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltcmFuL0RvY3VtZW50cy9lbW1laXNvZnQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSHNCLEFBRzRCLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixDQWQzQix3QkFlQSxNQVhhLFdBQ2IiLCJmaWxlIjoiL2hvbWUvaW1yYW4vRG9jdW1lbnRzL2VtbWVpc29mdC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xuLy8gaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbi8vIGltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcblxuXG4vLyBXZSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgR0xPQkFMIFNUWUxFU1xuLypcbmNvbnN0IFBvc3QgPSB3aXRoUm91dGVyKFxuICAgIChwcm9wcyk9PihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoND5XZSBhcmUganVzdCB0cnlpbmcgdG8gc3R5bGUgdGhlIHN0dWZmLCBqdXN0IG5vdCBmb2N1cyBvbiBsb2dpYyBhdCBhbGwhPC9oND5cbiAgICAgICAgICAgIDxoMj5JRCBQQVNTRUQ6IHtwcm9wcy5yb3V0ZXIucXVlcnkuaWR9PC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICAgICAgICAgIDxNYXJrZG93biBzb3VyY2U9eyBgXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXG4gICAgICAgICAgICAgICAgICAgIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiAgICAgICAgICAgICAgICAgICAgIyMjIFRoaXMgaXMgYSB0aXRsZVxuXG4gICAgICAgICAgICAgICAgICAgIEFuZCBoZXJlJ3MgdGhlIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgICAgIGB9Lz5cbiAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPnsgYFxuICAgICAgICAgICAgICAgICAgICAubWFya2Rvd257XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzZWdvZSB1aTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZG93biBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcmtkb3duIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG5cbilcblxuKi9cbi8vIGNvbnN0IFBhZ2UgPSBcbi8vICAgICAocHJvcHMpPT4oXG4vLyAgICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgICAgICA8UG9zdC8+XG4vLyAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgIClcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBQYWdlO1xuXG5cbi8vIGxldCdzIGdldCB0aGUgZGF0YSBiZWxvbmdpbmcgdG8gdGhlIHBhcnRpY3VsYXIgaWQgZmlyc3QgdXNpbmcgdGhlIGdldEluaXRpYWxQcm9wcy5cblxuXG4vKlxuY29uc3QgUG9zdCA9IChwcm9wcyk9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuICAgICAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cblxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+ICAgXG4gICAgICAgXG4gICAgPC9MYXlvdXQ+XG4pXG5cbi8vIGdldEluaXRpYWxQcm9wcyBvZiBuZXh0IHByb3ZpZGVzIGEgY2FsbGJhY2sgY2FsbGVkIGNvbnRleHQgb2JqZWN0LCB3aGljaCBoZWxwcyBpbiBmZXRjaGluZyBcbi8vIHZhcmlvdXMgYW1vdW50IG9mIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXEuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpe1xuICAgIGNvbnN0IHtpZH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIC8vIE5vdyBiYXNlZCBvbiB0aGUgaWQsIHdlJ2xsIG1ha2UgdGhlIEFQSSBjYWxsIGFuZCBnZXQgdGhlIHJlbGV2YW50IGRhdGEgdG8gYmUgcGFzc2VkIGludG8gdGhlIFxuICAgIC8vIFBvc3QgQ29tcG9uZW50IGFuZCBzaG93IGl0IGFzIHBlciBvdXIgd2lzaFxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG4gICAgcmV0dXJue3Nob3d9O1xufVxuKi9cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbExheW91dCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuXG5jb25zdCBQYWdlID0gIHdpdGhSb3V0ZXIoKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICA8aDE+e3Byb3BzLnJvdXRlci5xdWVyeS50aXRsZX08L2gxPlxuICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICA8TWFya2Rvd24gc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgYH0vPlxuICAgPC9kaXY+XG4gICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAubWFya2Rvd24ge1xuICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICB9XG5cbiAgICAgLm1hcmtkb3duIGEge1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgfVxuXG4gICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgIH1cblxuICAgICAubWFya2Rvd24gaDMge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbikpXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il19 */\n/*@ sourceURL=/home/imran/Documents/emmeisoft/pages/post.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=post.js.240c2101735ec5357115.hot-update.js.map
webpackHotUpdate("static/development/pages/post.js",{

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GeneralLayout */ "./components/GeneralLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);



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

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.a003c20f1f7e0f205925.hot-update.js.map
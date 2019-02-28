webpackHotUpdate("static/development/pages/post.js",{

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


 // const Post = withRouter(
//     (props)=>(
//         <div>
//             <h1>This Post Is About</h1>
//             <h2>{props.router.query.title}</h2>
//             <p>
//                 All that matters in the end is how you have been doing in this life.
//                 Life is one chance, We must not waste it for small WORLDLY GAINS.
//                 <br/>:)
//                 <br/>:)
//                 <br/>:)
//                 <br/>:)
//                 <br/>:)
//                 <br/>:)
//                 <br/>
//                 And yet again life started. I pray to GOD ALMIGHTY to help me out in my endeavours.
//             </p>
//         </div>
//     )
// )
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
//# sourceMappingURL=post.js.f201767e0d3a4cc8832d.hot-update.js.map
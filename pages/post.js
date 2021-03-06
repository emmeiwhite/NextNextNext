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
import Layout from '../components/GeneralLayout';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown'

const Page =  withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
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
  `}</style>
  </Layout>
))

export default Page;
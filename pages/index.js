
import Layout from '../components/GeneralLayout';
import React,{Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

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

class Home extends React.Component{
    render(){
        return(
            <Layout> 
                
                    {/* <h3>Let's Visit our About Page</h3> */}
                    
                    {/* <Link href="/about">
                        <button  style={{color:"#00FF00",fontSize:15}}>ABOUT PAGE</button>
                    </Link> */}


                        {/* <h2>BLOG LINKS:</h2> */}

                        {/* We are planning to fetch the data from the API, TVMaze API 
                          and render the data Dynamically, that will come from the server.
                          So Let's do that :)  */}
                        <h1>Batman TV Shows</h1>
                        {/*                           
                            NO LONGER STATIC STUFF :)
                        <ul style={parentList}>
                            <PostLink mask="learning" title="About Overall Learning" />
                            <PostLink mask="process" title="A Gradual Process" />
                            <PostLink mask="peace" title="No Where Is Peace" />
                        </ul>       */}

                        <ul>
                            {
                                this.props.shows.map(({show})=>(
                                    <li key={show.id}>
                                         <Link 
                                            as={`/p/${show.id}`}
                                            href={`/post?id=${show.id}`}>

                                                <a>{show.name}</a>
        
                                        </Link>

                                    </li>
                                   
                                ))
                            }
                        </ul>

                        <style jsx>{`
                                            h1,a{
                                                font-family:'Times New Roman';
                                                color:gray;
                                            }
                                            ul{
                                                padding:0;
                                                margin:0;
                                            }
                                            li{
                                                list-style:none;
                                                margin:5px 0;
                                            }
                                
                                            a{
                                                text-decoration:none;
                                                color:#333;
                                                transition:all 0.2s;
                                            }
                                
                                            li a:hover{
                                                color:#111;
                                            }
                                        `}
                                        </style>
            </Layout>
        )
    }
}

// Now, let's discuss something about getInitialProps Asynchronous function

Home.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');

    const data = await res.json();
    // console.log(data);

    console.log(`WE JUST FETCHED SOME COOL DATA. TOTAL SHOWS ARE ${data.length}`);

    return {
        shows:data
    }
}

export default Home;
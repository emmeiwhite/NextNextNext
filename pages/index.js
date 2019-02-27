
import Layout from '../components/GeneralLayout';
import React,{Component} from 'react';
import Link from 'next/link';

// We'll use the query string to show our dynamic content

const stylingList = {
    listStyle:'none',
    padding:0,
    margin:0,
    marginBottom:10,
    fontSize:16,
}

const parentList = {
    margin:0,
    padding:0
}

const blogLinks = {
    textDecoration:'none',
    color:'green'
}

const PostLink = (props)=>(
    <li style={stylingList}>
        <Link as={`/p?title=${props.mask}`} href={`/post?title=${props.title}`}>
            <a style={blogLinks}>{props.title}</a>
        </Link>
    </li>
)

class Home extends React.Component{
    render(){
        return(
            <Layout> 
                    <h1>It's the Home Page.</h1>
                    <h3>Let's Visit our About Page</h3>
                    
                    <Link href="/about">
                        <button  style={{color:"#00FF00",fontSize:15}}>ABOUT PAGE</button>
                    </Link>

                        <h2>BLOG LINKS:</h2>
                        <ul style={parentList}>
                            <PostLink mask="learning" title="About Overall Learning" />
                            <PostLink mask="process" title="A Gradual Process" />
                            <PostLink mask="peace" title="No Where Is Peace" />
                        </ul>      
            </Layout>
        )
    }
}


export default Home;
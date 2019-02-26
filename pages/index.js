// console.log("HELLO EVERYBODY !!!");

import React,{Component} from 'react';
import Link from 'next/link';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>It's the Home Page.</h1>
                <h3>Let's Visit our About Page</h3>
                <Link href="/about"  style={{color:"#00FF00",fontSize:15}}>
                    <a>ABOUT PAGE</a>
                </Link>
            </div>
        )
    }
}


export default Home;
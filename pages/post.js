import Layout from '../components/GeneralLayout';
import {withRouter} from 'next/router';


const Post = withRouter(
    (props)=>(
        <div>
            <h1>This Post Is About</h1>
            <h2>{props.router.query.title}</h2>

            <p>
                All that matters in the end is how you have been doing in this life.
                Life is one chance, We must not waste it for small WORLDLY GAINS.
        
                <br/>:)
                <br/>:)
                <br/>:)
                <br/>:)
                <br/>:)
                <br/>:)

                <br/>
                And yet again life started. I pray to GOD ALMIGHTY to help me out in my endeavours.
              
            </p>
        </div>
    )

)
const Page = 
    (props)=>(
        <Layout>
            <Post/>
        </Layout>
    )


export default Page;
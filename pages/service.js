import Layout from '../components/GeneralLayout';
import Link from 'next/link';
import Post from './post';
// Let's try to style our Service Component using styled-jsx

// We'll not fetch data from any at this moment. we can either create one variable object or
// we can return the data from a function.


const getServices = ()=>{
    return [
        {id:'front-end',name:'Learn Front End'},
        {id:'back-end',name:'Learn Back End'},
        {id:'no-end',name:'Learn No End'},
    ]
}


// Let's use PostLink Component instead :) Let's see how the behaviour changes

const ServiceLink = ({service})=>(
    <li>
        <Link as={`/p/${service.id}`} href={`/post?id=${service.id}`}>
            <a>{service.name}</a>
        </Link>

        {/* // We'll need to style the Component here only before using it in other component. */}

        <style jsx>{`
            li{
                list-style:none;
                margin:5px 0;
            }

            a{
                text-decoration:none;
                color:#00ff00;
                transition:all 0.2s;
            }

            li a:hover{
                color:orange;
            }
        `}
        </style>
    </li>

);

export default ()=>(
    <Layout>
        <h1>Services We Offer</h1>
        <ul>
            {
                getServices().map((service)=>{
                    return(
                      <ServiceLink key={service.id} service={service}/>
                    )
                })
            }

          
        </ul>

        <style jsx>{`
            h1,a{
                font-family:'Times New Roman';
                color:red;
            }

            ul{
                padding:0;
                margin:0;
            }
        `}
        </style>
    </Layout>
)
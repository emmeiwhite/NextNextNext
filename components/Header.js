import Link from 'next/link';



const headerDiv = {
    margin:0,
    padding:20,
    background:'#000000',
    marginBottom:20
}

const stylingLink = {
   marginRight:40,
   textDecoration:'none',
   color:'white'
}

const Header = ()=>( 
        <div style={headerDiv}>
            <Link href="/index">
                <a style={stylingLink}>Home</a>
            </Link>

            <Link href="/about">
                <a style={stylingLink}>About</a>
            </Link>

            <Link href="/service">
                <a style={stylingLink}>Services</a>
            </Link>
        </div>
 
)

export default Header;
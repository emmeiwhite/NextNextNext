import Header from './Header';

const commonCSS = {
    margin:20,
    padding:20,
    border:"1px solid #00FF00"
}
const Layout = (props)=>(
    <div style={commonCSS}>
        <Header />
        {props.children}
    </div>
)

export default Layout;
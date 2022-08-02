import '../app-header/app-header.css'
import { Link } from "react-router-dom";

const AppFooter = (props) => {

    const { goods } = props;

        return (
        <footer className='footer'>
            <nav className='footer-nav'>
            <Link to="/*"  className='footer-nav_item'>Coffee house</Link>
            <Link to="/our-coffee-page" state={{goods}} className='footer-nav_item'>Our coffee</Link> 
            <Link to="/for-your-pleasure-page" state={{goods}} className='footer-nav_item'>For your pleasure</Link>
            </nav>
        </footer>
    )
}


export default AppFooter;

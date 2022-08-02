import './app-header.css';
import '../for-your-pleasure-page/for-your-pleasure-page.css'
import { Link } from "react-router-dom";


 const AppHeader = (props) => {
 
  const { goods, password } = props;
  

  if(password == 'main') {
    return (
      <header className='header'>
        <nav className='header-nav'> 
             <Link to="/*" className='header-nav_item'>Coffee house</Link>
             <Link to="/our-coffee-page" state={{goods}} className='header-nav_item'>Our coffee</Link> 
             <Link to="/for-your-pleasure-page" state={{goods}}  className='header-nav_item'>For your pleasure</Link>
        </nav>
        <div className="header-leadingtext">
              <h1>Everything You Love About Coffee</h1>
              <h2>We makes every day full of energy and taste</h2>
              <h2>Want to try our beans?</h2>
              <Link to="/for-your-pleasure-page" state={{goods}} > <button className="header-button"> More </button> </Link>
         </div>
       </header>
                 
    )
  };
  
      if(password == 'pleasure') {       
          return (
            <header className="header header__pleasure">
                 <nav className='header-nav'> 
                    <Link to="/*" className='header-nav_item'>Coffee house</Link>
                    <Link to="/our-coffee-page" state={{goods}}  className='header-nav_item'>Our coffee</Link> 
                    <Link to="/for-your-pleasure-page" state={{goods}}   className='header-nav_item'>For your pleasure</Link>
                 </nav>
                 <div className="header-leadingtextpleasure">
                    <h1>For your pleasure</h1>
                 </div>
            </header>
          )
      };

      if(password == 'goodPage'){
        return (
          <header className="header header__gooditem">
                    <nav className='header-nav'> 
                    <Link to="/*" className='header-nav_item'>Coffee house</Link>
                    <Link to="/our-coffee-page" state={{goods}} className='header-nav_item'>Our coffee</Link> 
                    <Link to="/for-your-pleasure-page"  state={{goods}}  className='header-nav_item'>For your pleasure</Link>
                    </nav>
                    <div className="header-leadingtext__gooditem">
                      <h1>Our Coffee</h1>
                    </div>
          </header>
        )
      }
    }


  export default AppHeader;
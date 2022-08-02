import '../good-item-page/good-item-page.css'
import AppFooter from "../app-footer/app-footer";
import AppHeader from '../app-header/app-header';
import { useLocation } from 'react-router-dom';


const GoodItemPage = () => {

    let location = useLocation();
    let props = location.state.props; 
    
    if(location.state.props.goods.goods) {
      var goods=location.state.props.goods.goods;
    } else {
      var goods = location.state.props.goods;
    };

   return (
      <>
          <AppHeader password={'goodPage'} goods={goods}/>
          <div className="gooditem-info">
            <img src={props.imginfo? props.imginfo : props.img} alt={props.name} className="gooditem-info__img"/>
            <div className="info-about">
              <h2 className="info-abouttext">About it</h2>
              <div className="info-maintext info-about">
                <p>Country: {props.country}</p>
                <p>Description: {props.about}</p>
                <p>Price: <span className="info-price">{props.price} </span></p>
              </div>
            </div>
          </div>
          <AppFooter/>
      </>
   )
}
  

  export default GoodItemPage;
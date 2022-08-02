import '../for-your-pleasure-page/for-your-pleasure-page.css';
import './our-coffee-page.css';
import AppFooter from "../app-footer/app-footer";
import BestCoffeeList from '../best-coffee-list/best-coffee-list';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import AppHeader from '../app-header/app-header';
import AppFilter from '../app-filter/app-filter';
import SearchItem from '../search-item/search-item';
import AppInfoAbout from '../app-infoabout/app-infoabout';


export default function OurCoffeePage() {
  let location = useLocation(); 
  const goods = location.state.goods;

  const [filterGoods, setFilterGoods] = useState(goods);

  function showFilter(country) {
    
    switch(country) {
        case 'Brasil' : 
        setFilterGoods (goods.filter(item => (item.country === "Brasil")));
          break;
        case 'Kenya' :
          setFilterGoods (goods.filter(item => (item.country === 'Kenya')));
          break;
        case 'Columbia' :
          setFilterGoods (goods.filter(item => (item.country === 'Columbia')));
          break;
        case 'All' :
          setFilterGoods (goods);
          break;
        default:
          return  goods;
    }
  };


 function showLookingfor (value) {
     setFilterGoods (goods.filter(item => (item.name.toUpperCase().match(value.toUpperCase()))));
 };

    return (
        <>
        <AppHeader password={'goodPage'} goods={goods}/>
        <AppInfoAbout  password={'goodPage'}/>
          <div className='searchFilter-wrapper'>
            <SearchItem showLookingfor={showLookingfor}/>
            <AppFilter showFilter={showFilter}/>
          </div>
          <BestCoffeeList goods={filterGoods} />
          <AppFooter goods={goods}/> 
          </>
    )
}

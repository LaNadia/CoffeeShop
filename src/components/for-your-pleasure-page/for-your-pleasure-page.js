import './for-your-pleasure-page.css';
import AppFooter from "../app-footer/app-footer";
import BestCoffeeList from '../best-coffee-list/best-coffee-list';
import { useLocation } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import AppInfoAbout from '../app-infoabout/app-infoabout';



export default function ForYourPleasurePage() {
  let location = useLocation(); 
  const goods = location.state.goods;
    return (
        <>
        <AppHeader password={'pleasure'} goods={goods}/>
        <AppInfoAbout password={'pleasure'}/>
        <BestCoffeeList goods={{goods}} />
        <AppFooter goods={goods}/>              
        </>
    );
  }

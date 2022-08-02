import { Component } from "react";
import './App.css';
import BestCoffeeList from '../best-coffee-list/best-coffee-list';
import AppHeader from '../app-header/app-header'
import AppFooter from "../app-footer/app-footer";



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        best : [
            {name: "Solimo Coffee Beans 2 kg", price: "10.73$", img: "/img/best/best_solimo.svg", country: "Brasil",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            id: 1},
            {name: "Presto Coffee Beans 1 kg", price: "15.99$", img: "/img/best/best_presto.svg", country: "Brasil",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            id: 2},
            {name: "AROMISTICO Coffee 1 kg", price: "6.99$", img: "/img/best/best_aromistico.svg", country: "Brasil",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            id: 3}
        ], 

        goods: [
            {name: "AROMISTICO Brasil 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Brasil",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 1},
            {name: "AROMISTICO Kenya 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Kenya",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 2},
            {name: "AROMISTICO Coffee 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Columbia",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 3},
             {name: "AROMISTICO Coffee 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Columbia",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 4},
             {name: "AROMISTICO Coffee 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Columbia",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 5},
             {name: "AROMISTICO Coffee 1 kg", price: "6.99$", img: "/img/good_items/items_about/items_coffee_EXAMPLE.svg", 
             imginfo: "/img/good_items/items_about/items_aromistico.svg", country: "Columbia",
             about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
             id: 6}
        ],
    }
  }


  render() {

    const {best} = this.state;
    const {goods} = this.state;
    

    return(
        <div className="body-wrapper">  
          <AppHeader goods={goods} password={'main'}/>
          <main>
                <section className="info">
                  <span className="info-leadingtext">About Us</span>
                  <div className="info-maintext">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                  </div>
                  <div className="info-maintext">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                  </div>
                </section>
                <section className="best">
                     <span className="best-leadingtext"> Our best</span>
                   <BestCoffeeList best={best} goods={goods}/>    
                </section>              
            </main>
         <AppFooter goods={goods}/>
        </div>
    )
  }
}

export default App;

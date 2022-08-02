import './best-coffee-item.css';
import { Link } from 'react-router-dom';

const BestCoffeeItem = (props)  => {

    const {name, price, img, id, goods} = props;
  
    return (
     <Link to={`/good-item-page/${id}`} state={{ props, goods }} className="no-decoration">
        <div className='best-item'>
            <img src={img} alt={name}/>
            <span className='best-item__name'>{name}</span> 
            <span className='best-item__price'>{price}</span>
        </div>
      </Link>
    )
  }

  export default BestCoffeeItem;
  
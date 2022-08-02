import './search-item.css';
import '../app-filter/app-filter.css'

const SearchItem = (props)  => {
    
    return (
        <div className='search-box'>
             <div className='search-box__text'>Looking for</div>
             <input 
                type="text"
                className= 'filter-button'
                placeholder = "start typing here..."
                onChange = {(e) => props.showLookingfor(e.target.value)}
            /> 
                    
        </div>
    )
    
  }

  export default SearchItem;
  
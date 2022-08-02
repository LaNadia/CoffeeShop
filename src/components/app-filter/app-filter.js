import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {country: 'Brasil'},
        {country: 'Kenya'},
        {country: 'Columbia'},
        {country: 'All'}
    ];

    const buttons = buttonsData.map(({country}) => {

        return (
            <button 
                className='filter-button'
                type="button"
                key={country}
                onClick={() => props.showFilter(country)}
                >
                {country}
            </button>
        )
    })
  
        return (
            <div className='filter'>
                <div className='filter-text'>or filter</div>
                <div className="filter-btn__group">
                    {buttons}
                </div> 
        </div>
        )    
}

export default AppFilter;
import BestCoffeeItem from '../best-coffee-item/best-coffee-item';

const BestCoffeeList = (props) => {

    if (props.best && props.goods) {
        var array = props.best;
    };
    if (props.goods && !props.best) {
        if(props.goods.goods) {
             var array = props.goods.goods;
        } else {
            var array = props.goods;
        }
    }

    const elements = array.map((item) => {
        const {...itemProps} = item;
        const {id} = item;
            return (
                <BestCoffeeItem key={id} {...itemProps} goods={props.goods}/>
            )
    })

    return (
             <ul className="best-list">
                {elements}
            </ul> 
    )

}

export default BestCoffeeList;
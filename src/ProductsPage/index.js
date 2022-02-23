import React from "react";
import { orderByPrice, getPriceColor } from "./helpers";

export default class ProductsPage extends React.Component
{
    
    state = {
        products: [
            {
                id: 1,
                name: 'Cachopo',
                price: 30
            },
            {
                id: 2,
                name: 'Navajas',
                price: 25
            },
            {
                id: 3,
                name: 'Chorizo a la sidra',
                price: 15
            }
    ]
}

    changeOrderByPrice = () => {
        let products = orderByPrice(this.state.products)
        this.setState({products})
    }
    
    

    render ()
    {
        return (
            <>
                <h1>Products</h1>
                <button onClick={this.changeOrderByPrice}>Change order</button>
                {this.state.products.map( product => (
                    <div key={product.id} style={{ color: getPriceColor( product.price ) }}>
                        {product.name} - {product.price}
                    </div>
                ))}
            </>
        )
    }
}
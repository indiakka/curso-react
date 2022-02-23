export const orderByPrice = products =>
{
    let productsToSort =[...products]
    productsToSort.sort( ( product1, product2 ) => product1.price - product2.price )
    return productsToSort
}

export const getPriceColor = price =>
    {
        let color='green'
        if ( price > 25 )
        {
            color = 'red'
        } else if (price > 15 && price <= 25)
        {
            color= 'orange'
        }

        return color
    }
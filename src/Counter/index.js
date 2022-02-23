import React, { useEffect, useState } from "react";
import Title from '../Title'
import Button from '../Button'

const Counter = () =>
{
    const [ count, setCount ] = useState( 0 )
    
    const handleChange = action =>
    { 
        
        setCount(action === 'increment' ? count + 1 : count - 1) 
        
    }
    
    if (count >1) throw new Error ('ooops')

    return (
        <> 
            <Title text={count} />
            <Button onPress={() => handleChange( 'increment' ) } label='Increment'/>
            <Button onPress={() => handleChange('decrement')} label='Decrement'/>
        </> 
    )
}

export default Counter
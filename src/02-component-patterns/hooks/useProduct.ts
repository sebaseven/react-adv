import { useEffect, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    onChange?: ( args : OnChangeArgs)=> void;
    product: Product;
    value?: number;

}
export const useProduct = ( {onChange, product, value=0}: useProductArgs ) => {
    const [counter, setCounter] = useState(value)
    const increaseByOne = (value:number) => {
        const newValue =  Math.max(counter + value,0)
        setCounter( newValue )
        onChange?.({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    

    return { counter, increaseByOne }
}
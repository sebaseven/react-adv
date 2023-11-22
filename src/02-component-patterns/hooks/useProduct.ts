import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    onChange?: ( args : OnChangeArgs)=> void;
    product: Product;
    value?: number;

}
export const useProduct = ( {onChange, product, value=0}: useProductArgs ) => {
    const [counter, setCounter] = useState(value)
    const isControlled = useRef(!!onChange)
    const increaseByOne = (value:number) => {
        
        if( isControlled.current && onChange) {
            return onChange({ count: value , product})
        }

        const newValue =  Math.max(counter + value,0)
        setCounter( newValue )
        onChange?.({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    

    return { counter, increaseByOne }
}
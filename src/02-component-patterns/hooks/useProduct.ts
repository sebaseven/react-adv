import { useEffect, useRef, useState } from 'react'
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    onChange?: ( args : OnChangeArgs )=> void;
    product: Product;
    value?: number;
    initialValues?: InitialValues;    
}
export const useProduct = ( { onChange, product, value=0,initialValues }: useProductArgs ) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || value )

    const inMounted = useRef(false)

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    const increaseByOne = (value:number) => {
        let newValue =  Math.max(counter + value, 0)
        if (initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter( newValue )
        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        if (!inMounted.current) return
        setCounter(value)
    }, [value])
    
    useEffect(() => {
        inMounted.current = true
        return () => {
            inMounted.current = false
        }
    })

    return { 
        counter, 
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,

        increaseByOne , 
        reset
     }
}
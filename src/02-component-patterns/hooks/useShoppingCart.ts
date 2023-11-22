import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: {count: number, product: Product} ) => {
       
        setShoppingCart( oldShoppiongCart => {
            //si llega a cero saco ese objeto del carrito
            if( count === 0 ) {
                const { [product.id]: deletedProduct, ...rest } = shoppingCart;
                return {
                    ...rest
                }
            }
            return {
                ...oldShoppiongCart,
                [product.id]: {
                    ...product,
                    count
                }
            }
        })
    }
    return {  onProductCountChange, shoppingCart }
}

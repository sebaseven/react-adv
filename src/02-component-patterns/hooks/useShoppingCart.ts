import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: {count: number, product: Product} ) => {
       
        setShoppingCart( oldShoppiongCart => {
            const productInCart: ProductInCart = oldShoppiongCart[product.id] || { ...product, count: 0 }
            if (Math.max( productInCart.count + count, 0 ) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppiongCart,
                    [product.id]: productInCart
                }
            }
            // Borrar el producto del carrito
            const { [product.id]: deletedProduct, ...rest } = oldShoppiongCart;
            return rest
            
        })
    }
    return {  onProductCountChange, shoppingCart }
}

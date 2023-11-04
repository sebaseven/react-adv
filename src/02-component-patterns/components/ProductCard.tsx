import { createContext, ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

const { Provider } = ProductContext;
export const ProductCard = ({ children, product, className, style }: Props) => {

  const { counter, increaseByOne } = useProduct()

  return (
    <Provider value={{
      counter,
      increaseByOne,
      product
    }}>
      <div 
      style={style}
      className={`${styles.productCard} ${className}`}
      >
        {children}
      </div>
    </Provider>
  )
}

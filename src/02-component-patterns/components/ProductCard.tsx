import { createContext, ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const { Provider } = ProductContext;
export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

  const { counter, increaseByOne } = useProduct( { 
    onChange, 
    product,
    value
  } )

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

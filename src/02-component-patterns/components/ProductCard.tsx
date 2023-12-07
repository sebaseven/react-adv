import { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const { Provider } = ProductContext;
export const ProductCard = ({ children, product, className, style, onChange, value ,initialValues }: Props) => {

  const { counter, increaseByOne ,maxCount, isMaxCountReached, reset } = useProduct( { 
    onChange, 
    product,
    value,
    initialValues
  } )

  return (
    <Provider value={{
      counter,
      increaseByOne,
      product,
      maxCount
    }}>
      <div 
      style={style}
      className={`${styles.productCard} ${className}`}
      >
        { children(
          {
            count: counter,
            isMaxCountReached,  
            increaseByOne,
            product,
            maxCount,
            reset
          }
        ) }
      </div>
    </Provider>
  )
}

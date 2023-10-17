import { useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';
export const ProductButtons = () => {

    const { increaseByOne, counter } = useContext(ProductContext)
  
    return (
      <div className={ styles.buttonsContainer }>
              <button
                  className={ styles.buttonMinus }
                  onClick={ () => increaseByOne( -1 ) }> - </button>
  
              <div className={ styles.countLabel }> { counter } </div>
  
              <button
                  className={ styles.buttonAdd }
                  onClick={ () => increaseByOne( +1 ) }> + </button>
          </div>
    )
  }
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

const product = products[0];
export const ShoppingPage = () => {

   
  return (
    <div>
            <h1>
                Shopping Store
            </h1>
        <hr />
            <ProductCard 
                product={ product }
                key={product.id}
                initialValues = {{
                    count: 4,
                    // maxCount: 10,
                }}
            >
                {
                    ({reset,isMaxCountReached,increaseByOne,maxCount,count}) => (
                        <>
                            <ProductImage  />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
 
            </ProductCard>
                    
    </div>
  )
}

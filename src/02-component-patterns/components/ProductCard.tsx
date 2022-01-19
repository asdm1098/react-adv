import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product } from '../interfaces/interfaces';


export const ProductContext = createContext({ } as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    className?: string;
    children?: ReactElement | ReactElement[]; 
    product: Product;
    style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProducts();

    return (
        <Provider value={{ 
            counter, increaseBy, product
        }}>
            <div 
                className={ `${styles.productCard} ${ className }` }
                style={ style }    
            >
                {
                    children
                }
            </div>
        </Provider>
    )
}
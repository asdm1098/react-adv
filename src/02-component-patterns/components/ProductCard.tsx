import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({ } as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProducts();

    return (
        <Provider value={{ 
            counter, increaseBy, product
        }}>
            <div className={ styles.productCard }>
                {
                    children
                }
            </div>
        </Provider>
    )
}
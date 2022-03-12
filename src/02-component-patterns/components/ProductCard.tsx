import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product, onChangeArgs, InitialValues, productCardHandlers } from '../interfaces/interfaces';


export const ProductContext = createContext({ } as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    className?: string;
    // children?: ReactElement | ReactElement[];
    children: (args: productCardHandlers) => JSX.Element;
    product: Product;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
    = useProducts({ onChange, product, value, initialValues });
    return (
        <Provider value={{ 
            counter, increaseBy, product, maxCount
        }}>
            <div 
                className={ `${styles.productCard} ${ className }` }
                style={ style }    
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
}
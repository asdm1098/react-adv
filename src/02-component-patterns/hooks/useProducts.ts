import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);
    
    const increaseBy = ( value: number ) => {
        let maxCount = initialValues?.maxCount;


        let newValue = Math.max( counter + value, 0 );
        // Solucion profe
        // if (maxCount) {
        //     newValue = Math.min( newValue, maxCount);
        // }
        // setCounter(newValue);

        // Mi solución 
        setCounter( maxCount ? Math.min(newValue, maxCount) : newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter( value );
    }, [value]);

    useEffect(() => {
      isMounted.current = true;
    }, []);
    

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
};
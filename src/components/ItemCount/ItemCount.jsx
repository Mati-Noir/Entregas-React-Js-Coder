import './ItemCount.css';
import React, {useEffect, useState} from 'react';

export const ItemCount = ({ inicial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(inicial));

    const quitarCantidad = () => {
        setCount(count - 1);
    }

    const agregarCantidad = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(count));
    }, [inicial])

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={quitarCantidad}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={agregarCantidad}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
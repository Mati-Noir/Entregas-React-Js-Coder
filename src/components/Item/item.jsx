import './item.css';
import React from 'react';

const Item = ({info}) => {
    return (
        <div className="item">
            <img src={info.imagen} alt={info.nombre} className="imagen-item"/>
            <h3 className='item-texto'>{info.nombre}</h3>
            <h3 className='item-texto'>AR${info.precio}</h3>
        </div>
    );
}

export default Item;
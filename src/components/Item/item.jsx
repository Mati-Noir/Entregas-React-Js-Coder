import './item.css';
import React, { useContext } from 'react';

const Item = ({info}) => {
    return (
        <div className="item">
            <img src={info.imagen} alt={info.nombre} className="imagen-item"/>
            <h3 className='item-texto'>{info.nombre}</h3>
            <h4 className='item-texto'>AR${info.precio}</h4>
        </div>
    );
}

export default Item;
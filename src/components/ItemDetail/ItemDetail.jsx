import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {

  const navegar = useNavigate();

  const {agregarProducto} = useCartContext();

  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades`);
    agregarProducto(item, cantidad);
  }

  return(
      <div className="estructura-detail">
              <img src={item.imagen} alt={item.nombre} />
              <h2>{item.nombre}</h2>
              <h2>AR${item.precio}</h2>
              <p>{item.descripcion}</p>
              <h3>{item.categoria}</h3>

              <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
              <button className='Botones-Detalle' onClick={() => navegar('/')}>Seguir Comprando</button>
              <button className='Botones-Detalle' onClick={() => navegar('/cart')}>Completar mi compra</button>
      </div>
  )
}

export default ItemDetail;
import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({data}) => {

  const navegar = useNavigate();

  const {agregarProducto} = useCartContext();

  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades`);
    agregarProducto(data, cantidad);
  }

  return(
      <div className="estructura-detail">
              <img src={data.imagen} alt={data.nombre} />
              <h2>{data.nombre}</h2>
              <h2>AR${data.precio}</h2>
              <p>{data.descripcion}</p>
              <h3>{data.categoria}</h3>

              <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
              <button className='Botones-Detalle' onClick={() => navegar('/')}>Seguir Comprando</button>
              <button className='Botones-Detalle' onClick={() => navegar('/cart')}>Completar mi compra</button>
      </div>
  )
}

export default ItemDetail;
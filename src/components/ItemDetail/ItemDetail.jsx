import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {

  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades`);
  }

  return(
      <div className="estructura-detail">
              <img src={item.imagen} alt={item.nombre} />
              <h2>{item.nombre}</h2>
              <h2>AR${item.precio}</h2>
              <p>{item.descripcion}</p>
              <h3>{item.categoria}</h3>

              <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
      </div>
  )
}

export default ItemDetail;
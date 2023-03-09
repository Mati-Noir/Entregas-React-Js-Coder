import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/ItemCart';

const Cart = () => {
  const { cart, precioTotal } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Volver a productos</Link>
      </>
    );
  }

  return (
    <>
      {
        cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
      }
      <p>
        total: {precioTotal()}
      </p>
    </>
  )
}

export default Cart;
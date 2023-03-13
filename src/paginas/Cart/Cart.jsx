import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/ItemCart';
import { useState } from 'react';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, precioTotal } = useCartContext();

  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();

    const querySnapshot = collection(db, 'orders');
    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
      productos: cart.map((producto) => {
        return {
          nombre: producto.nombre,
          precio: producto.precio,
          id: producto.id,
          cantidad: producto.cantidad,
        };
      }),
      total: cart.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0),

    })
      .then((response) => {
        console.log(response.id);
        alert(`Orden con el id:${response.id} ha sido creada`);
        updateStocks(db);
      })
      .catch((error) => console.log(error));
  };
 
  const updateStocks = (db) => {
    cart.forEach((producto) => {
      const querySnapshot = doc(db, 'productos', producto.id);

      updateDoc(querySnapshot, {
        stock: producto.stock - producto.cantidad,
      })
        .then(() => {
          alert('El stock de los productos ha sido actualizado');
        })
        .catch((error) => console.log(error));
    });
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

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

      <div>
        <form className="cartForm">
          <input
            name="name"
            type="text"
            placeholder="nombre "
            value={formValue.name}
            onChange={handleInput}
          />
          <input
            name="phone"
            type="text"
            placeholder="telefono "
            value={formValue.phone}
            onChange={handleInput}
          />
          <input
            name="email"
            type="email"
            placeholder="email "
            value={formValue.email}
            onChange={handleInput}
          />
          <button onClick={createOrder}>Completar compra</button>
        </form>
      </div>

    </>
  )
}

export default Cart;
import React from "react";
import './ItemCart.css';
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ producto }) => {
    const { eliminarDelCarrito } = useCartContext();
    return (
        <div className="itemCart">
            <img src={producto.imagen} alt={producto.nombre}/>
            <div>
                <h3>Titulo: {producto.nombre}</h3>
                <h5>Cantidad: {producto.cantidad}</h5>
                <h4>Precio x unidad: AR${producto.precio}</h4>
                <h5>Subtotal: {producto.cantidad * producto.precio}</h5>
                <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
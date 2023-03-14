import React from "react";
import './ItemCart.css';
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ producto }) => {
    const { eliminarDelCarrito } = useCartContext();
    return (
        <div className="itemCart">
            <img src={producto.imagen} alt={producto.nombre}/>
            <div className="datos-cart">
                <h3>Titulo: {producto.nombre}</h3>
                <h4>Cantidad: {producto.cantidad}</h4>
                <h4>Precio x unidad: AR${producto.precio}</h4>
                <h4>Subtotal: {producto.cantidad * producto.precio}</h4>
                <button className="eliminar" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}

export default ItemCart;
/* import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});

    const agregarProducto = (item, cantidad) => {
        const producto = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            descripcion: item.descripcion,
            imagen: item.imagen,
            categoria: item.categoria,
            cantidad: cantidad,
        };
        setCart([...cart,producto])
    };

    const vaciarCarrito = () => setCart([]);

    const estaEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;

    const eliminarDelCarrito = (id) => setCart(cart.filter(product => product.id !== id));

    return <CartContext.Provider value={{cart, agregarProducto, vaciarCarrito, estaEnCarrito, eliminarDelCarrito}}>{children}</CartContext.Provider>
};

export default CartProvider; */
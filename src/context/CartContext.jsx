import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad } : producto
            }));
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }
    const precioTotal = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);
    
    const vaciarCarrito = () => setCart([]);

    const estaEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;

    const eliminarDelCarrito = (id) => setCart(cart.filter(producto => producto.id !== id));

    return (
        <CartContext.Provider value={{
            agregarProducto,
            vaciarCarrito,
            estaEnCarrito,
            eliminarDelCarrito,
            totalProductos,
            precioTotal,
            cart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
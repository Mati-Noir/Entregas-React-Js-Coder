import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const {totalProductos} = useCartContext();
    return (
        <>
            <i className="bi bi-cart3"></i>
            <span>{totalProductos() || ''}</span>
        </>
    );
}

export default CartWidget;
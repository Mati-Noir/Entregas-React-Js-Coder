import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget.jsx";

function Navbar() {

    const navRef = useRef();
	const mostrarNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header className="estructura-navbar">
            <h3 className="logo">Logo Marca</h3>
            <nav className="navbar" ref={navRef}>
                <a href="#" >Productos</a>
                <a href="#" >Carrito 0<CartWidget/></a>
                <a href="#" >Contacto</a>
                <button
					className="boton-navbar boton-cerrar-navbar"
					onClick={mostrarNavbar}>
					<FaTimes />
				</button>
            </nav>

            <button className="boton-navbar" onClick={mostrarNavbar}>
				<FaBars />
			</button>

        </header>
    );
}

export default Navbar;
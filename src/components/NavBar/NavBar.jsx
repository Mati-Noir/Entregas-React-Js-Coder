import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
    
    const navRef = useRef();
	const mostrarNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header className="estructura-navbar">
            <h3 className="logo">Noir Gaming</h3>
            <nav className="navbar" ref={navRef}>
                <NavLink className={(isActive) => 
                    isActive ? 'active' : 'inactive'}
                    to="/">Todos los Productos</NavLink>

                <NavLink className={(isActive) => 
                    isActive ? 'active' : 'inactive'}
                    to="/category/Multijugador">Juegos Multijugador</NavLink>

                <NavLink className={(isActive) => 
                    isActive ? 'active' : 'inactive'}
                    to="/category/Un Jugador">Juegos Singleplayer</NavLink>

                <NavLink className={(isActive) => 
                    isActive ? 'active' : 'inactive'}
                    to="/cart">Carrito <CartWidget/></NavLink>

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
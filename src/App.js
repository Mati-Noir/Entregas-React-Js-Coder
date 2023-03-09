import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import './components/NavBar/NavBar.css';
import ItemListContainer from './paginas/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './paginas/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './paginas/Cart/Cart.jsx';
import CartProvider from './context/CartContext';

function App() {
  return (
	<BrowserRouter>
		<React.Fragment>
			<CartProvider>
				<Navbar/>
				<Routes>
					<Route path="/" element={<ItemListContainer texto="Bienvenido"/>} />
					<Route path="/item/:id" element={<ItemDetailContainer/>} />
					<Route path="/category/:categoryId" element={<ItemListContainer/>} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</CartProvider>
		</React.Fragment>
	</BrowserRouter>
  );
}

export default App;

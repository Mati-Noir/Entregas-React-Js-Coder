import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import './components/NavBar/NavBar.css';
import ItemListContainer from './paginas/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './paginas/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
	<BrowserRouter>
		<React.Fragment>
			<Navbar/>
			<Routes>
			<Route path="/" element={<ItemListContainer texto="Bienvenido"/>} />
			<Route path="/item/:id" element={<ItemDetailContainer/>} />
			<Route path="/category/:categoryId" element={<ItemListContainer/>} />
		</Routes>
		</React.Fragment>
	</BrowserRouter>
  );
}

export default App;

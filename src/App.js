import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
		<React.Fragment>
			<Navbar/>
			<ItemListContainer texto="Bienvenido"/>
		</React.Fragment>
  );
}

export default App;

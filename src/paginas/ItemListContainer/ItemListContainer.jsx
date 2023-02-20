import React, {useState, useEffect} from 'react'
import Titulo from '../../components/Titulo/Titulo'
import ItemList from '../../components/ItemList/ItemList';
import { productos } from '../../data/productos';
import { useParams } from 'react-router-dom';


export const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      if(categoryId){
        const filtrarProductos = productos.filter((item) => item.categoria === categoryId);
        setTimeout(() => {
          resolve(filtrarProductos)
        }, 2000);
      } else {
        setTimeout(() => {
          resolve(productos)
        }, 1000);
      }
    });
    getData.then(respuesta => setData(respuesta));
  }, [categoryId]);

  return (
    <>
    <Titulo greeting="Bienvenido a la página"/>
    <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer;
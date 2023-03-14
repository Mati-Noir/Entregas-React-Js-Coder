import React, {useState, useEffect} from 'react'
import Titulo from '../../components/Titulo/Titulo'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';


export const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (categoryId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
    } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
    }

  }, [categoryId])

  return (
    <>
      <Titulo greeting="Productos destacados:"/>
      <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer;
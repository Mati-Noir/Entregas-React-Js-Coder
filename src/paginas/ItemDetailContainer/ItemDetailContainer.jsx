import React, { useEffect, useState } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
/* import { productos } from '../../data/productos'; */
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', id);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [id])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;

/* const ItemDetailContainer = () => {
  const [item, setItem] = useState ({});
  const {id} = useParams();

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() =>{
        const buscarProductos = productos.find(item => item.id == id);
          resolve(buscarProductos);
      }, 1000);
    });
    obtenerProductos.then((respuesta) => {
      setItem(respuesta);
    })
  }, [id]);

  return(
    <div>
      <ItemDetail item={item} />
    </div>

  )
}

export default ItemDetailContainer; */
import { useEffect, useState } from "react"
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { productos } from '../../data/productos';

const ItemDetailContainer = () => {
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

export default ItemDetailContainer;
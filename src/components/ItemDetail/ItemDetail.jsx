import './ItemDetail.css';

const ItemDetail = ({item}) => {
  return(
      <div className="estructura-detail">
              <img src={item.imagen} alt={item.nombre} />
              <h2>{item.nombre}</h2>
              <h2>AR${item.precio}</h2>
              <p>{item.descripcion}</p>
              <h3>{item.categoria}</h3>
      </div>
  )
}

export default ItemDetail;
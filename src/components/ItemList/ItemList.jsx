import Item from "../Item/item";
import React from "react";
import './style.css';
import { Link } from "react-router-dom";
/* import ItemDetail from "../ItemDetail/ItemDetail"; */

const ItemList = ({data = []}) => {
    return (
        <div className="itemList">
            {data.map(productos => (
                <div key={productos.id}>
                    <Link to={`/item/${productos.id}`}>
                        <Item info={productos} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
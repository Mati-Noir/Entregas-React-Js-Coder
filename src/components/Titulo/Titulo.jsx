import React from "react";

export const Titulo = (props) => {
    console.log(props)
    return(
        <h1>{props.greeting}</h1>
    );
}

export default Titulo;
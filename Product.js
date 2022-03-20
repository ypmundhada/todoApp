import React from "react"

function Product(props) {
    return(
        <div>
            <h2>{props.product.name}</h2>
            <h4>{props.product.price}</h4>
            <p>{props.product.description}</p>
        </div>
    )
}

export default Product
import React, { useState } from "react"
import { Link } from "react-router-dom";

function Card({products}){

      let [cart,setCart] = useState(false);

    const {image,title,price,rating,id} = products;


  return (
    <div className="card w-25 my-3 shadow-lg">

      <div className="card-head m-3">
        <img src={image}  width="100%" height={220} />
      </div>

      <div className=" card-body">
        <h6>{title}</h6>
        <p>Price:${price}</p>
        <p>Rating:{rating.rate}</p>

       <Link to = {`/Product-Details/${id}`}> <button className="btn btn-primary mx-1 ">Product Details</button></Link>
        {
          cart ? <button className="btn btn-danger">Remove</button> : <button className="btn btn-success">Add to cart</button>
        }
      </div>
    </div>

  )
};

export default Card;

import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function ProductDetails(){

  let[state,setState] = useState({
    id: 0,
    title: "",
    rating: {
      rate: 0,
      count: 0,
    },
    category: "",
    price: 0,
    description: "",
    image: "",
  })

  let {id} = useParams();

  useEffect(()=>{

    axios.get(`http://localhost:3000/products/${id}`)
    .then((res)=>{setState(res.data)})
    .catch((error)=>{alert("error while fetching data")
    })
    
  },[]);

  return (
    <div className="container shadow-lg p-5 mt-5  ">

      <div className="row">

        <div className="col-4">
      
          <img src={state.image} width={"100%"} height={500} />

        </div>

        <div className="col-8 p-5">
          <dl>
           <dt>Product Name</dt>
           <dd>{state.title}</dd>

           <dt>Product Specifications</dt>
           <dd>{state.description}</dd>

           <dt> Category</dt>
           <dd>{state.category}</dd>

           <dt>Price</dt>
           <dd>${state.price}</dd>

           <dt>Rating</dt>
           <dd>{state.rating.rate} Stars </dd>
          </dl>

          <button className="btn btn-primary mt-3 mx-2">Add To Cart</button>
          <button className="btn btn-secondary mt-3 mx-2">Back To Electronics</button>
        </div>
        
      </div>
      
    

    
    </div>





  )
};

export default ProductDetails;

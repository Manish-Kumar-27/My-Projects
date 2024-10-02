import React, { useEffect, useState } from "react"
import "./Jewelery.css"
import { jeweleryService } from "../../services/jewelery/jeweleryService"
import Card from "../product card/card"



function Jewelery(){
  let[jeweleryProducts,setJeweleryproducts] = useState([])

      useEffect(()=>{getJeweleryData();},[])

        const getJeweleryData = ()=>{

            jeweleryService()
            .then((res)=>{console.log(res.data);setJeweleryproducts(res.data)})
            .catch((error)=>{console.log(error);alert("catch is executed something is wrong with promise object")})
        }


  return (
    <div>
      <h2>Jewelery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum necessitatibus rerum saepe eveniet odio dicta veritatis quibusdam! Eius accusamus modi, veniam, velit expedita, eaque minus quia et rem vero alias.</p>
        
       {jeweleryProducts.length> 0 ? (<div className="d-flex flex-wrap justify-content-evenly gap-3" >
        {jeweleryProducts.map((product)=>{return <Card products={product}/>})}
       </div>) : (<h2 style={{color:"red", fontSize:"24",marginTop:"50px" ,  textAlign:"center"}}>NO JEWELERY AVAILABLE</h2>)}

   </div>
  )
};

export default Jewelery;

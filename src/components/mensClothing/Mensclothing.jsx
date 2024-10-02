import React, { useEffect, useState } from "react"
import { mensClothingService } from "../../services/mensclothing/mensclothingService";
import Card from "../product card/card";

function Mensclothing(){

  let [mensClothing,setMensClothing] = useState([]);

      useEffect(()=>{getMensClothingData();},[])

   const getMensClothingData = ()=>{
    mensClothingService()
    .then((res)=>{console.log(res.data); setMensClothing(res.data)})
    .catch((error)=>{console.log(error) ; alert("catch is executed something is wrong with Mens Clothing Data")})
   }

  return (
    <div>
      <h2>Mens Clothing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate ad deserunt earum, nihil facilis saepe architecto temporibus ipsa? Maiores odit nemo voluptates explicabo ab nihil saepe officia fuga illo!
      Cum, optio, culpa ipsum esse a veritatis animi, minus corrupti quasi mollitia fugit! Nihil aut nulla dolores aspernatur architecto? Rem eaque cupiditate magni nam eum ipsam enim reiciendis sapiente impedit.
      Quibusdam reprehenderit perspiciatis corporis excepturi totam est facere sequi officiis vero. Est, animi voluptatem. Assumenda voluptatum, saepe delectus minima similique nulla error harum qui expedita beatae ullam alias ipsam rem?
      Cum, nemo tempora. Perspiciatis enim, consequatur et nostrum vero cumque aut sint illum sed suscipit. At consectetur cupiditate repudiandae ipsum velit. Facilis veniam ducimus, quibusdam fugit facere nostrum voluptatem explicabo!
      Et deleniti architecto facilis deserunt cupiditate magnam iste molestiae accusamus eveniet. Aut adipisci dolore similique cumque, temporibus illum doloribus, incidunt minus quis repellendus beatae recusandae ab quos voluptatum fugit eveniet!
      </p>
      
      {mensClothing.length> 0 ? (<div className="d-flex flex-wrap justify-content-evenly gap-3" >{mensClothing.map((product)=>{return <Card products={product}/>})} </div>) : (<h2 style={{color:"red" , fontSize:"24" , marginTop:"50px", textAlign:"center"}} >NO MENS CLOTHING AVAILABLE</h2>)}

    </div>
  )
};

export default Mensclothing;

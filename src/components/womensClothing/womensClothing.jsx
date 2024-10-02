import React, { useEffect, useState } from "react"
import { womensClothingService } from "../../services/womensclothing/womensclothing";
import Card from "../product card/card";


function Womensclothing(){
  
  let [womensClothing,setWomensClothing] = useState([]);

      useEffect(()=>{getWomensClothingData();},[])


    const getWomensClothingData = ()=>{

        womensClothingService()
        .then((res)=>{console.log(res.data) ; setWomensClothing(res.data)})
        .catch((error)=>{console.log(error) ; alert("catch is called something is wrong with womens clothing data")})

    }

  return (
      <div>
      <h2>Womens Clothing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate ad deserunt earum, nihil facilis saepe architecto temporibus ipsa? Maiores odit nemo voluptates explicabo ab nihil saepe officia fuga illo!
      Cum, optio, culpa ipsum esse a veritatis animi, minus corrupti quasi mollitia fugit! Nihil aut nulla dolores aspernatur architecto? Rem eaque cupiditate magni nam eum ipsam enim reiciendis sapiente impedit.
      Quibusdam reprehenderit perspiciatis corporis excepturi totam est facere sequi officiis vero. Est, animi voluptatem. Assumenda voluptatum, saepe delectus minima similique nulla error harum qui expedita beatae ullam alias ipsam rem?
      Cum, nemo tempora. Perspiciatis enim, consequatur et nostrum vero cumque aut sint illum sed suscipit. At consectetur cupiditate repudiandae ipsum velit. Facilis veniam ducimus, quibusdam fugit facere nostrum voluptatem explicabo!
      Et deleniti architecto facilis deserunt cupiditate magnam iste molestiae accusamus eveniet. Aut adipisci dolore similique cumque, temporibus illum doloribus, incidunt minus quis repellendus beatae recusandae ab quos voluptatum fugit eveniet!
      </p>
     
      {
        womensClothing.length> 0 ? (<div className="d-flex flex-wrap justify-content-evenly gap-3"> {womensClothing.map((product)=>{return <Card products={product}/>})} </div>) : (<h2 style={ { color:"red" , fontSize:"24" , textAlign:"center",marginTop:"50px", marginBottom:"200px"}}> NO WOMENS CLOTHING DATA AVAILABLE</h2>) 
      }

    </div>
  )
};

export default Womensclothing;

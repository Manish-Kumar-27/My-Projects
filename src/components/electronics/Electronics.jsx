import {useEffect, useState} from "react"
import "./Electronics.css"
import Card from "../product card/card";
import { electronicsService } from "../../services/electronics/electronicsService";


function Electronics(){

  let [electronicProducts,setElectronicProducts] = useState([]);

    useEffect(()=>{getElectronicData();},[])

  const getElectronicData = () => {
    electronicsService()
      .then((res) => {
        console.log(res.data);
        setElectronicProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching electronic data:", error);
        alert("Something went wrong while getting electronics data");
      });
      
  };

  return (
    <div className="electronicsContainer">
      <h2>Electronics Component</h2>
      <div className="electronicImages"></div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam dolore rem. Pariatur qui incidunt minima autem nesciunt itaque quidem odit, hic nisi esse cupiditate rem reiciendis maiores, vero culpa eius vel voluptatibus eum doloremque blanditiis vitae ipsum fugiat praesentium? Amet ullam, placeat minus consequatur sed sunt ad expedita accusamus aspernatur alias facilis eos hic! At distinctio sed eveniet aut sint amet nesciunt mollitia in nulla voluptatum a, eaque minus rerum optio quaerat beatae? Eius molestias dolorem cupiditate rem laborum iusto dignissimos ducimus dicta omnis? Non, dolorem pariatur magnam nobis tenetur enim at ab reprehenderit! Corporis necessitatibus assumenda molestias perferendis?</p>
        
        {electronicProducts.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly gap-3">
          {electronicProducts.map(function (product) {
            return (
              <Card products={product}/>
            ) ;
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "50px" , fontSize:"24" }}>
          No Electronics Data
        </h2>
      )}

    </div>
  )
};

export default Electronics;

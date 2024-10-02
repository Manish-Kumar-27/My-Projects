import axios from "axios";



export function cartService(){

   return axios.get("http://localhost:3000/addToCart")
}
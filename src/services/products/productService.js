import axios from "axios";


export function productsService (){

    return axios.get("http://localhost:3000/products")
}
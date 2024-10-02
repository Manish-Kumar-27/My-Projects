import axios from "axios";



export function jeweleryService(){

    return axios.get("http://localhost:3000/categories_jewelery")
}
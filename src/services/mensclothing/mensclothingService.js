import axios from "axios";



export function mensClothingService(){

    return axios.get("http://localhost:3000/categories_mensclothing");
}
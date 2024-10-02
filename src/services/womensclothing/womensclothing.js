import axios from "axios";


export function womensClothingService() {

    return axios.get("http://localhost:3000/categories_womensclothing")
    
}
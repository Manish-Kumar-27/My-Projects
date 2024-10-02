import axios from "axios";


export function wishlistService(){

    return axios.get("http://localhost:3000/wishList")
}
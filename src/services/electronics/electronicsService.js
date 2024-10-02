import axios from "axios";


export const electronicsService = ()=>{

   return axios.get("http://localhost:3000/categories_electronics");

    
}
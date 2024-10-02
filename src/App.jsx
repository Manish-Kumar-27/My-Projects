import React from "react";
import Navbar from "./components/navbar/Navbar";
import Electronics from "./components/electronics/Electronics";
import Jewelery from "./components/jewelery/Jewelery";
import Mensclothing from "./components/mensClothing/Mensclothing";
import Womensclothing from "./components/womensClothing/womensClothing";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import PageNotFound from "./components/pagenotfound/Pagenotfound";
import Profile from "./components/profile/profile";
import Personal from "./components/user-details/Personal";
import Educational from "./components/user-details/educational";
import Professional from "./components/user-details/professional";


function App(){
    return(
        <div>
          <Navbar/>
          <Routes>
          <Route path={"/"}  element={<Home/>} />
          <Route path={"/electronics"}  element={< Electronics />} />
          <Route path={"jewelery"}  element={< Jewelery/>} />
          <Route path={"/mens-clothing"}  element={<Mensclothing/>} />
          <Route path={"/womens-clothing"}  element={<Womensclothing/>} />
          <Route path={"/Product-Details/:id"} element={<ProductDetails/>}/>


          <Route path={"/profile"} element={<Profile/>}>

            <Route path={"Personal-Details"} element={<Personal/>}/>
            <Route path={"Educational-Details"} element={<Educational/>}/>
            <Route path={"Professional-Details"} element={<Professional/>}/>

          </Route>


          <Route path={"*"} element={<PageNotFound/>} />
          </Routes>

        </div>
    )
}

export default App;
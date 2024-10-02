import React from "react"
import { Link } from "react-router-dom";

function Profile(){
  return (
    <div className="container mt-5" style={{height:520 , boxShadow:"0 0 15px black"}}>

        <div className="row bg-dark h-100">

            <div className="col-4">
                <div className="container fs-4 d-flex flex-column justify-content-evenly align-items-center h-100 ">
                    <div className="row">
                        <div className="col-12"><Link to="Personal-Details" className="text-white text-decoration-none">Personal Details</Link></div>
                    </div>
                
                    <div className="row">
                        <div className="col-12"><Link to="Educational-Details" className=" text-white text-decoration-none">Educational Details</Link></div>
                    </div>                
                    <div className="row">
                       <div className="col-12"><Link to="Professional-Details" className="text-white text-decoration-none">Professional Details</Link></div>
                       
                    </div>
            
                </div>
            </div>
            <div className="col-8 bg-light"></div>

        </div>
      
    </div>
  )
};

export default Profile;
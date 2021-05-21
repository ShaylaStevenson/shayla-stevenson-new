import React from "react";
import "./style.css";
import imageData from "../../assets/scripts/imageData.json";

function Header(props) {
  console.log(imageData);
  console.log(imageData[0].url);
  return (
    
    // <div className="hero text-center">
    //     {/* style={{ backgroundImage: `url(${props.backgroundImage})` }} */}
    //     THIS IS A HEADER
    //   {props.children}
    // </div>
    <header className="hero hero-fluid mt-0 py-3 mx-0">
      {/* images/office-table.jpg)" */}
        <div className="container">
            <div className="row">
                {/* <!--text--> */}
                <div className="col-md-8 border rounded border-white d-flex justify-content-end mb-3 my-1" id="greeting-div">
                    <h1 className="display-1 py-1"><span id="greeting">Hello</span><br></br>I'm glad you stopped by</h1>
                </div>
                {/* <!--image--> */}
                <div className="col-md-4" id="image-div">
                    <img src={imageData[0].url} className="img-thumbnail img-responsive" alt="Shayla Stevenson"/>
                </div>

            </div>
        </div>
    </header>
  );
}

export default Header;
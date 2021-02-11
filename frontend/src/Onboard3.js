import React from 'react'
import { Link } from "react-router-dom";

function Onboard3() {
    return (
        <div className="one">
                   <img
         
         className="onboard2"
         src="./images/undraw_Follow_me_drone_kn76 1 (1).png"
         alt=""
       /> 
            <h1>How it works</h1>
            <p>Browse from numerous vaccines medical supplies , and any other medications you may need</p>
            <p>Simply add what you need to the cart and we will fly them out to your location</p>
            <Link to="/onboard3">
            <button className="btn1">Start your order</button>
       </Link>
       </div>
    )
}

export default Onboard3

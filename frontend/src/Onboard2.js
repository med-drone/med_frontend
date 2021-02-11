import React from 'react'
import { Link } from "react-router-dom";

function Onboard2() {
    return (
        <div className="one">
              <img
         
         className="onboard2"
         src="./images/undraw_drone_race_0sim 1.png"
         alt=""
       /> 
       <h1>Power Of Drones</h1>
       <p>Through modern Drone Technology we can bring vital medical supplies to any part of the world regardless of terrain or location</p>
       <Link to="/onboard2">
       <button className="btn1">Next</button>
       </Link>
        </div>
    )
}

export default Onboard2

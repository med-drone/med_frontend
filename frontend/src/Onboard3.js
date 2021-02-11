import React, { useEffect }  from 'react'
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Onboard3() {
    // let history = useHistory();
    // function loadNextPage(){
    //  history.push('./hello')
    // }
    //   useEffect(() => {
    //   setTimeout( loadNextPage , 5000);
    // }, []);
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
            <Link to="/hello">
            <button className="btn1">Start your order</button>
       </Link>
       </div>
    )
}

export default Onboard3

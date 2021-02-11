import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import { Link } from "react-router-dom";

function Confirm() {
    return (
        <div className="one">
            <Link to="/">
             <h1>Return to home</h1>
             </Link>
            <img
         
         className="check1"
         src="images/Group.png"
         alt=""
       />  
            
            <h1 id="confirmh1">Order has been Confirmed</h1>
            <Link to="graph1">
            <button className="btn1">Review Order</button>
            </Link>
        </div>
    )
}

export default Confirm

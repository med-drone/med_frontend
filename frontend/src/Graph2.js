import React, { useEffect }  from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Graph2() {
  // let history = useHistory();
  // function loadNextPage(){
  //  history.push('./')
  // }
	// useEffect(() => {
  //   setTimeout( loadNextPage , 5000);
  // }, []);
    return (
        <div className="three">
        <Link to="/">
             <h1>Return to home</h1>
             </Link>
        <img
    
    className="onboard1"
    src="images/Group 102.png"
    alt=""
  />  
 <h1>Your order has been delivered to provided coordinates</h1>
  <p>Delivered</p>
  <img
    
    className="onboard1"
    src="images/Frame 104 (1).png"
    alt=""
  />  
  <h1>Your order has been delivered!</h1>
       
   </div>
    )
}

export default Graph2;

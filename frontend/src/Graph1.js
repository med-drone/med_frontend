import React, { useEffect }  from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Graph1() {
  let history = useHistory();
  function loadNextPage(){
   history.push('./graph2')
  }
	useEffect(() => {
    setTimeout( loadNextPage , 5000);
  }, []);
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
      <h1>Your order has been sent to yhe marked coordinates</h1>
       <p>Arriving in 8 hours</p>
       <img
         
         className="onboard1"
         src="images/Frame 104.png"
         alt=""
       />  
       <h1>Your order is being loaded and prepared to fly out</h1>
            
        </div>
    )
}

export default Graph1;

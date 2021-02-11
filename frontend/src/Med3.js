import React, { useEffect }  from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
function Med3() {
    // let history = useHistory();
    // function loadNextPage(){
    //  history.push('./graph1')
    // }
    //   useEffect(() => {
    //   setTimeout( loadNextPage , 5000);
    // }, []);
    return (
        <div className="two">
            <h1 >Order Summary</h1>
               <div><img
         
         className="onboard1"
         src="images/Vector.png"
         alt=""
       /> 
       </div> 
              <img
         
         className="onboard1"
         src="images/Group 100.png"
         alt=""
       /> 
       <Link to="/confirm">
       <button className="btn1">Confirm</button></Link>
        </div>
    )
}

export default Med3

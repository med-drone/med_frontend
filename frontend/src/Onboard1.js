import React, { useEffect }  from 'react'
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Onboard1() {
  // let history = useHistory();
  // function loadNextPage(){
  //  history.push('./onboard2')
  // }
	// useEffect(() => {
  //   setTimeout( loadNextPage , 5000);
  // }, []);
    return (
        <div className="one">
              
          <img
         
         className="onboard1"
         src="images/undraw_medical_care_movn 1.png"
         alt=""
       /> 
      <h1>What is Medrone</h1>
      <p>An emergency medical supplier bringing vital resources to any location</p>
      <p>we partner with local health care facilities to bring cheap life-saving supplies to those who need it </p>
   <Link to="/onboard2">
      <button className="btn1">
        Next</button>
       
        </Link>

      
        </div>
       
    )
}

export default Onboard1

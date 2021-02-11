import React, { useEffect }  from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Med2() {
    // let history = useHistory();
    // function loadNextPage(){
    //  history.push('./med3')
    // }
    //   useEffect(() => {
    //   setTimeout( loadNextPage , 5000);
    // }, []);
    return (
        <div className="one">
            <img
         
         className="onboard1"
         src="images/COVID 19.png"
         alt=""
       />  
        <p>public/COVID-19 is a disease caused by SARS-CoV-2 that can trigger what doctors call a respiratory tract infection. It can affect your upper respiratory tract (sinuses, nose, and throat) or
             lower respiratory tract (windpipe and lungs)..png</p>
             <div>Quantity:10cases</div>
             <Link to="med3">
             <button className="btn1">Proceed</button>
             </Link>
        </div>
    )
}

export default Med2

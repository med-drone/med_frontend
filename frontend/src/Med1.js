import React, { useEffect }  from 'react'
import { useHistory } from 'react-router-dom';

function Med1() {
  let history = useHistory();
  function loadNextPage(){
   history.push('./med2')
  }
	useEffect(() => {
    setTimeout( loadNextPage , 5000);
  }, []);
    return (
        <div className="one">
           
           <h1>Vaccines</h1>
             <img
         
         className="onboard1"
         src="images/Frame 97.png"
         alt=""
       />  
       <h1>Articles</h1>
       <img
         
         className="onboard1"
         src="images/Frame 99 (1).png"
         alt=""
       />  
     
        </div>
    )
}

export default Med1

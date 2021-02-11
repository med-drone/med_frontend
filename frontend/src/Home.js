import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { Link } from "react-router-dom";

import './Home.css';

function Home() {
  let history = useHistory();
  function loadNextPage(){
   history.push('./onboard1')
  }
	useEffect(() => {
    setTimeout( loadNextPage , 3000);
  }, []);

	return (
		<div
			className='splash'
			style={{
				backgroundImage: "url('images/splash_background.png')",
				backgroundSize: "100%",
				backgroundRepeat: 'no-repeat',
        backgroundPosition: "Bottom"
			}}>
			<div
				className='home-logo-container'>
				
				<img
         
         className="logo1"
         src="images/drone_logo.png"
         alt=""
       /> 
	    	<h1 >MEDRONE</h1>
				</div>

		
		</div>
	);
}

export default Home;

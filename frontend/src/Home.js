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
				className='home-logo-container'
				style={{
					backgroundImage: "url('images/drone_logo.png')",
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}></div>

			<h1 id='title'>MEDDRONE</h1>
		</div>
	);
}

export default Home;

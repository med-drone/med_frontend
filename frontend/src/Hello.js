import React, { useEffect } from 'react'
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Hello() {
    // let history = useHistory();
    // function loadNextPage(){
    //  history.push('./med1')
    // }
    //   useEffect(() => {
    //   setTimeout( loadNextPage , 5000);
    // }, []);
    return (
        <div className="one">
            <h1 className="helloh1">Hello,Dr.Zac Morris</h1>
            <div className="alert"><AddAlertIcon></AddAlertIcon> Notification
                we are running low on covid-19 supplies
            </div>
            <div className="helloimg">
            <img
         
         className="onboard1"
         src="images/undraw_medicine_b1ol 1.png"
         alt=""
       /> 
       
       <h1>How can I help you?</h1>
       <p className="hellop">choose the best way I can help</p>
       <div className="all">
          
         <Link to="/med1"> <div><ListAltIcon></ListAltIcon><p>Order</p></div></Link>
          <div><LocationOnIcon></LocationOnIcon><p>Locations</p></div>
          
       
          <div><LocalShippingIcon></LocalShippingIcon><p>About us</p></div>
          <div><LocalHospitalIcon></LocalHospitalIcon><p>What we deliver</p></div>
        

       </div>
       </div>
        </div>
    )
}

export default Hello

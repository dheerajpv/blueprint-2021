import React from 'react'
import "./Footer.css";

// Footer for all the pages 

const Footer = () => {
    return (
        <div className = "footer">
            <h1 className = "text"><center>Made during Blueprint HackMIT 2021 by Dominique Dang, Ismayil Ismayilov, {"&"} Dheeraj Prakash </center></h1>
            <p className ="text"> <center> 
            The data used for this project is from: 
                <a href="https://exoplanetarchive.ipac.caltech.edu/docs/counts_detail.html" rel="noreferrer" target="_blank"> {" "} exoplanetarchive.ipac.caltech.edu/docs/counts_detail
                {" "}</a>
            </center>
            </p>
        </div>
        
    );
}

export default Footer;
import React from "react";
import './Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <div className="banner-container flex">
            
            <div className="bn-left">
                <h1>Outkos Academy</h1>
                <p className="tx">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <Link to='/' className="bn-link">Learn more</Link>
            </div>


            <div className="bn-right">
                <div className="bn-img"></div>
            </div>
        </div>
    )
}


export default Banner
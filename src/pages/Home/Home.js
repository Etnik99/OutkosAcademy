import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "../../components/pages/home/Banner/Banner";
import Cards from "../../components/pages/home/Cards/Cards";



const Home = () => {
    return(
        <div className="home-page">
                <Navbar/>
                <Banner/>
                <Cards/>
        </div>
    )
}


export default Home
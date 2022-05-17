import React from 'react';
import '../App.css'
import AppBar from './AppBar'

const Hero = () => {
    return (
        <section id="hero-section">
            <AppBar />
            {/* <div style = {{display:"flex",color:"white",paddingLeft: "26rem"}}>
                <h4 style={{margin:"1rem",fontSize: "larger"}}>Home</h4>
                <h4 style={{margin:"1rem",fontSize: "larger"}}>About us</h4>
                <h4 style={{margin:"1rem",fontSize: "larger"}}>Products</h4>
                <h4 style={{margin:"1rem",fontSize: "larger"}}>Cooperation</h4>
                <h4 style={{margin:"1rem",fontSize: "larger"}}>Contact Us</h4>
            </div> */}
            <div>
                <h1>Organic Plants  <br/>And Meet Products</h1>
                
                <button id="button">Discover now</button>
            </div>
        </section>
    );
};

export default Hero;
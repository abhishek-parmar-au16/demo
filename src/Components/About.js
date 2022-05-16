import React from 'react';
import '../App.css'
import guy from '../images/ecofood-guy-in-field.jpg'

const About = () => {
    return (
        <section id="about">
            <div>
                <div>
                    <h1>About Us</h1>
                </div>
                <div clasName="imagecard">
                    <div>
                        <h2>Trust in our <br />Experience</h2>
                        <p>Farmers are the lifeblood of the Indian agricultural system.<br /> They sow and reap crops. When the right season arrives,<br /> they also harvest crops. In spite of being such an important part of the economy,<br /> they are marginalized and impoverished.</p>
                    </div>
                    <div clasName="aboutimage">
                            <img  src={guy} alt="Farmer "></img>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default About;
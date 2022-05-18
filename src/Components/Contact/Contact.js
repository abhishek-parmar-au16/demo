import React from 'react';
import {useLocation ,Link , useNavigate} from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const buttonhandler = () =>{

        setTimeout(() => {   
            navigate("/products/1")
        }, 1000);
    }
    return (
        <div style={{
            minHeight:"100vh",
            backgroundColor:"Yellow"

        }}>
            Hye buddy
            <button onclick={buttonhandler}>Punch Me
            </button>
        </div>
    );
};

export default Contact;
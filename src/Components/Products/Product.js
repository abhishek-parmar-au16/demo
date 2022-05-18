import React from 'react';
import {useParams} from 'react-router-dom'



const Product = () => {
    const param = useParams()
    const productId = param.productId;
    console.log(param);
    return (
        <div style={{
            minHeight:"100vh",
            backgroundColor:"cyan"

        }}>
            <h4>Your order is dispatch with product no {productId}</h4>
            
        </div>
    );
};

export default Product;
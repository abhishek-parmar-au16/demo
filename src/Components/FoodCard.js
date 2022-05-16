import React from 'react';
import Fruits from '../images/ecofood-icon1.png'
import Vegetables from '../images/ecofood-icon2.png'
import Dairy from '../images/ecofood-icon3.png'
import Meat from '../images/ecofood-icon4.png'
import Herbs from '../images/ecofood-icon5.png'
import '../App.css'

const FoodCard = () => {
    return (
        <section id="food">
            <div>
                <div>
                    <h1>Food Categories</h1>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </div>
                <div className="category-card">
                    <div className="category-cards">
                        <div>
                        <img alt="fruits" src={Fruits} />
                        <h4>Fruits</h4>
                        </div>
                    </div>
                    <div className="category-cards">
                        <div>
                        <img alt="fruits" src={Vegetables} />
                        <h4>Vegetables</h4>
                        </div>
                    </div>
                    <div className="category-cards">
                        <div>
                        <img alt="fruits" src={Dairy} />
                        <h4>Dairy</h4>
                        </div>
                    </div>
                    <div className="category-cards">
                        <div>
                        <img alt="fruits" src={Meat} />
                        <h4>Meat</h4>
                        </div>
                    </div>
                    <div className="category-cards">
                        <div>
                        <img alt="fruits" src={Herbs} />
                        <h4>Herbs</h4>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
};

export default FoodCard;
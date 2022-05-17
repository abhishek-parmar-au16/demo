import React from 'react';
import '../App.css'
import guy from '../images/ecofood-guy-in-field.jpg'
import axios from 'axios';
import {useState ,useEffect} from "react"
const About = () => {

    const [data, setData] = useState([]);
    const [loaded,setLoaded] =useState(false)
    const [categories ,setCategories] = useState([])

    const BaseUrl = "https://waycool-project1-backend.herokuapp.com"
    console.log(BaseUrl + data.heroSection?.backgroundImage);
    

    // useEffect(() => {
    //     let unmounted = false
    //     const getdata = async ()={
    //         try {
    //             const fetchResponse = await axios.get("https://waycool-project1-backend.herokuapp.com/api/homepage")
    //             const fetchData = fetchResponse.data
    //             if (!unmounted){
    //                 setData(prev =>{
    //                     (
    //                         ...prev,
    //                         heroSection:{
    //                             title:!fetchData.heroSection?.title ?"": fetchData.heroSection.title ,
    //                             bgimg : !!fetchData.heroSection?.backgroundImage ? `${BaseUrl}/${fetchData.heroSection.backgroundImage}`:"",
    //                             buttonText :!! fetchData.heroSection?.buttonText ? fetchData.heroSection.buttonText :''
    //                         },
    //                     )})
    //                     setCategories(!!fetchData.foodCategories ? fetchData.foodCategories.map(item => ({...item,id:item._id,image:`${BaseUrl}/${item.image}` })) :[])
    //             }
    //         }catch (err){
    //             setData({})
    //             setCategories([])
    //         }
    //         setLoaded(true)
    //     }
    //     getdata()
    //     return()=>{
    //         unmounted=true
    //     }
        
    // }, []);
    
    useEffect((token) => {

        const res = axios.get("https://waycool-project1-backend.herokuapp.com/api/homepage", {
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': userDetails.token
            }
        }).then((response) => {
            if (response.data) {
                console.log("krunal", response.data)
    setData(response.data)
                //  setAdoptionCount(fetchonecountdata)
            }
        })
            .catch((err) => console.log(err));
    }, []);

    // if (!loaded){
    //     return(<div>Loading.....</div>)
    // }

    return (<>
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
                            {/* <img  src={guy} alt="Farmer "></img> */}
                    </div>
                </div>
            </div>
            
        </section>
        <section id="api">
            
            <div>
               <h1> {data.heroSection?.title}</h1>
               <img  className="kuchnhi" src={BaseUrl +'/'+ data.heroSection?.backgroundImage} alt="pat" />
            </div>

            
            
        </section>
        </>
    );
};

export default About;
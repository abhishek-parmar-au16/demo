import React,{useState} from 'react';
import './style.css'

const Main = () => {
    const [data,setData] =useState(false)
    const [number,setNumber]=useState(0)
    const [count1 ,setCount1]=useState(0)
    const [count2 ,setCount2]=useState(0)
    const [count3 ,setCount3]=useState(0)

    const ResetButton = ()=>{
        setCount1(0)
        setCount2(0) 
        setCount3(0)
        setData(false) 

    }
    

    return (
        <div>
            <div>
                <button className='button' onClick={()=>setCount1(count1+1)}>Candidate 1</button>
                <button className='button' onClick={()=>setCount2(count2+1)}>Candidate 2</button>
                <button className='button' onClick={()=>setCount3(count3+1)}>Candidate 3</button>
            </div>

            <div>
                <div>
                    <button onClick={()=>ResetButton()}>Reset All</button>
                    <button  onClick={()=>setData(true)}>View Result</button>
                </div>
                <div>
                    <label>Number of Candidate</label>
                    <input type='number' value='number' />
                </div>

            </div>


                    {
                        data===true?                  
                        <div style={{display:"flex",flexDirection:"column"}}>
                        {/* <label>Reset All</label> */}
                        {/* <button></button> */}
                        <label>Candidate 1 : {count1}</label>
                        <label>Candidate 2 : {count2}</label>
                        <label>Candidate 3 : {count3}</label>
                        
                    </div>:''
                    }
           
            {/* <label>count</label>
            <p>{count1}</p> */}

        </div>
    );
};

export default Main;
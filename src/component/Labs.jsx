import React, { useEffect, useState } from 'react';
import Header from '../Navigate/Header';
import {Link} from "react-router-dom";
import iconlabs from '../iconlabs.png'

const fetchAPI = async()=> {
    try {
        const resp = await fetch('http://localhost:3005/users/', {
            headers: {
            "Content-Type": "application/json"
          },
            body: JSON.stringify()}
          )
        const data = await resp.json()
        return data.data
    }
    catch(err) {
        throw new Error(err)
    }
}

const Labs = () => {
const [labs, setLabs] = useState([])
const [load, setLoad] = useState(false)


useEffect(() =>{
    fetchAPI().then(p=>
        setLabs(p)
    )
    setLoad(true)
}, [])

console.log(labs)
    return (
        <div className='body'>
            <Header/>
            <div className='block-course'> 
                   {load && labs.map(p => (
                        <Link key={p.id} to={`/labs/${p.title}/${p.id}`} props={p.title}> 
                            <div className='course'>      
                                <div style={{height: '50px'}} >
                                    <h4>{p.title}</h4>
                                </div>

                                <div className='hover-image-scale'>
                                    <img style={{height: '200px'}}src={iconlabs}/>   
                                </div>
                            </div> 
                        </Link>)    
                    )}      
            </div>
        </div>
    );
};

export default Labs;
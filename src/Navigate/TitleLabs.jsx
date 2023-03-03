import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams, Link } from "react-router-dom"
import PostService from '../utils/FetchAPI';
//здесь выгружаются лабораторные работы
const TitleLabs = () => {

    const param = useParams()
    console.log(param)

    const [lab, setLab] =useState([])
    const [load, SetLoading] = useState(false)
    let id = 'lab'

    useEffect(()=>{
        PostService.fetchAPI(id)
        .then(p => {
            setLab(p)
            SetLoading(true)
        })
    }, [])
    
    let number = 1
    return (
             <div className='body'>
            <Header/>
            <div className='block'> 
            <h4>Курс: {param.course}</h4>
                    <div className='feedbacktable'>
                    <table id='customers'>
                        <tr></tr>
                        {load && lab.map(p=>(
                            <tbody>
                                <tr>
                                <td>{number++}</td>
                                    <td>
                                        
                                        <Link key={p.id} to={`/labs/${param.course}/${p.id}/${p.name}`}>
                                            {p.name}
                                         </Link>
                                    
                                    </td>
                                </tr>    
                            </tbody>
                        ))}    
                        </table>
                    </div>
            </div>
        </div>
    );
};

export default TitleLabs;
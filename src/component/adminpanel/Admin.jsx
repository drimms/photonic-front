import React, { useState } from 'react';
import AdminHeader from './AdminHeader'
import '../../App.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostService from '../../utils/FetchAPI';
import edit from '../../edit.jpg'
import trash from '../../trash.png'
import { useAuth } from '../../Auth/useAuth';

let num = 0
let id = 'users' 

const Admin = () => {
    const [text, setText] = useState([])
    const [title, setName] = useState()
    const [descrition, setDesc] = useState()
    const [loading, SetLoading] = useState(false)

    useEffect(() => {
        PostService.fetchAPI(id)
        .then(p => {
            setText(p)
            SetLoading(true)
        })
    }, [])

    function handleSubmit(event) {
        PostService.postAPI(title, descrition, event, id)
        
    }
    //console.log(text)
    return (
        <div>
            <AdminHeader/>
            <div className='body'>
                <div className='block'>
                    <div className='feedback'>
                            <h3 style={{textAlign: 'center'}}>
                                Создать новую дисциплину
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <input 
                                    type="text" 
                                    value={title}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Название дисциплины'/>
                                </label>
                                <label>
                                    <input 
                                    type="text" 
                                    value={descrition}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder='Описание дисциплины'/>
                                </label>
                                <input type='submit' value='Создать'/>
                            </form> 
                    </div>
                    <div className='feedbacktable'>
                    <table id='customers'>
                        <tr></tr>
                        {loading && text.map((titleDisp)=>(
                            <tbody>
                                <td style={{width:"5%"}}>{num}</td>
                                    <td style={{width:"20%"}}>
                                        <Link key={titleDisp.id} to={`/admin/${titleDisp.title}/${titleDisp.id}`} props={titleDisp.title}>      
                                            {titleDisp.title}
                                         </Link>
                                    </td>
                                    <td>{titleDisp.descrition}</td>
                                    <td><img 
                                    src={edit} width={'20px'}/></td>
                                    <td><img onClick={() => PostService.deleteAPI(titleDisp.id, id)}
                                    src={trash} width={'20px'}/></td>
                            </tbody>
                        ))}
                        </table>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Admin;
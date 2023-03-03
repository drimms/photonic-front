import React from 'react';
import Header from '../../Navigate/Header';
import '../../App.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../utils/FetchAPI';
import { useParams } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import edit from '../../edit.jpg'
import trash from '../../trash.png'

let id = 'lab'

const AdminDisc = () => {
    const [text, setText] = useState([])
    const [title, setName] = useState()
    const [loading, SetLoading] = useState(false)
    const course = useParams()

    useEffect(() => {
        PostService.fetchAPI(id)
        .then(p => {
            setText(p)
            if (text.length===0) {
                SetLoading(false)
            }
            else {   
                SetLoading(true)
            }

        })
    }, [])

 

    const postAPI = async (e) =>{
        e.preventDefault()
        try {
            await fetch('http://localhost:3005/lab', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
              },
                body: JSON.stringify({name: title, course: course.index})    
            })
             
        }
        catch(err) {
            throw new Error(err)
        }
    }
    
    console.log(text.filter(lab => lab.course === course.index))
    //filter(lab => lab.course == course.index).
    let number = 1
    return (
        <div>   
            <AdminHeader/>
            
            <div className='body'>
                    <div className='block'>
                    <div className='feedback'>
                            <h3 style={{textAlign: 'center'}}>
                            <p>Курс:</p>"{course.course}"
                            </h3>
                        
                            <form onSubmit={postAPI}>
                                <label>
                                    <input 
                                    value={title}
                                    type="text" 
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Название лабораторной работы'/>
                                </label>
                                <input type='submit' value='Создать'/>
                            </form> 
                    </div>

                    <div className='feedbacktable'>
                    <table id='customers'>
                        <tr></tr>
                        {loading && text.filter(lab => lab.course === course.index).map((title)=>(
                            <tbody>
                                <td>{number++}</td>
                                    <td>
                                        <Link key={title.id} to={`/admin/${course.course}/${title.name}/${title.id}`} props={title.title}>
                                            {title.name}
                                         </Link>
                                    </td>
                                    <td><img 
                                    src={edit} width={'20px'}/></td>
                                    <td><img 
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

export default AdminDisc;
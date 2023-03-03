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


let id = 'lab/quest'

const AdminLab = () => {
    const [text, setText] = useState([])
    const [title, setName] = useState()
    const [one, setOne] = useState()
    const [two, setTwo] = useState()
    const [three, setThree] = useState()
    const [truth, setTruth] = useState()

    const [loading, SetLoading] = useState(false)
    const course = useParams()

    useEffect(() => {
        PostService.fetchAPI(id)
        .then(p => {
            setText(p)
            SetLoading(true)
        })
    }, [])

    const postAPI = async (e) =>{
        e.preventDefault()
        try {
            await fetch(`http://localhost:3000/${id}`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
              },
                body: JSON.stringify({
                    name: title, 
                    oneans: one, 
                    twoans: two, 
                    threeans: three, 
                    trueanswer: truth
                })    
            })
             
        }
        catch(err) {
            throw new Error(err)
        }
    }

    console.log(text, '-----')
    let number = 1
    return (
        <div>
            <AdminHeader/>
            <div className='body'>
                <div className='block'>
                    
                    <div className='feedback'>
                            <h3 style={{textAlign: 'center'}}>
                               Лабораторная работа
                                <p>
                                "{course.lab}"
                            </p>
                            </h3>
                            
                            <form onSubmit={postAPI}>
                                <label>
                                    <input 
                                    value={title}
                                    type="text" 
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Введите вопрос'/>
                                </label>
                                <label>
                                    <input 
                                    value={one}
                                    type="text" 
                                    onChange={(e) => setOne(e.target.value)}
                                    placeholder='Введите ответ'/>
                                </label>
                                <label>
                                    <input 
                                    value={two}
                                    type="text" 
                                    onChange={(e) => setTwo(e.target.value)}
                                    placeholder='Введите ответ'/>
                                </label>
                                <label>
                                    <input 
                                    value={three}
                                    type="text" 
                                    onChange={(e) => setThree(e.target.value)}
                                    placeholder='Введите ответ'/>
                                </label>
                                <label>
                                    <input 
                                    value={truth}
                                    type="text" 
                                    onChange={(e) => setTruth(e.target.value)}
                                    placeholder='Введите верный ответ'/>
                                </label>

                                <input type='submit' value='Создать'/>
                            </form> 
                    </div>

                    <div className='feedbacktable'>
                    <table id='customers'>
                        <tr><td></td>
                        <td>Вопрос</td>
                        <td>Ответ 1</td>
                        <td>Ответ 2</td>
                        <td>Ответ 3</td>
                        <td>Ответ 4</td>
                        <td></td>
                        <td></td>
                        </tr>
                        {
                            text.map((p) => (
                                <tbody>
                                <td>{number++}</td>
                                    <td key={p.id}>
                                        <p>{p.name}</p> 
                                    </td>
                                    <td>{p.oneans}</td>
                                    <td>{p.twoans}</td>
                                    <td>{p.threeans}</td>
                                    <td>{p.trueanswer}</td>
                                    <td><img 
                                    src={edit} width={'20px'}/></td>
                                    <td><img 
                                    src={trash} width={'20px'}/></td>
                            </tbody>
                            ))
                        }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLab;
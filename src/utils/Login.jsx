import React from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth';
import Header from '../Navigate/Header';
import './Modal.css'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {login} = useAuth()
    const [pass, setPass] = useState()
    const frompage = location.state?.from?.pathname || "/"
    
    function submitHandle(event) {
        event.preventDefault()
        let formData = new FormData(event.currentTarget);
        let user = formData.get("username")
       // const form = event.target
        //const user = form.username.value
        if (user === 'Admin') {
            login(user, () => navigate(frompage, {replace: true}))
        }
        else {
            login(() =>navigate("/", {replace: true}))
        }     
    }

    return (
        <div>
        <div className='body'>
            <Header/>
        <div className="modal">
            <div className="modal__content">
            <Form onSubmit={submitHandle} className="modal__form" method='post'>
            <label>
                    <input 
                    name="username"
                    type="text"
                    onChange={(e) => setPass(e.target.value)} 
                    placeholder='Кто ты, воин?'/>
            </label>
            <input type='submit' value='Авторизоваться'/>
                
            </Form>
            </div>
        </div>
        </div>
        </div>
    );
};

export  {Login};
import { useNavigate} from "react-router-dom";
import React from 'react';
import './Modal.css'


const LoginAdmin = () => {
    const nav = useNavigate()
    return (
        <div className="modal">
            <div className="modal__content">    
            <form className="modal__form">
                <label>
                    <input 
                        type="text" 
                            placeholder='Кто ты, воин?'/>
                </label>
                <label>
                    <input 
                        type="text" 
                        placeholder='Пароль'/>
                </label>
                    <input type='submit' value='Авторизоваться'/>
            </form> 
            </div>
            
        </div>
    );
};

export default LoginAdmin;
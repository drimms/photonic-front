import React, { useState } from 'react';
import {Link, Outlet} from "react-router-dom";
import logo from '../logo.gif';
import admin from '../pngegg.png'
import Login from '../utils/Login';

const Header = () => {
    const [modalActive, setModalActive] = useState(true)

    return (
        <div className="App-header">
            <img src={logo} className='logo'/>
            <Link to={'/'} className="btn btn1">Главная</Link>
            <Link to={'/labs'} className="btn btn1">Лабораторные работы</Link>
            <Link to={'/about'} className="btn btn1">О кафедре</Link>
            <Link to={'/contact'} className="btn btn1">Контакты</Link>
            <div className='admin'>
                <Link to={'/admin'} >
                 <img width='50px'
                    src={admin}
                /></Link>
            </div>
            
            <Outlet/>
        </div>
    );
};

export default Header;
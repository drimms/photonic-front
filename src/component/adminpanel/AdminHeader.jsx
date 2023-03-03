import React, { useState } from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from '../../logo.gif';
import admin from '../../pngegg.png'
import { useAuth } from '../../Auth/useAuth';

const AdminHeader = () => {
    const {logout} = useAuth()
    const nav = useNavigate()
    const {user} = useAuth()

    return (
        <div className="App-header">
            <img src={logo} className='logo'/>
            <Link to={'/'} className="btn btn1">Главная</Link>
            <Link to={'/labs'} className="btn btn1">Лабораторные работы</Link>
            <div className='adminhead'>
                <h4 style={ {marginBottom: "0px", marginTop: "0px"}}>Добро пожаловать, {user}!</h4>
                <button style={{marginTop: "12px", marginLeft: "33%"}}
                onClick={()=> logout(() =>nav("/", {replace: true}))} 
               >
                Выйти
                </button>
                   
            </div>

             
            <Outlet/>
        </div>
    );
};

export default AdminHeader;
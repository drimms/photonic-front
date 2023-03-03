import React, { useEffect, useState } from 'react';
import Header from '../Navigate/Header';
import {Link, useParams} from "react-router-dom";
import '../App.css'
import theory from '../assets/icon/knolage.png'
import tests from '../assets/icon/test.png'
import PostService from '../utils/FetchAPI';
import Quest from '../utils/Quest';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import PdfViewer from './PdfViewer';

let id = 'lab/quest'
const Labs = () => {
const [labs, setLabs] = useState([])
const [load, setLoad] = useState(false)
const [test, setTest] = useState(false)
const param = useParams()

const [pdfdoc, setpdf] = useState(0)
const [testdoc, settest] = useState(0)

useEffect(() =>{
    PostService.fetchAPI(id)
    .then(p=>
        setLabs(p)
    )
    //setLoad(true)
}, [])

const HandleTheory = (id) => {
    setpdf(id)
    setLoad(true)
}

const HandleTest = (id) => {
    settest(id)
    setLoad(false)
}


    return (
        <div className='body'>
            <Header/>
            <div className='block-lab'> 
                <div className='panel'>
                    <div style={{textAlign: "center"}}>
                        <div className='panel-title'>
                            <div >
                                <img src={theory} width='40px' height='40px'/>
                            </div>
                            <p>Теоретический материал</p>
                        </div>
                        
                        <div className='panel-button'>
                            <a onClick={() => HandleTheory(1)}>теория 1</a>    
                        </div>

                        <div className='panel-button'>
                            <a onClick={() => HandleTheory(2)}>Теория 2</a>
                        </div>

                        <div className='panel-button'>
                            <a onClick={() => HandleTheory(2)}>Теория 3</a>
                        </div>
                    </div>

                    <div style={{textAlign: "center"}}>
                        <div className='panel-title'>
                            <img src={tests} width='40px' height='40px'/>
                            <p>Тестовые задания</p>
                        </div>

                        <div className='panel-button'>
                            <a onClick={() => HandleTest(2)}>Тест 1</a></div>
                        <div className='panel-button'>тест 2</div>
                        <div className='panel-button'>тест 3</div>    
                    </div>
                </div>
                <div className='block-pdf'>
                    {load && <PdfViewer pdfdoc={pdfdoc}/>}
                </div>

                {/*  <Quest номер теста={номеру теста}/> */}
                    {!load && <Quest testdoc={testdoc}/>}
            </div>
        </div>
    );
};

export default Labs;
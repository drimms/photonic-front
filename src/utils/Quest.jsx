import React, { useState, useEffect } from 'react';
import './Quest.css'
import result from '../assets/icon/resultcat.gif'
import PostService from './FetchAPI';

import '@react-pdf-viewer/core/lib/styles/index.css';

const quest = [
    {
        title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." ',
        variant: ['asdasd', 'sdfsdfs', 'sdfsdfsdf'],
        correct: 0
    },
    {
        title: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Е',
        variant: ['asdasd', 'sdfsdfs', 'sdfsdfsdf'],
        correct: 3
    },
    {
        title: 'Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. ',
        variant: ['asdasd', 'sdfsdfs', 'sdfsdfsdf'],
        correct: 2
    }
]

const Quest = ({testdoc}) => {
    const [laboratory, setLabs] = useState()
    let id = 'lab/quest'

    useEffect(() =>{
            PostService.fetchAPI(id)
            .then(p=>
                setLabs(p)
            )
        }, [])
    
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = quest[step]
    //const question = laboratory[step]
    let progress = Math.round(step / quest.length * 100)
    
    const handleClick = (index) => {
            setStep(step + 1)
            if (index == question.correct) {
                setCorrect(correct + 1)
            }
            
        }

    return (
        <div className='App-test'>
           <div className='block-test'>
            <div className="progress">
                <div style={{ width: `${progress}%` }} className="progress__inner"></div>
            </div>
            {testdoc}
                {
                    step != quest.length 
                    ? (
                    <div>
                        <h5>{question.name}</h5>
                    <ul className='ul'>
                        {question.variant.map((answer, index) =>(
                            <li 
                            className='li'
                            key={index} 
                            onClick={() => handleClick(index)}
                            >{answer}</li>
                        ))}
                    </ul>
                    </div>)
                    : (
                        <div className='App-test'>
                            <img width='200px'src={result}/>
                            <p>Ваш результат {correct} из {quest.length}</p>
                            <a href="/">
                                <button className='button'>Повторить</button>
                            </a>
                            
                        </div>
                        
                    )
                }
            </div> 
        </div>
    );
};

export default Quest;
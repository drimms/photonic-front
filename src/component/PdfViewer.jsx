import { Viewer } from '@react-pdf-viewer/core';
import React from 'react';
import '../App.css'
import { Worker } from '@react-pdf-viewer/core';
import test from '../resource/1.pdf'
{/* <embed 
                src={'bb'} 
                width='100%'  
                type="application/pdf" 
                className='block-pdf-pdf'
                /> */}

const PdfViewer = ({pdfdoc}) => {
   // src={`${test}?#zoom=100&scrollbar=0&toolbar=0&navpanes=0`} 
   let link = `../resource/${pdfdoc}.pdf`
   console.log(link)

    return (
        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer fileUrl={link}/>
        </Worker>
        // <embed 
        // src={`${link}`} 
        // width='100%'  
        // type="application/pdf" 
        // className='block-pdf-pdf'
        // >
        //     </embed>
        
    );
};

export default PdfViewer;
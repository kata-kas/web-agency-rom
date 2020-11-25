import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import About from '../components/about';

export default function DespreNoi(){
    return(
        <div style={{backgroundColor:'white'}}>
            <Navbar/>
            <div style={{ paddingTop:'10%', paddingBottom:'10%'}}>
            <About/>
            </div>
            <Footer/>
        </div>
    );
}
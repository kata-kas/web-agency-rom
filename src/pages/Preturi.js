import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Pricing from '../components/Pricing';

export default function Preturi(){
    return(
        <div style={{backgroundColor:'white'}}>
            <Navbar />
            <div style={{marginTop:'10%'}}>
            <Pricing/>
            </div>
            <Footer/>
        </div>
    )
}
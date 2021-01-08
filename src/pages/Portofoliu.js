import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Portofolios from '../components/portfolio';

export default function Portofoliu(){
    return(
        <div>
            <Navbar/>
            <div style={{ paddingTop:'10rem', paddingBottom:'10rem'}}>
            <Portofolios/>
            </div>
            <Footer/>
        </div>
    );
}
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Portofolios from '../components/portfolio';

export default function Portofoliu(){
    return(
        <div>
            <Navbar/>
            <div style={{ paddingTop:'5%', paddingBottom:'10%'}}>
            <Portofolios/>
            </div>
            <Footer/>
        </div>
    );
}
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contacte from '../components/contact';

export default function Contact(){
    return(
        <div>
            <Navbar/>
            <div style={{ paddingTop:'5%', paddingBottom:'10%'}}>
            <Contacte/>
            </div>
            <Footer/>
        </div>
    )
}
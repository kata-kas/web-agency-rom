import React from 'react';
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.js';
import Footer from '../components/footer.js';

export default function Home(){
    return (
        <div>
        <Navbar/>
        <Intro/>
        <Footer/>
        </div>
    );
}

import React from 'react';
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.js';
import Footer from '../components/footer.js';
import First from '../img/webdev.svg';
import {Row, Col, Container} from 'react-bootstrap'
import InfiniteCarousel from 'react-leaf-carousel';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useTranslation} from "react-i18next";

export default function Home(){
   const [t] = useTranslation();
    return (
        <div>
        <Navbar/>
        <Intro/>
        <Footer/>
        </div>
    );
}

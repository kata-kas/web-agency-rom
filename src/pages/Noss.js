import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.js';

export default function Noss(){
    return(
        <div>
            <Navbar/>
            <div style={{ paddingTop:'5%', paddingBottom:'10%'}}>
            <section
        className="sect-mt4 route"
        style={{ height: '100%', padding: '5em' }}
      >
        <h1>noss-lifestyle.ro</h1> 
        <br/>
        <h2>
        Pentru Noss am realizat un site de prezentare a cursului, in momentul de fata construim pentru ei o platforma de cursuri online pe nisa de Fitness. 
        Am realizat un front-end in framework-ul Next.js (React).
        <br/><br/>
        Design Unic. Incarcare rapida. SEO Performant.<br/><br/>
        
        Acestea sunt cele 3 caracteristici care definesc site-ul pe care noi l-am creat pentru Noss.
        </h2>
        </section >
        <section className="sect-mt4 route"
        style={{ height: '100%', padding: '5em' }}>
        <h1>Magazin Online Rapid</h1>
        <h2>
        Designul acestui site a fost realizat cu cele mai moderne tehnologii, ceea ce a permis incarcarea foarte rapida, desi sunt prezente 3 video-urii pe prima pagina.        </h2>
        </section>
       
         </div>    
        <Footer/>
        </div>
    )
}

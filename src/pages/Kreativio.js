import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.js';

export default function Kreativio(){
    return(
        <div>
            <Navbar/>
            <div style={{ paddingTop:'5%', paddingBottom:'10%'}}>
            <section
        className="sect-mt4 route"
        style={{ height: '100%', padding: '5em' }}
      >
        <h1>kreativio.ro</h1> 
        <br/>
        <h2>
        Pentru Kreativio am realizat un magazin online si un site de prezentare. 
        Este unul dintre cele mai provocatoare proiecte pe care le-am realizat. 
        Am realizat un front-end in framework-ul Angular (JavaScript) si am folosit Express.js si Node.js ca si backend, iar pentru comunicarea intre cele doua am folosit Graphql si Apollo.
        <br/><br/>
        Design Fresh. Incarcare rapida. SEO Performant.<br/><br/>
        
        Acestea sunt cele 3 caracteristici care definesc site-ul pe care noi l-am creat pentru Kreativio.
        </h2>
        </section >
        <section className="sect-mt4 route"
        style={{ height: '100%', padding: '5em' }}>
        <h1>Magazin Online Rapid</h1>
        <h2>
        Cu un timp de incarcare de sub 1.5 secunde pe retele 3G, kreativio.ro este unul dintre cele mai rapide magazine online pe care le-am realizat. 
        Designul acestui site a fost realizat cu cele mai moderne tehnologii, ceea ce a permis incarcarea foarte rapida. Nu facem rabat de la calitatea graficii - noi gasim solutii pentru asigurarea vitezei!
        </h2>
        </section>
        <section className="sect-mt4 route"
        style={{ height: '100%', padding: '5em' }}>
        <h1>Magazin Online Rapid</h1>
        <h2>
        Am realizat site-ul kreativio.ro cu cele mai populare tehnologii de pe piata: Angular si ExpressJS. Pentru a implementa un SEO excelent, am ales sa utilizam Universal Ng care realizeaza Server-Side Rendering (SSR) pentru AngularJS.

        Codul CSS a fost scris in Sass. Astfel, am asigurat o mentenanta rapida si eficienta. Am creat posibilitatea de reutilizare de stiluri si am redus timpul de incarcare pentru stylesheet.
        </h2>
        </section>
         </div>    
        <Footer/>
        </div>
    )
}

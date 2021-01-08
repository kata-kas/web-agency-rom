import React  from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import dev from '../img/dev.jpg'
import mobile from '../img/mobile.png'
import design from '../img/design.png'
import branding from '../img/branding.png'
import promotion from '../img/promotion.png'
import support from '../img/support.png'
import {motion, AnimatePresence} from 'framer-motion'
import { SplitText } from '../components/splitText'


const containerVariants={
    hidden:{
        x:-750,
        opacity: 0
    },
    visible:{
        x:0,
        opacity:1
    }
}

export default function Servicii(){
    return(
        <div style={{backgroundColor:'white', padding:'7rem'}}>
            <Navbar />
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              > Oferim o gama completa de servicii pentru proiecte la orice nivel si la orice stadiu de pregatire - de la inceput, unde este doar o idee care trebuie dezvoltatata, prin unelte si promovare, la rezultatul final, unde este nevoie de suport tehnic.
                </SplitText>
              </motion.div>
            </AnimatePresence>
            <motion.div className="servicii grid-container" >
            <motion.div class="grid-item"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{duration:1, type:'tween'}}
            whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={dev} alt=""/>
                <h1> DEZVOLTARE WEB</h1>
Analytics, documentare<br/>
UI/UX Design<br/>
Design adaptiv<br/>
Layout<br/>
Creare de pagini web de la zero in framework Javascrip, PHP sau Python<br/>
Dezvoltare si integrare template cu un CMS<br/>
Implementare<br/>
Creare de continut<br/>
Testare<br/>
Suport<br/>
            </motion.div>
            <motion.div class="grid-item"
            initial={{y:750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.1, type:'tween'}}
            whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}
            >
                <img src={mobile} alt=""/>
                <h1>MOBILE DEVELOPMENT</h1>
Analytics, documentare<br/>
UI/UX Design<br/>
Dezvoltare: native, cross-platform<br/>
Publicare<br/>
Testare<br/>
Suport<br/>
            </motion.div>
            <motion.div class="grid-item"initial={{y:-750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.2, type:'tween'}}
            whileHover={{scale:1.1, boxShadow: "0px 0px 8px red",}}>
                <img src={design} alt=""/>
                <h1>DESIGN</h1>
Analytics<br/>
Cercetari Comprehensive<br/>
UI/UX Design<br/>
Design Informational<br/>
Promovare<br/>
Creare de continut foto, ilustrat si video<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={branding} alt=""/>
                <h1>BRANDING</h1>
Dezvoltare a Brand-ului<br/>
Creare de identitate Brand (Nume, Slogan)<br/>
Creare de Logo, identitate vizuala<br/>
Creare de produse si mock upsbr/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={promotion} alt=""/>
                <h1>PROMOVARE</h1>
SEO<br/>
SMM<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={support} alt=""/>
                <h1>SUPORT</h1>
                Suport Tehnic <br/>
                Hosting<br/>
                Administrare websiten<br/>
                Solutii High-load<br/>
            </motion.div>
            </motion.div>
            <Footer/>
        </div>
    )
}
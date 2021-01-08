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
              >
                We offer a full range of services for projects of any level and any stage of readiness - from the start, when there is only an idea that needs development, creation of tools and promotion, to the final result, when the resource is in need of technical support.
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
                <h1>WEB DEVELOPMENT</h1>
Analytics, research<br/>
UI/UX Design<br/>
Adaptive design<br/>
Layout<br/>
Logic development, templates integration with CMS<br/>
Implementation<br/>
Content creation<br/>
Testing<br/>
Support<br/>
            </motion.div>
            <motion.div class="grid-item"
            initial={{y:750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.1, type:'tween'}}
            whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}
            >
                <img src={mobile} alt=""/>
                <h1>MOBILE DEVELOPMENT</h1>
Analytics, research<br/>
UI/UX Design<br/>
Development: native, cross-platform<br/>
Publication<br/>
Testing<br/>
Support<br/>
            </motion.div>
            <motion.div class="grid-item"initial={{y:-750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.2, type:'tween'}}
            whileHover={{scale:1.1, boxShadow: "0px 0px 8px red",}}>
                <img src={design} alt=""/>
                <h1>DESIGN</h1>
Analytics<br/>
Comprehensive Studies<br/>
UI/UX Design<br/>
Informational design<br/>
Promo<br/>
Usability Testing Site or Prototypes<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={branding} alt=""/>
                <h1>BRANDING</h1>
Brand platform development<br/>
Naming, slogan development<br/>
Logo, corporate identity<br/>
Development of prints and souvenir products<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={promotion} alt=""/>
                <h1>PROMOTION</h1>
SEO<br/>
Contextual advertising<br/>
SMM<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px red",}}>
                <img src={support} alt=""/>
                <h1>SUPPORT</h1>
                Technical support<br/>
                Hosting<br/>
                System administration<br/>
                High-load solutions<br/>
            </motion.div>
            </motion.div>
            <Footer/>
        </div>
    )
}
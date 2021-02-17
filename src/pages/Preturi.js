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
import {useTranslation} from 'react-i18next'

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
    const [t]=useTranslation();
    const gama=t("gama");
    return(
      <div>
       
            <Navbar /> <div style={{ paddingTop:'10rem', paddingBottom:'10rem',paddingLeft:'5rem',paddingRight:'10rem'}}>
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
               {gama}
              </motion.div>
            </AnimatePresence>
            <motion.div className="servicii grid-container" >
            <motion.div class="grid-item"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{duration:1, type:'tween'}}
>
                <img src={dev} alt=""/>
                <h1> {t('dezvoltare')}</h1>
                {t('analytics')}<br/>
                UI/UX Design<br/>
                {t("design_adaptiv")}<br/>
                Layout<br/>
                {t("creare")}<br/>
                {t("dezvoltare_integrare")}<br/>
                {t("Implementare")}<br/>
                {t("Creare de continut")}<br/>
                {t("Testare")}<br/>
                {t("Suport")}<br/>
            </motion.div>
            <motion.div class="grid-item"
            initial={{y:750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.1, type:'tween'}}
            
            >
                <img src={mobile} alt=""/>
                <h1>{t("MOBILE DEVELOPMENT")}</h1>
{t('analytics')}<br/>
UI/UX Design<br/>
{t("dez_native")}<br/>
{t("Publicare")}<br/>
{t("Testare")}<br/>
{t("Suport")}<br/>
            </motion.div>
            <motion.div class="grid-item"initial={{y:-750}}
            animate={{y:0}}
            transition={{duration:1, delay:0.2, type:'tween'}}
            >
                <img src={design} alt=""/>
                <h1>DESIGN</h1>
{t('analytics')}<br/>
{t("cercetari")}<br/>
UI/UX Design<br/>
{t("Design Informațional")}<br/>
{t("Promovare")}<br/>
{t("creare_continut")}<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
>
                <img src={branding} alt=""/>
                <h1>BRANDING</h1>
{t("Dezvoltare a Brand-ului")}<br/>
{t("identitate")})<br/>
{t("Creăm Logo și identitate vizuală")}<br/>
{t("Creăm produse și mock ups")}<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
>
                <img src={promotion} alt=""/>
                <h1>{t("PROMOVARE")}</h1>
SEO<br/>
SMM<br/>
            </motion.div>
            <motion.div className="grid-item"
            transition={{duration:1, delay:0.2, type:'tween'}}
>
                <img src={support} alt=""/>
                <h1>{t("Suport")}</h1>
                {t("Suport Tehnic ")}<br/>
                Hosting<br/>
                {t("Administrare website")}<br/>
            </motion.div>
            </motion.div>
            </div>
            <Footer/>
        </div>
    )
}
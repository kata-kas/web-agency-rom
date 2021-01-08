import React from "react";
import Circuits from './Circuits';
import Typed from "react-typed";
import '../styles/stars.scss';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <section>
      <div id="home" className="intro route bg-image background">
       <Circuits/>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container" style={{textAlign: 'left'}}>
              <p className="intro-title">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Pagini web",
                      "Magazine online ",
                      "Aplicații web/de mobil",
                      "Design Grafic",
                      "Strategie SEO",
                      "Administrare social media"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <motion.h3
              whileHover={{textShadow: "0px 0px 8px #0062d3"}}
              >Pentru Afaceri de Succes </motion.h3>
              <motion.p className="pt-3"
               whileHover={{
               scale:1.1,
               originX:0,
               textShadow: "0px 0px 8px rgb(255,255,255)",
               }}>
                <Link to="/portofoliu" className="btn btn-primary btn js-scroll px-4">
                Despre Noi</Link>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Intro;

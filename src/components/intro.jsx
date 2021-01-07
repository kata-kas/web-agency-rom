import React from "react";
import Circuits from './Circuits';
import Typed from "react-typed";
import '../styles/stars.scss';
import {Link} from 'react-router-dom';

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
              <h3>Pentru Afaceri de Succes </h3>
              <p className="pt-3">
                <Link to="/portofoliu" className="btn btn-primary btn js-scroll px-4">
                Despre Noi</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Intro;

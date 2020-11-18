import React from "react";
import Circuits from './Circuits';
import Typed from "react-typed";
import '../styles/stars.scss';

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <section>
      <div id="home" className="intro route bg-image background">
       <Circuits/>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, we are Jobster Software</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developers",
                      "Back End Developers",
                      "Software Engineers"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View Our Work
                </a>
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

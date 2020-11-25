import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";


class Portfolios extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Pagini Web Create de noi
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://kreativio.ro" target="blank_" rel="noopener">
                  <div className="work-img">
                  <img src={stock} alt="kreativio" className="img-fluid"/>
                  </div></a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://kreativio.ro" target="blank" alt="kreativio">Kreativio</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular, Apollo, Nodejs
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://noss-lifestyle.com" target="blank_" rel="noopener">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">NOSS Lifestyle</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React, Next.js, Netlify
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://www.mrcleaner.de/" target="blank_" rel="noopener">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div></a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mr Clean</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Php, Laravel
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>          
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolios;

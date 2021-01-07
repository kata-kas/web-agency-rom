import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/stock4.png"
import stock4 from "../img/celestius.png"
class Portfolios extends React.Component {
  render() {
    return (
      <div>
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
                    <img src={stock1} alt="noss lifestyle" className="img-fluid" />
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
                    <img src={stock2} alt="mr cleaner" className="img-fluid" />
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
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://www.nabservices.at/" target="blank_" rel="noopener">
                  <div className="work-img">
                    <img src={stock3} alt="nab services " className="img-fluid" />
                  </div></a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">NAB Services</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Html5, Css3, Javascript, JQuery 
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
      <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <p className="subtitle-a">
                Logo-uri Create de noi
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://www.facebook.com/corul.celestius" target="blank_" rel="noopener">
                  <div className="work-img">
                  <img src={stock4} alt="celestius" className="img-fluid"/>
                  </div></a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://www.facebook.com/corul.celestius" target="blank" alt="celestius">Corul Celestius</a></h2>
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
        </div>
        </section>
        </div>
    );
  }
}

export default Portfolios;

import React from "react";
import {useTranslation} from 'react-i18next';

//import stock
import stock from "../img/image1.png";
import stock1 from "../img/image2.png";
import stock3 from "../img/stock4.png"
import stock5 from "../img/jobster.png"
import stock6 from "../img/adler.png"

export default function Portofolios() {
    const [t]=useTranslation();
    return (
      <div>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">{t('portofoliu')}</h3>
                <p className="subtitle-a">
                  {t('pagini_create')}
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jobster-synergy.com" target="blank_" rel="noopener">
                  <div className="work-img">
                    <img src={stock5} alt="jobster" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Jobster-Synergy Group</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React, Django
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
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://www.apotheke-sonthofen.de" target="blank_" rel="noopener">
                  <div className="work-img">
                  <img src={stock6} alt="kreativio" className="img-fluid"/>
                  </div></a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"><a href="https://www.apotheke-sonthofen.de" target="blank" alt="Adler Apotheke">Adler Apotheke</a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Wordpress
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
                          </span>
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
            
          </div>
        </div>
      </section>
        </div>
    );
  }




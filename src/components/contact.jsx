import React from "react";
import imageOverlay from "../img/earth.jpg";
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify-icons/fa-brands/facebook';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import {withTranslation} from "react-i18next";


class Contacte extends React.Component {
  render() {
    const { t } = this.props;
   
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">{t("trimite")}</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.submitForm}
                          action="https://formspree.io/f/mleowgqq"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                          {t("am_primit")}
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder={t("Nume Prenume")}
                                  data-rule="minlen:3"
                                  data-msg="Te rugăm să introduci cel puțin trei litere"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder={t("Adresa ta de Email")}
                                  data-rule="email"
                                  data-msg="Te rugăm să introduci o adresă de email validă"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder={t("Subiect")}
                                  data-rule="minlen:4"
                                  data-msg="Te rugăm să introduci cel puțin 8 litere"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Care este mesajul tău?"
                                  placeholder={t("Mesaj")}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                {t("Trimite Mesajul")}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">{t("Contactează-ne")}</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                        {t("fie")}
                          <br />
                          {t("doar")} 😊
                        </p>
                        <ul className="list-ico">
                                <li><span className="ion-ios-location"></span> Cal. Timisorii, Nr 212, Arad, Romania</li>
                                <li><span className="ion-ios-telephone"></span><a href="tel:0040755177060">+40 755 177 060</a></li>
                                {/* <!-- <li><span class="ion-email"></span> contact@example.com</li>--> */}
                                </ul> 
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/jaysoftwarero"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                             <Icon icon={facebookIcon} color="#3b5998" width="3em" height="3em" />
                            </a>
                          </li>
                          <li>
                            <a 
                            href="https://www.instagram.com/jay_software/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                              <Icon icon={instagramFilled} color="#833AB4" width="3em" height="3em" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default withTranslation()(Contacte);

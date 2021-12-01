import '../style.css';
import {Container, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from 'react-i18next';


function Footer(){
    const [t]=useTranslation();
    return(
        <div style={{backgroundColor:'white', padding:'5%'}}>
        <Container className="footer" style={{color:"#007BFF"}}>
            <Row>
                <Col style={{textAlign:'left'}}><a href="https://www.facebook.com/jaysoftwarero" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#007BFF"/></a> &nbsp; &nbsp;

                        <a href="https://www.instagram.com/jay_software/" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#007BFF"/> </a>&nbsp; &nbsp;   </Col>
            </Row>
            <Row>
                 <Col style={{textAlign:'left'}}>
                     <p>Jay Software {t("powered")} <a href="https://jobster-synergy.com" target="_blank" rel="noreferrer">Jobster-Synergy Group</a></p> 
                 </Col>
            </Row>
        </Container>
    );
}

export default Footer;

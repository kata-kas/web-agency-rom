import '../style.css';
import {Container, Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div style={{backgroundColor:'white', padding:'5%'}}>
        <Container className="footer" style={{fontFamily:'Poppins', color:"#007BFF"}}>
            <Row>
                <Col><Link to="/termeni-si-conditii" style={{ textDecoration: 'none', color:"#007BFF" }}>Termeni și Condiții</Link></Col>
                <Col style={{fontFamily:'Poppins', fontSize:'medium'}}> 
                    <p>Jay Software powered by <a href="https://jobster-synergy.com" target="_blank" rel="noreferrer">Jobster-Synergy Group</a></p> 
                </Col>
                <Col style={{textAlign:'right'}}><a href="https://www.facebook.com/jaysoftwarero" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#007BFF"/></a> &nbsp; &nbsp;

                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Flaurentiu_noss%3Figshid%3D1pjqqzjmmnkkw%26fbclid%3DIwAR0Xr_nPOuuyaQ_1mbw72FvsfDst924L7buJEYAdot2Sys8fENtU-q5V_9w&h=AT2Jdf_oSq8fqjILyBCXl8IxZnbwAdXPdYUoiIicYw_PFKSoQkpJIciIo5VPnKyD8XKA9-PLqEsDPBPH2O8CFaGBNzW53Eu0GARwXwELRi4lqLLfdmnWSJHPvxd337uTNB-GDnTClQ4" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#007BFF"/> </a>&nbsp; &nbsp;   </Col>
            </Row>
            <Row>
                <Col><Link to="/contact" style={{ textDecoration: 'none', color:"#007BFF" }}>Contact</Link></Col>
                <Col></Col> 
                <Col></Col> 
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container></div>
    );
}

export default Footer;
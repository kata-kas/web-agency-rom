import '../style.css';
import {Container, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div style={{backgroundColor:'white', padding:'5%'}}>
        <Container className="footer" style={{color:"#007BFF"}}>
            <Row>
                <Col style={{textAlign:'left'}}><a href="https://www.facebook.com/jaysoftwarero" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#007BFF"/></a> &nbsp; &nbsp;

                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Flaurentiu_noss%3Figshid%3D1pjqqzjmmnkkw%26fbclid%3DIwAR0Xr_nPOuuyaQ_1mbw72FvsfDst924L7buJEYAdot2Sys8fENtU-q5V_9w&h=AT2Jdf_oSq8fqjILyBCXl8IxZnbwAdXPdYUoiIicYw_PFKSoQkpJIciIo5VPnKyD8XKA9-PLqEsDPBPH2O8CFaGBNzW53Eu0GARwXwELRi4lqLLfdmnWSJHPvxd337uTNB-GDnTClQ4" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#007BFF"/> </a>&nbsp; &nbsp;   </Col>
            </Row>
        </Container>
        <div style={{textAlign:'left', marginTop:'5%'}}>
        <p>&nbsp; &nbsp;Jay Software powered by <a href="https://jobster-synergy.com" target="_blank" rel="noreferrer">Jobster-Synergy Group</a></p> 
        </div></div>
    );
}

export default Footer;
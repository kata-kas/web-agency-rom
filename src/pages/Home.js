import React from 'react';
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import Footer from '../components/footer.js';
import First from '../components/Firstsvg.js';
import {Row, Col, Container, Button} from 'react-bootstrap'
import InfiniteCarousel from 'react-leaf-carousel';
import {Link} from 'react-router-dom'
export default function Home(){
    return (
        <div>
        <Navbar/>
        <Intro/>
        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    autoCycle={true}
    sideSize={0.1}
    slidesToScroll={3}
    sidesOpacity={0}
    slidesToShow={3}
    scrollOnDevice={true}
  >
    <div style={{filter:'brightness("20%")'}}>
      <img
        alt=""
        src="https://s13emagst.akamaized.net/layout/ro/images/logo//49/73695.svg" width="100" height="108" style={{ webkitFilter: 'grayscale(1)'}}
      />
    </div>
   
    <div>
      <img
        alt=""
        src="https://gist.githubusercontent.com/CatalinCsnMaster/c870c4caac8af34a78cde7feae3c447b/raw/73f2f55eff8b744251a49c202097ebdbab5451ef/nabservices.svg"  width="100" height="108" style={{ webkitFilter: 'grayscale(1)'}}
/>
    </div>
    <div>
        <img alt="" src="https://www.mrcleaner.at/projects/mrcleaner/dist/img/logo.png" style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"
/>
    </div>
    <div>
        <img alt="" src="https://image.jimcdn.com/app/cms/image/transf/dimension=434x10000:format=jpg/path/sa8af04c2a516ffdb/image/id1a289163e85e9e2/version/1490619323/image.jpg" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div>
    <div>
        <img alt="" src="https://www.fruechte-frick.de/uploads/9/3/7/9/93796804/frick-rgb_1.png" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div>
    <div>
        <img alt="" src="https://www.meineapotheke.de/shop/adler-apotheke-sonthofen-87527/images/shop_logos/5db978a75281a_adlera.jpg" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div>
    <div>
        <img alt="" src="https://www.klug-conservation.de/img/klug-logo-434.png" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div>
    <div>
        <img alt="" src="https://www.axelot.ru/bitrix/templates/logistics/img/logo.svg" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div> 
    <div>
        <img alt="" src="https://www.artlebedev.com/zaryadye/identity/zaryadye-main-logo-eng.gif" 
        style={{ webkitFilter: 'grayscale(1)'}} width="100" height="108"/>
    </div> 
  </InfiniteCarousel>

        <Container fluid style={{
            padding:'7%'
        }}>
        <Row xs={1} md={2} lg={2} >
        <Col xs={{order:'last'}} lg={{order:'first'}} md={{order:'first'}}>
            <h2 
            style={{color:'#007BFF'}}>DIN OFFLINE CĂTRE SUCCESS</h2><br/><br/><br/>
            <h3 >Web Design | Visual Design<br/>Dezvoltare Web | Online Marketing</h3><br/><br/>
            <p
            style={{color:'grey'}}>Ai o idee pe care dorești să o implementezi? <br/>
            Cauți un suflu nou pentru afacerea ta?<br/>
            Dorești să fii mai aproape de clienții tăi și să-ti crești vizibillitatea? <br/>
            Competiția a devenit acerbă și dorești să te evidențiezi? <br/>
            Soluțiile se află doar în mediul online iar noi le aducem la îndemână ta.</p><br/>            
            <Link to="/contact">
          <Button size="lg">Cere o cotație</Button>
          </Link>
        </Col>
        <Col>
                <First/>
        </Col>
        </Row>
        </Container>
        <Footer/>
        
        </div>
    );
}
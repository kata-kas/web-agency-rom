import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faAngular, faVuejs, faJsSquare, faPython, faPhp, faDocker, faNode, faJava, faLaravel, faAws, faGithub} from '@fortawesome/free-brands-svg-icons';


class About extends React.Component {
  
  render() {
    return (
      <section >
        <div className="box-shadow-full" style={{margin:'5%', textAlign:'center'}}>
          <h1>Technologies We Use</h1>
          <FontAwesomeIcon icon={faJsSquare} size="5x" color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faReact} size="5x" color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faAngular} size="5x"  color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faVuejs} size="5x" color="#007BFF" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faPython} size="5x"  color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faPhp} size="5x"  color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faDocker} size="5x" color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faNode} size="5x" color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faJava} size="5x" color="#007BFF"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faLaravel} size="5x" color="#007BFF" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faAws} size="5x" color="#007BFF" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faGithub} size="5x" color="#007BFF"/>
          <h2>And more</h2>
        </div>
      </section>
    );
  }
}

export default About;

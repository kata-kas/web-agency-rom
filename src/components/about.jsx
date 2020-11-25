import React from 'react';
import Icons from './Icons';

class About extends React.Component {
  
  render() {
    return (
      <section style={{margin:'2%'}}>
        <div className="box-shadow-full" style={{margin:'2%', textAlign:'center'}}>
          <Icons/>
        </div>
      </section>
    );
  }
}

export default About;

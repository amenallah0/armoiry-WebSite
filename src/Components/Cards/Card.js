import React from 'react';
import { Carousel } from 'antd';
import carimg from"../images/Stade1.png"
const contentStyle = {
  Margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#CAD7EF',
  border: '1px solid',
  borderRadius:'15px',
};

const App = () => (
  <div  >

  <Carousel autoplay dotPosition='left' fade='#364d79' style={{minHeight:"100px"}}>
    <div  >
      <img src={carimg} alt='' />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>

  </div>
);
export default App;
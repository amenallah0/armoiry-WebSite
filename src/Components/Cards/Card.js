import React from 'react';
import { Carousel } from 'antd';

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
  <Carousel autoplay dotPosition='left' fade='#364d79' >
    <div>
      <h3 style={contentStyle}>1</h3>
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
);
export default App;
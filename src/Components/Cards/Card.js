import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';

import img1 from '../images/background2.jpg';
import img2 from '../images/background3.jpg';

const images = [img1, img2];

const contentStyle = {
  margin: '15px 0',
  color: '#C2D5F8',
  lineHeight: '160px',
  textAlign: 'center',
  border: '1px solid',
  borderRadius: '5px',
  height: '450px',
  // Removed width: '100%' as we define it in imageStyle
  objectFit: 'contain', // Ensure all images are fully visible
};

const overlayStyle = {
  position: 'absolute',
  top: '50%', // Centrer verticalement
  left: '25%', // Centrer horizontalement
  transform: 'translate(-50%, -50%)', // Décaler de moitié de la taille de l'encart
  height: '25%',
  width: '40%', // 50% width to cover the left half of the image
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const textContainerStyle = {
  padding: '10px', 
  textAlign: 'center',
  color: 'black', 
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
  fontSize: '50px', 
  border: '0.5px solid black', 
  borderRadius: '25px',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
  backdropFilter: 'blur(10px)', 
};


const imageStyle = {
  height: '450px',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '0 35px 35px 0', // Rounded corners on the right side
};

const App = () => {
  const [autoplay] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [autoplay]);

  return (
   // Set image width to 30%
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '50px' }}>
      <Carousel autoplay={autoplay} ref={carouselRef} dotPosition="left" effect="fade">
        {images.map((image, index) => (
          <div key={index} style={{ marginBottom: '20px', height: '100%', width: '100%', position: 'relative', display: 'flex' }}>
            <div style={overlayStyle}>
              <div style={textContainerStyle} >
                <p>تلقاو عنا أعز الأفريات بأرخص الأسوام</p>
                <p>و التوصيل لباب الدار</p>
              </div>
            </div>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ ...contentStyle, ...imageStyle }}
            />
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default App;

import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import { FaShoppingCart } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './Card.css';

import backgroundImage1 from '../images/Home1.jpg';
import backgroundImage2 from '../images/Home2.jpg';
import backgroundImage3 from '../images/Home3.jpg';


const images = [backgroundImage1, backgroundImage2,backgroundImage3];

const contentStyle = {
  margin: '15px 0',
  height: '120px',
  objectFit: 'contain',
};

const overlayStyle = {
  position: 'absolute',
  top: '45%',
  left: '50%', // Positionner à gauche à 50%
  transform: 'translate(-50%, -50%)', // Centrer horizontalement
  height: '25%',
  width: '100%', // Définir la largeur à 100%
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};


const textContainerStyle = {
  marginTop:'280px',
  textAlign: 'center',
  color: 'white',
  fontSize: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Ajout de l'ombre au texte
};

const imageStyle = {
  height: '450px',
  objectFit: 'cover',
  width: '99vw', 
  marginLeft:'5px'
};



const translate = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const IconContainer = styled.div`
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
`;

const CartIcon = styled(FaShoppingCart)`
  margin-right: 35px;
`;

const AnimatedIconContainer = styled(IconContainer)`
  display: inline-block;
  animation: ${translate} 10s linear infinite;
`;

const App = () => {
  const [autoplay] = useState(true);
  const carouselRef = useRef(null);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [autoplay]);

  useEffect(() => {
    const iconWidth = 24;
    const screenWidth = window.innerWidth;
    const initialIconsCount = Math.ceil(screenWidth / (iconWidth + 55));
    const initialIcons = Array.from({ length: initialIconsCount }, (_, index) => (
      <CartIcon key={`initial-${index}`} />
    ));
    setIcons(initialIcons);

    const addIconsIntervalId = setInterval(() => {
      const newIconsCount = icons.length + 40;
      const newIcons = Array.from({ length: newIconsCount - icons.length }, (_, index) => (
        <CartIcon key={`new-${index + icons.length}`} />
      ));
      setIcons(prevIcons => [...prevIcons, ...newIcons]);
    }, 2000);

    const handleResize = () => {
      const newIconsCount = Math.ceil(screenWidth / (iconWidth + 55));
      if (newIconsCount > icons.length) {
        const newIcons = Array.from({ length: newIconsCount - icons.length }, (_, index) => (
          <CartIcon key={`resize-${index + icons.length}`} />
        ));
        setIcons(prevIcons => [...prevIcons, ...newIcons]);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(addIconsIntervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      overflowX: 'hidden',
      borderRadius: '0 0 45px 45px'
    }}>
      <AnimatedIconContainer>{icons}</AnimatedIconContainer>
      <div>
        <Carousel autoplay={autoplay} ref={carouselRef} dotPosition="left" effect="fade">
          {images.map((image, index) => (
            <div key={index} style={{
              height: '100%',
              position: 'relative',
              display: 'flex',
            }}>
              <div style={overlayStyle}>
                <div style={textContainerStyle}>
                  <p style={{ marginBottom: '5px' }}>تلقاو عنا أعز الأفريات بأرخص الأسوام</p>
                  <p style={{ marginBottom: '5px' }}>و التوصيل لباب الدار</p>
                  <br/>
                  <Link to="/SignUp">
                  <Button type="dashed" size={'middle'} style={{ marginRight: '10px', color: 'white' , backgroundColor:'transparent'}}>
                    Sign Up
                  </Button>
                  </Link>
                  <Link to="/Apropos">
                  <Button type="dashed" size={'middle'} style={{ marginRight: '10px', color: 'white' , backgroundColor:'transparent'}}>
                    A Propos De Nous
                  </Button>
                  </Link>
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
    </div>
  );
}

export default App;

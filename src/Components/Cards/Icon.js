import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const IconContainer = styled.div`
  margin-top: 20px;
  overflow: hidden; /* Masquer les icônes qui dépassent du conteneur */
  white-space: nowrap; /* Empêcher les icônes de passer à la ligne */
`;

const CartIcon = styled(FaShoppingCart)`
  margin-right: 20px;
  animation: ${translate} 5s linear infinite; /* 5s pour une animation de 5 secondes, ajustez selon vos besoins */
`;

const Icon = () => {
  const iconWidth = 24; // Largeur de chaque icône en pixels
  const screenWidth = window.innerWidth; // Largeur de l'écran en pixels
  const iconsCount = Math.ceil(screenWidth / (iconWidth + 20)); // Calculer le nombre d'icônes nécessaires en fonction de la largeur de l'écran

  const icons = Array.from({ length: iconsCount + 1 }, (_, index) => (
    <CartIcon key={index} />
  )); // Générer les icônes, +1 pour assurer la continuité du défilement

  return <IconContainer>{icons}</IconContainer>;
};

export default Icon;

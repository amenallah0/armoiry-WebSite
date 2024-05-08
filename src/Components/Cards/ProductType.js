import React from 'react';
import { Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './ProductType.css';

import ProduitHomme from './../images/produithomme.jpg';
import ProduitFemme from './../images/produitfemme.jpg';
import ProduitBebe from './../images/produitbebe.jpg';


function Type() {
  return (
    
    <div className='Product-Type'>
      <div className='Produit'>
        Nos Produits
      </div>
      <div className='images-container'>
      <div className='image-container'>
        <Image
          boxSize='300px'
          objectFit='fill'
          src={ProduitHomme}
          alt='Homme'
          className='image'
        />
        <div className='overlay'>
          <div className='title'>Produit Homme</div>
          <Link to='/ProduitHomme'>
          <Button type="dashed" size={'big'} style={{ marginRight: '10px', color: 'white' , backgroundColor:'transparent',border:'1 solid white', borderRadius:'20px'}}>
            Voir Plus</Button>
        </Link>

        </div>
      </div>
      <div className='image-container'>
        <Image
          boxSize='300px'
          objectFit='fill'
          src={ProduitFemme}
          alt='Femme'
          className='image'
        />
        <div className='overlay'>
          <div className='title'>Produit Femme</div>
          <Link to='/ProduitFemme'>
          <Button type="dashed" size={'big'} style={{ marginRight: '10px', color: 'white' , backgroundColor:'transparent',border:'1 solid white', borderRadius:'20px'}}>
            Voir Plus</Button>
        </Link>
        </div>
      </div>
      <div className='image-container'>
        <Image
          boxSize='300px'
          objectFit='fill'
          src={ProduitBebe}
          alt='Bebe'
          className='image'
        />
        <div className='overlay'>
          <div className='title'>Produit Bébé</div>
          <Button type="dashed" size={'big'} style={{ marginRight: '10px', color: 'white' , backgroundColor:'transparent',border:'1 solid white', borderRadius:'20px'}}>
            Voir Plus</Button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Type;

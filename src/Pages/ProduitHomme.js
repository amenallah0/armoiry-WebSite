import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';

import img1 from '../Components/images/gar1.webp'

import './ProduitHomme.css'

function ProduitHomme() {
  return (
    <div className='Homme-item-container'>
      <div className='Homme-Title-items'>
        <h1>Nos Produits Pour Les Hommes</h1>
      </div>
      <div className='Homme-elements-container'>
        <div className='Homme-Side-Bar'>
          <h4>Hauts</h4>
          <hr class="Homme-separator" />
            <div className='Homme-SideBar-buttons'> 
              <button>T-shirts</button> 
              <button>Polos</button>
              <button>Chemises </button>
              <button>Sweatshirts</button>
              <button>Capuchons (hoodies)</button>
              <button>Vestes (bombers, denim, cuir, casual) </button>
              <button>Manteaux (hiver, trench, caban)</button>
            </div>
          <hr class="Homme-separator" />
          <h4>Bas</h4>
          <hr class="Homme-separator" />
          <div className='Homme-SideBar-buttons'> 
            <button>Jeans</button> 
            <button>Pantalons chino</button>
            <button>Pantalons habillés</button>
            <button>Shorts</button>
            <button>Joggings</button>
            <button>Maillots de bain</button>
          </div>
          <hr class="Homme-separator" />
          <h4>Chaussures</h4>
          <hr class="Homme-separator" />
          <div className='Homme-SideBar-buttons'> 
            <button>Baskets</button> 
            <button>Bottes</button>
            <button>Sandales</button>
          </div>
          <hr class="Homme-separator" />
        
          <h4>Échelle des prix</h4>
          <hr className="Homme-separator" />
          <div className='Homme-SideBar-buttons'> 
            <div class="Homme-price-range-filter">
              <label for="minPrice">Prix minimum:</label>
              <input type="number" id="minPrice" name="minPrice" min="0" />
              <label for="maxPrice">Prix maximum:</label>
              <input type="number" id="maxPrice" name="maxPrice" />
              <button type="button">Filtrer par prix</button>
            </div>
          </div>
        </div>
        <div className='Homme-products-item'>
          <img
            src={img1}
            alt="Green double couch with wooden legs"
            style={{ objectFit:'fill'}} // Adjust for desired roundness
          />
          <div className="product-details">
            <h3 className='Homme-Title-product'>Living room Sofa</h3>
            <p className='Homme-About-Product'>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces,
              earthy toned spaces and for people who love a chic design with a sprinkle
              of vintage design.
            </p>
            <span style={{ color: "blue", fontSize: "1.5rem", marginLeft:'10px' }}>$450</span>
          </div>
          <div className="product-actions">
            <button className="primary">Buy now</button>
            <button className="secondary">Add to cart</button>
          </div>
        </div>
        <div className='Homme-products-item'>
          <img
            src={img1}
            alt="Green double couch with wooden legs"
            style={{ objectFit:'fill'}} // Adjust for desired roundness
          />
          <div className="product-details">
            <h3 className='Homme-Title-product'>Living room Sofa</h3>
            <p className='Homme-About-Product'>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces,
              earthy toned spaces and for people who love a chic design with a sprinkle
              of vintage design.
            </p>
            <span style={{ color: "blue", fontSize: "1.5rem", marginLeft:'10px' }}>$450</span>
          </div>
          <div className="product-actions">
            <button className="primary">Buy now</button>
            <button className="secondary">Add to cart</button>
          </div>
        </div>
        <div className='Homme-products-item'>
          <img
            src={img1}
            alt="Green double couch with wooden legs"
            style={{ objectFit:'fill'}} // Adjust for desired roundness
          />
          <div className="product-details">
            <h3 className='Homme-Title-product'>Living room Sofa</h3>
            <p className='Homme-About-Product'>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces,
              earthy toned spaces and for people who love a chic design with a sprinkle
              of vintage design.
            </p>
            <span style={{ color: "blue", fontSize: "1.5rem", marginLeft:'10px' }}>$450</span>
          </div>
          <div className="product-actions">
            <button className="primary">Buy now</button>
            <button className="secondary">Add to cart</button>
          </div>
        </div>
        <div className='Homme-products-item'>
          <img
            src={img1}
            alt="Green double couch with wooden legs"
            style={{ objectFit:'fill'}} // Adjust for desired roundness
          />
          <div className="product-details">
            <h3 className='Homme-Title-product'>Living room Sofa</h3>
            <p className='Homme-About-Product'>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces,
              earthy toned spaces and for people who love a chic design with a sprinkle
              of vintage design.
            </p>
            <span style={{ color: "blue", fontSize: "1.5rem", marginLeft:'10px' }}>$450</span>
          </div>
          <div className="product-actions">
            <button className="primary">Buy now</button>
            <button className="secondary">Add to cart</button>
          </div>
        </div>
        
      </div>  
    </div>
    
    )

}

export default ProduitHomme
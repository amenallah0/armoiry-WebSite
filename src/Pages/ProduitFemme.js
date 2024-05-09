import React from 'react'
import './ProduitFemme.css'

function ProduitFemme() {
  return (
    <div className='Femme-item-container'>
    <div className='Femme-Title-items'>
      <h1>Nos Produits Pour Les Femmes</h1>
    </div>
    <div className='Femme-elements-container'>
    <div className='Femme-Side-Bar'>
      <h4>Hauts</h4>
      <hr class="Femme-separator" />
      <div className='Femme-SideBar-buttons'> 
        <button>T-shirts</button> 
        <button>Polos</button>
        <button>Chemises </button>
        <button>Sweatshirts</button>
        <button>Capuchons (hoodies)</button>
        <button>Vestes (bombers, denim, cuir, casual) </button>
        <button>Manteaux (hiver, trench, caban)</button>
      </div>
      <hr class="Femme-separator" />
      <h4>Bas</h4>
      <hr class="Femme-separator" />
      <div className='Femme-SideBar-buttons'> 
        <button>Jeans</button> 
        <button>Pantalons chino</button>
        <button>Pantalons habillés</button>
        <button>Shorts</button>
        <button>Joggings</button>
        <button>Maillots de bain</button>
      </div>
      <hr class="Femme-separator" />
      <h4>Chaussures</h4>
      <hr class="Femme-separator" />
      <div className='Femme-SideBar-buttons'> 
        <button>Baskets</button> 
        <button>Bottes</button>
        <button>Sandales</button>
      </div>
      <hr class="Femme-separator" />
      
      <h4>Échelle des prix</h4>
      <hr className="Femme-separator" />
      <div className='Femme-SideBar-buttons'> 
          <div class="Femme-price-range-filter">
            <label for="minPrice">Prix minimum:</label>
            <input type="number" id="minPrice" name="minPrice" min="0" />

            <label for="maxPrice">Prix maximum:</label>
            <input type="number" id="maxPrice" name="maxPrice" />

            <button type="button">Filtrer par prix</button>
           </div>

      </div>
    </div>
    </div>  
    
    </div>
    
    )

}

export default ProduitFemme
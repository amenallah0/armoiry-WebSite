import React from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Rate, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'

import './Item.css';
import gar1 from './../images/gar1.webp'
import gar2 from './../images/gar2.jpg'
import gar3 from './../images/gar3.jpg'

const { Meta } = Card;
const App = () => (
  <div className='item-container'>
    <div className='Title-items'>
      <h1>Nos Promotions</h1>
    </div>
    <div className='elements-container'>
    <div className='Side-Bar'>
      <h4>Browse</h4>
      <hr class="separator" />
      <div className='SideBar-buttons'> 
        <button>Tous les produits</button> 
        <button>Produits Homme</button>
        <button>Produits Femme</button>
        <button>Produits Bébé</button>
      </div>
      <hr class="separator" />
      <h4>Marque</h4>
      <hr class="separator" />
      <div className='SideBar-buttons'> 
        <button>Nike</button> 
        <button>Adidas</button>
        <button>H&M</button>
        <button>Exist</button>
        <button>H&M</button>
        <button>Exist</button>
        <button>H&M</button>
        <button>Exist</button>
      </div>
      <hr class="separator" />
      
      <h4>Échelle des prix</h4>
      <hr class="separator" />
      <div className='SideBar-buttons'> 
          <div class="price-range-filter">
            <label for="minPrice">Prix minimum:</label>
            <input type="number" id="minPrice" name="minPrice" min="0" />

            <label for="maxPrice">Prix maximum:</label>
            <input type="number" id="maxPrice" name="maxPrice" />

            <button type="button">Filtrer par prix</button>
           </div>

      </div>
    </div>
      <Row gutter={8} justify="center" align="top" style={{border:'1px solid #C0C0C0', borderRadius:'10px'}}>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16 , margin:'15px'}}>
          <Card
            style={{ width: '100%' }}
            cover={
              <img
                alt="example"
                src={gar1}
                style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici

              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16, margin:'15px'}}>
          <Card
            style={{ width: '100%' }} // Modifiez la largeur en pourcentage pour augmenter la taille
            cover={
              <img
              alt="example"
              src={gar1}
              style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici
            />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16 , margin:'15px'}}>
          <Card
            style={{ width: '100%' }} // Modifiez la largeur en pourcentage pour augmenter la taille
            cover={
              <img
                alt="example"
                src={gar2}
                style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici

              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16, margin:'15px' }}>
          <Card
            style={{ width: '100%' }} // Modifiez la largeur en pourcentage pour augmenter la taille
            cover={
              <img
                alt="example"
                src={gar1}
               style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici

              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16 , margin:'15px'}}>
          <Card
            style={{ width: '100%' }} // Modifiez la largeur en pourcentage pour augmenter la taille
            cover={
              <img
                alt="example"
                src={gar1}
               style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici

              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 16 , margin:'15px'}}>
          <Card
            style={{ width: '100%' }} // Modifiez la largeur en pourcentage pour augmenter la taille
            cover={
              <img
                alt="example"
                src={gar1}
               style={{ objectFit: 'fill', height: '300px' }} // Ajustez la taille de l'image ici

              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined />,
            ]}
            hoverable // Add hoverable functionality
            bordered // Add bordered style
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title="Card title"
              description="This is the description"
            />
            <Rate allowHalf defaultValue={3.5} style={{ marginTop: '7px' }} />
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default App;

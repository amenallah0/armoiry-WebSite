import React from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Rate, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

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
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        
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
    <Button style={{width:'200px', margin:'auto'}}>Voir Tout Les Produits</Button>
  </div>
);

export default App;

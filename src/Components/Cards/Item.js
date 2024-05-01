import React from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './Item.css'

const { Meta } = Card;
const App = () => (
  <div className='item-container'>
    <div className='Title-items'>
      <h1>Nos Promotions</h1>
    </div>
    <Row gutter={8} justify="center" align="top"> {/* Ajoutez align="top" */}
      <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 8 , marginLeft:'5px'}}>
        <Card
          style={{ width: '90%' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
      <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 8 }}>
        <Card
          style={{ width: '90%' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
      <Col xs={24} sm={12} md={8} lg={6} style={{ padding: 8 }}>
        <Card
          style={{ width: '90%' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
);

export default App;

import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Row 
} from 'antd';

import './SignUp.css';


const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className='SignUp-container'>
      <div className='Title'>Sign Up</div>


    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Username">
       <Input style={{ whiteSpace: 'pre-wrap' }} />
      </Form.Item>
      <Form.Item label="Mot De Passe">
      <Input type="password" />
      </Form.Item>
      <Form.Item
        label={
          <div style={{ lineHeight: '1.2em' }}>
            Confirmé <br />Mot De Passe
          </div>
        }
      >
      <Input type="password" />
      </Form.Item>
      <Form.Item label="Genre">
        <TreeSelect
          treeData={[
            {
              title: 'Homme',
              value: 'Homme',
            },
            {
              title: 'Femme',
              value: 'Femme',
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Votre Email">
       <Input />
      </Form.Item>
      <Form.Item label="Votre Numéro">
       <Input  />
      </Form.Item>
      {/* <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      <Form.Item
        label={
          <div style={{ lineHeight: '1.2em' }}>
            Date de<br />Naissance
          </div>
        }
      >
        <DatePicker />
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Row justify="center">
          <Button>Confirmé</Button>
        </Row>
      </Form.Item>
    </Form>
    </div>
  );
};
export default App;
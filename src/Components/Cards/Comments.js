import React from 'react';
import { Avatar, List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Calendar from './Calendar'; // Adjust the import path as needed
import CalendarWrapper from './CalendarWrapper'; // Import the new wrapper component

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const Comment = () => (
  <div style={{ display: 'flex' }}>
    <List
      style={{ marginTop: '20px', width: '50%', marginRight: '30px' }} // Add margin-right for comments
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 2,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <Space key="actions">
              <StarOutlined />
              156
            </Space>,
            <Space key="like">
              <LikeOutlined />
              156
            </Space>,
            <Space key="message">
              <MessageOutlined />
              2
            </Space>,
          ]}
          extra={
            <img
              style={{ borderRadius: 8 }}
              className="avatar-img"
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
          style={{
            border: '2px solid #d9d9d9',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
            marginBottom: '16px',
            padding: '16px',
            transition: 'transform 0.2s',
            width: '100%',
            boxSizing: 'border-box',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.zIndex = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.zIndex = '0';
          }}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} style={{ borderRadius: '50%' }} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
    {/* Wrap the Calendar component with CalendarWrapper */}
    <CalendarWrapper>
      <Calendar style={{ width: '50%' }} /> {/* Set the width of the calendar */}
    </CalendarWrapper>
  </div>
);

export default Comment;

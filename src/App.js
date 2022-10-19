import { Menu, Layout, Image } from "antd";
import { UserOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import './App.css';
import React, { useState } from "react";

const { Content, Footer, Header, Sider } = Layout;
const topNavItemList = ["Schedule", "Registration", "Grades", "Online Payment"].map((item, index) => ({
  index,
  label: item
}));
const sideNavItemLabelList = ["User", "Payments"];
const sideNavItemList = [UserOutlined, MoneyCollectOutlined].map((icon, index) => {
  return {
    key: `nav-${index}`,
    icon: React.createElement(icon),
    label: sideNavItemLabelList[index]
  };
});

const App = () => {
  return (
    <Layout>
    <Header className="app-header">
      <div style={{float:'left'}}>
      <img src="/logo.png"/>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={topNavItemList} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={sideNavItemList}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
};

export default App;

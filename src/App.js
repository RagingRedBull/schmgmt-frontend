import { Menu, Layout } from "antd";
import { UserOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import './App.css';
import React from "react";
import ScheduleTable from "./component/schedule/ScheduleTable";
import LoginComponent from "./component/login/LoginComponent";
import { Link, Route, Routes } from "react-router-dom";
import GradesTableComponent from "./component/grade/GradesTableComponent";

const { Content, Header, Sider } = Layout;
const topNavUrlList = ['schedule', 'registration', 'grades', 'payment', 'user'];
const topNavComponentList = [<ScheduleTable />, <LoginComponent />, <GradesTableComponent />];
const topNavItemList = ["Schedule", "Registration", "Grades", "Payments", "User"].map((item, index) => ({
  index,
  label: <Link to={topNavUrlList[index]}>{item}</Link>
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
        <div style={{ float: 'left' }}>
          <img src="/logo.png" alt="School logo" />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={topNavItemList} />
      </Header>
      <Content
        className="site-layout-content"
      >
        <Routes>
          {
            topNavUrlList.map((item, index) => {
              if (index < 3)
                return <Route path={item} element={topNavComponentList[index]} />;
              else
                return <Route path={item} />;
            })
          }
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;

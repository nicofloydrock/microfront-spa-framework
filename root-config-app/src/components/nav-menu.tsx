
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function NavMenu() {
  const [collapsed, setState] = useState(false);

  const  onCollapse = (collapsed:boolean) => {
    console.log(collapsed);
    setState(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              MICROFRONT HAZE
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Productos
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Ventas
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>XXX</Breadcrumb.Item>
              <Breadcrumb.Item>JJJJ</Breadcrumb.Item>
            </Breadcrumb>
            

            <div id="single-spa-application:app-productos"></div>
            <div id="single-spa-application:app-ventas"></div>


          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
}

export default NavMenu;


import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { navigateToUrl } from 'single-spa';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function NavMenu() {


    const [selectedItem, setSelectedItem] = useState<string>("none");

    const handleClick = (url: string , selectedItem:string): void => {
        setSelectedItem(url.split("/")[1]);
        navigateToUrl(url);
    }

    
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
            <Menu.Item  onClick={() => handleClick('/home' , 'home')} 
            
                    key="1" icon={<PieChartOutlined />}>
              MICROFRONT HAZE
            </Menu.Item>
            <Menu.Item onClick={() => handleClick('/productos' , 'productos')} 
                    key="2" icon={<DesktopOutlined />}>
              Productos
            </Menu.Item>
            <Menu.Item onClick={() => handleClick('/ventas' , 'ventas')} 
                    key="9" icon={<FileOutlined />}>
              Ventas
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Back Office</Breadcrumb.Item>
              <Breadcrumb.Item>{selectedItem}</Breadcrumb.Item>
            </Breadcrumb>
            

            <div id="single-spa-application:app-productos"></div>
            <div id="single-spa-application:app-ventas"></div>
            <div id="single-spa-application:app-home"></div>
            <div id="single-spa-application:app-login"></div>




          </Content>
          <Footer style={{ textAlign: 'center' }}>Nico Rivera MicroFront AntdReact</Footer>
        </Layout>
      </Layout>
  );
}

export default NavMenu;

import React from 'react'
import './App.css'
import 'antd/dist/antd.css'

import Login from './components/login/login'
import Head from './components/head/head'
import SlideBar from './components/slide/slideBar'
import Home from './components/pages/home'
import { Layout } from 'antd';
const { Header,Sider, Content,Footer } = Layout;

class App extends React.Component{ 
  render(){ 
    return (
    <Layout>
      {/* <Login /> */}
      <Header>
        <Head/>
      </Header>
      <Layout>
        <Sider>
          <SlideBar />
        </Sider>
        <Content>
          <Home />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    )
  }
}

export default App
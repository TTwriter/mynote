import React from 'react'
import './App.css'
import './components/pages/scss/page.css'
// import RouterConfig from './router/router.js'
import Login from './components/login/login'
import Head from './components/head/head'
import Foot from './components/foot/foot'
import Nav from './components/nav/nav'
import Home from './components/pages/home'
import { Layout } from 'antd';
const { Header,Sider, Content,Footer } = Layout;


class App extends React.Component{ 
  render(){ 
    return (
     
    <Layout>
       {/* <RouterConfig/> */}
      {/* <Login /> */}
      <Header>
        <Head/>
      </Header>
      <Layout >
        <div className='clearfix'>
          <div className='sider left'>
            <Nav />
          </div>
          <div className='content left'>
            <Home />
          </div>
        </div>
      </Layout>
      {/* <Footer>
        <Foot/>
      </Footer> */}
    </Layout>
    )
  }
}

export default App
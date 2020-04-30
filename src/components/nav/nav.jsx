import React from 'react'

import './scss/nav.css'
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { CalendarOutlined,UserAddOutlined } from '@ant-design/icons';
import {Link,HashRouter} from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className='navBar'> 
        <HashRouter>
          <Menu
            style={{ width: 100 }}
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/pageOne">
              <UserAddOutlined />
                主页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/pageTwo">
                <CalendarOutlined />
                集锦
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/pageThree">
                <CalendarOutlined />
                菜单
              </Link>
            </Menu.Item>
          </Menu>
          
        </HashRouter>
      </div>
    );
    }
  }
  
  export default Nav
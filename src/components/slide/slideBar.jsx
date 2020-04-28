import React from 'react'
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { MailOutlined, CalendarOutlined } from '@ant-design/icons';
import {Link,HashRouter} from 'react-router-dom'

class Slide extends React.Component {
  render() {
    return (
      <div> 
        <HashRouter>
          <Menu
            style={{ width: 200 }}
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/home/pageOne">
                <MailOutlined />
                Navigation One
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home/pageTwo">
                <CalendarOutlined />
                Navigation Two
              </Link>
            </Menu.Item>
          </Menu>
        </HashRouter>
      </div>
    );
    }
  }
  
  export default Slide
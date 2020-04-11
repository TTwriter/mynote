import React from 'react'
import './menu.css'
import 'antd/dist/antd.css';
import {Link,HashRouter} from 'react-router-dom'
import {Menu, Icon } from 'antd'
// const { Menu, Icon } = antd;
// 
const { SubMenu } = Menu;
class MenuList extends React.Component { // 创建类
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    };
    render(){ // 将页面通过return返回给调用者  必须有一个根节点包裹 同vue的使用  
        return(
            <ul className="menuList">
                <HashRouter>
                    <li style={{fontSize:18}}> {/* 行内样式写法 style={{color:'red'，fontSize:12}} */}
                        <Link to="/welcome" style={{color:'red'}}>
                            tab1
                        </Link>
                    </li>
                    <li>
                        <Link to="/welcome2">
                            tab2
                        </Link>
                    </li>
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        style={{ width: 256 }}
                    >
                        <SubMenu
                        key="sub1"
                        title={
                            <Link to="/welcome">
                                <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                                </span>
                            </Link>
                        }
                        >
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                            </span>
                        }
                        >
                        </SubMenu>
                        <SubMenu
                        key="sub4"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>Navigation Three</span>
                            </span>
                        }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </HashRouter>
            </ul>
        )
    }
}
export  default MenuList  //将该组件暴露出去
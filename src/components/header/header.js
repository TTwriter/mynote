import React, { Component } from 'react'
import './header.css'

class Header extends Component { // 创建类
    render(){ // 将页面通过return返回给调用者  必须有一个根节点包裹 同vue的使用
        return(
            <div className="header">
                <h1>LOGO</h1>
                <span>登录</span>
            </div>
        )
    }
    
}
export  default Header  //将该组件暴露出去




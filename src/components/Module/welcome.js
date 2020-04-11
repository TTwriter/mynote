import React, { Component } from 'react'

class Welcome extends Component { // 创建类
    render(){ // 将页面通过return返回给调用者  必须有一个根节点包裹 同vue的使用
        return(
            <div className="welcome">
                <h1>welcome to 我是1111</h1>
            </div>
        )
    }
    
}
export  default Welcome  //将该组件暴露出去



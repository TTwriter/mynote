import React,{Component} from 'react'
import './scss/head.css'
import { Avatar, Popover} from 'antd'

class Header extends Component{
  // constructor(props){
  //   super(props)
  //   this.state()
  // }
  loginOut = ()=> {
    console.log('sjhjdh')
  }
  render(){ 
    const text = <span>个人信息</span>
    const content = (
      <div>
        <p onClick={ this.loginOut() }>退出</p>
        <p>个人中心</p>
      </div>
    )
    return (
      <div className='head clearfix'>
          <div className='left'>AUTHOR</div>
          <div className='right'>
            <Popover placement="bottom" title={text} content={content} trigger="click" className='userName'>
              <Avatar>U</Avatar>
            </Popover>
          </div>
      </div>
    )
  }
}

export default Header
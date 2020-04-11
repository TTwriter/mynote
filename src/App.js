import 'antd/dist/antd.css'
import Button from 'antd/es/button'
import React from 'react'
import './App.css'
import {Col,Row} from 'antd'
import Header from './components/header/header'
import Index from './components/index/index'
import Add from './components/example/add'
import List from './components/example/list'
import Login from './components/login'

// function App() { // {/*简单组件方法 function 方法名*/}

class App extends React.Component{  // {/* 复杂组件方法*/}
  state = {
    list:[]
  } 
  componentWillMount(){
    console.log("组件挂载之前")
    
  }
  componentDidMount() { //
    setTimeout(() => {
      this.setState({ //setState方法 可以更新数据
        list:['传值','传值','方式']
      })
    }, 1000)
  }
  add = (value)=>{
    console.log(value)
    const {list} = this.state
    list.unshift(value)
    this.setState({
      list
    })
  }
  render(){ 
    const {list} = this.state
    const length = list.length
    return (
      <Row className='container'>
        <Header/>
        <Col className="main">
              <Index />  
              <Add allAdd={this.add} length={length}/>
              
              <List list={list} />
              <Button type="primary">Button</Button>
          </Col>
      </Row>
    )
  }
}

export default App
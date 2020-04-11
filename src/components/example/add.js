import React from 'react'

class Add extends React.Component{
    add = (value)=> {
        console.log(this.input.value)
        if(!this.input.value){
            return
        }
        this.props.allAdd(this.input.value)
        this.input.value = ''
    }
    render() {
        const {length} = this.props
        return(
            <div className="">
                <input type="text" ref={(input)=>{this.input = input}} placeholder="组件之间的传值"/>
                <button onClick={this.add}>add#{length}</button>
            </div>
        )
    }
}
export default Add; 
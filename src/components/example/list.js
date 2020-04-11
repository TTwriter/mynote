import React from 'react'

class List extends React.Component{
    render() {
        console.log(this.props.list) //组件的props取值
        const {list} = this.props
        const flag = list.length ? 'none' : 'block'
        return(
            <div>
                <p style={{display:flag}}>loading...</p>
                <ul>
                    {
                        list && list.map((v,i)=>{
                            return <li key={i}>{v}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default List 
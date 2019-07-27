import React, { Component,useState,useEffect } from 'react'



//函数组件 状态管理 useState useEffect

function ClockFunc() {
    // useState创建一个状态和修改该状态的函数
    const [date, setDate] = useState(new Date());
    // useEffect编写副作用代码
    useEffect(() => {
    // 启动定时器是我们的副作用代码
    const timerID = setInterval(() => {
    setDate(new Date());
    }, 1000);
    // 返回清理函数
    return () => clearInterval(timerID);
    }, []);// 参数2传递空数组使我们参数1函数仅执行一次
    return <div>{date.toLocaleTimeString()}</div>;
    }
    




class Clock  extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:new Date()
        }
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({
                data:new Date() 
            },()=>{
                this.props.change(this.state.data)
            })
        })
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                {this.state.data.toLocaleTimeString()}
            </div>
        )
    }
}

export default class StateMg extends Component {
  render() {
    return (
      <div>
        <Clock change={ (data)=>{} } />
        <ClockFunc/>
      </div>
    )
  }
}

import React, { Component } from 'react'

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
        <Clock/>
      </div>
    )
  }
}

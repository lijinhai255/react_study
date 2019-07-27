//用户事件处理
import React, { Component } from 'react'

export default class EventHandle extends Component {
    
    
    constructor(props){
        super(props)
        this.state ={
            name:""
        }

    }

    // handleChange(e){
    //     this.setState({
    //         name:e.target.value
    //     })
        
    // }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
        
    }
    

    render(){
        return(
            <div>
                {/*<input type="text" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>*/}
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                {this.state.name}
            </div>
        )
    }
    
}

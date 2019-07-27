import React from 'react'

//1 创建上下文 context 传值
const Context = React.createContext()
//2获取Provider 和Consumer
const Provider = Context.Provider
const Consumer = Context.Consumer


function Child(props) {
    return (
        <div onClick={()=>props.add() }>
            {props.counter}
        </div>
    )
}


export default class ContextText extends React.Component  {

    state = {
        counter:0
    }
    add =()=>{
        this.setState({ counter:this.state.counter+1})
    }

    render(){
        return (
            <Provider value={{counter:this.state.counter,add:this.add}}>
                <Consumer>
                    {value=><Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value=><Child {...value}></Child>}
                </Consumer>
            </Provider>
        )
    }
}

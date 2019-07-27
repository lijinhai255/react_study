import React from 'react'
import { func } from 'prop-types';

//1 创建上下文 context 传值
const Context = React.createContext()
//2获取Provider 和Consumer
const Provider = Context.Provider
const Consumer = Context.Consumer

// function withContent(Comp){
//     return function(props){
//         const content = lessons[props.idx]
//         return <Comp {...content} />
//     }
// }

//withConsumer 高阶组件 根据配置返回一个高阶组件
function WithConsumer(Consumer) {
    return Comp => props => {
        return <Consumer>{value => <Comp {...value}></Comp>}</Consumer>
    }
}
//
const Child = WithConsumer(Consumer)(
    function(props){
        return (
            <div onClick={() => props.add()}>
                {props.counter}
            </div>
        )
    }
)




export default class ContextText extends React.Component {

    state = {
        counter: 0
    }
    add = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <Provider value={{ counter: this.state.counter, add: this.add }}>
               <Child/>
               <Child/>
               <Child/>
               <Child/>
            </Provider>
        )
    }
}

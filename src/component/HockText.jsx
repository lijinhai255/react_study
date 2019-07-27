import React, { useState, useEffect, useReducer, useContext } from "react";

// 创建上下文
const Context = React.createContext();

function fruitReducer(state, action) {
    switch (action.type) {
        case "init":
            return action.payload;
        case "add":
            return [...state, action.payload];
        default:
            return state;
    }
}


//仅用来展示水果列表
function FruitList({ fruits, onSetFruit }) {
    return (
        <ul>
            {fruits.map(f => (
                <li key={f} onClick={() => onSetFruit(f)}>
                    {f}
                </li>
            ))}
        </ul>
    )
}

// 声明输入组件
function FruitAdd(props) {
    // 输入内容状态及设置内容状态的方法
    const [pname, setPname] = useState("");
    const {dispatch} = useContext(Context)

    // 键盘事件处理
    const onAddFruit = e => {
        if (e.key === "Enter") {
            dispatch({ type: "add", payload: pname })
            setPname("");
        }
        // 开课吧web全栈架构师
        // 副作用钩子 Effect Hook
        // useEffect 给函数组件增加了执行副作用操作的能力。
        // 副作用（Side Effect）是指一个 function 做了和本身运算返回值无关的事，比如：修改了全局变量、修改了传入的
        // 参数、甚至是 console.log()，所以 ajax 操作，修改 dom 都是算作副作用。
        // 异步数据获取，更新HooksTest.js
        // 如果副作用操作对某状态有依赖，务必添加依赖选项
        // 清除工作：有一些副作用是需要清除的，清除工作非常重要的，可以防止引起内存泄露
    };
    return (
        <div>
            <input
                type="text"
                value={pname}
                onChange={e => setPname(e.target.value)}
                onKeyDown={onAddFruit}
            />
        </div>
    );
}

export default function HooksTest() {
    // useState(initialState)，接收初始状态，返回一个由状态和其更新函数组成的数组
    const [fruit, setFruit] = useState("");
    // const [fruits, setFruits] = useState([])
    const [fruits, dispatch] = useReducer(fruitReducer, []);

    //键盘事件处理
    useEffect(() => {
        setTimeout(() => {
            // setFruits(['香蕉', '西瓜'])
            dispatch({ type: "init", payload: ['香蕉', '西瓜'] })
        }, 1000);
    }, [])// 设置空数组意为没有依赖，则副作用操作仅执行一次
    useEffect(() => {
        document.title = fruit;
    }, [fruit]);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('msg');
        }, 1000);
        return function () {
            clearInterval(timer);
        }
    }, []);

    return (
        <Context.Provider value={{fruits,dispatch}}>
            <div>
                {/* <FruitAdd onAddFruit={pname => setFruits([...fruits, pname])} /> */}
                <FruitAdd />
                <p>{fruit === "" ? "请选择喜爱的水果：" : `您的选择是：${fruit}`}</p>
                <FruitList fruits={fruits} onSetFruit={setFruit} />
            </div>
        </Context.Provider>
    );
}

import React from 'react'
import { func } from 'prop-types';


function DiaLog(props) {
    const messages = {
        foo: { title: 'foo', content: 'foo~' },
        bar: { title: 'bar', content: 'bar~' }
    }
    const { def, footer } = props.children(messages[props.msg])
    return (
        <div style={{ border: "1px solid blue" }}>
            {def}
            <div>{footer}</div>
        </div>
    )
}
export default function Composition() {
    return (
        <div>
            <DiaLog msg="foo">
                {({ title, content }) => ({
                    def: (
                        <>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </>
                    ),
                    footer: <button onClick={() => alert("react真好")}>确定</button>
                })}
            </DiaLog>
            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="ng">angular</Radio>
            </RadioGroup>

        </div>
    )
}

function RadioGroup(props){
    return(
        <div>
            {React.Children.map(props.children,radio=>{
                //只能克隆 
                return React.cloneElement(radio,{name:props.name})
            })}
        </div>
    )
}

function Radio({children, ...rest}) {
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    )
}
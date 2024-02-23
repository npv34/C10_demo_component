import { useState } from "react";

function Input(props) {
    const [text, setText] = useState("")

    const showInput = (evt) => {
        setText(evt.target.value)
    }

    return (
        <>
            <label>{props.label}</label>
            <input type={props.type} onChange={showInput}/>
            <p>{text}</p>
        </>
    )
}

export default Input;
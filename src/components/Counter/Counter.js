import { useState } from "react";

function Counter(props) {

    const [message, setMessage] = useState("Xin chao cac ban");
    const [showMessage, setShownMessage] = useState(false);

    const viewMessage = () => {
        setShownMessage(!showMessage);
    }

    return (
        <>
        Counter: {props.value} - 
        {showMessage && message}
        <br/>
        <button onClick={props.changeNumber}>+</button>
        <button onClick={props.downNumber}>-</button>
        <button onClick={viewMessage}>{!showMessage ? "show" : "hide"} message</button>
        </>
    )
}

export default Counter;
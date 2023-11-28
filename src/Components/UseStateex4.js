import React,{useState} from "react";

const TextCounter = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowtext] = useState(true);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
                setShowtext(!showText);
            }}> Click here</button>
            {showText && <p>This is a text</p>}
        </div>  
    )
}

export default TextCounter;
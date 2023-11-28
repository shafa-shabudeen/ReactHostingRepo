import React, {useState} from "react";

const InputChanger = () => {
    const [inputValue, setInputValue] = useState("Default");

    let changer = (e) => {
        const newvalue = e.target.value;
        setInputValue(newvalue);
    };

    return(
        <div>
            <br></br>
            <input placeholder="Enter Some Text" onChange={changer}></input>
            <br></br>
            {inputValue}
            <br></br>
        </div>
    )
}

export default InputChanger;
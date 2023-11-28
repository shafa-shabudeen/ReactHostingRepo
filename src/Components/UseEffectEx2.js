import React, {useState, useEffect} from "react";

const SquareEx = () => {
    var [counter, setCounter] = useState(100);
    var [number, squareNumber] = useState(0);

    useEffect(()=>{
        console.log("useEffect invoked")
        squareNumber(()=>counter**2);
    })

    return(
        <div>
            <h1>Counter Value is {counter}</h1>
            <button onClick={()=>{setCounter((counter)=counter+10)}}>Square</button>
            <h2>The square of {counter} is {number}</h2>
        </div>
    )
}

export default SquareEx;
import React, {useState,useEffect} from "react";

function UseEffectTimer() {
    const [count , setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000);
    })

    return(
        <div>
            <h1>I have rendered {count} times!</h1>
        </div>
    )
}

export default UseEffectTimer;
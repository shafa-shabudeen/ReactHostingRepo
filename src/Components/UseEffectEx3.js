import React, {useState, useEffect} from "react";

const EffectEx = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState("Shafa");

    useEffect(()=>{
        console.log("compound Mounted");
        document.title=`chats ${count}`;
    },[data])

    function updateCount(){
        setCount(count+1);
    }

    function updaeData(){
        setData(data+"Shabudeen");
    }

    return(
        <div>
            <h1>Button clicked {count} times</h1><br></br>
            <button onClick={updateCount}>Click Me</button><br></br>
            <h5>Data is {data}</h5><br></br>
            <button onClick={updaeData}>Update Data</button>
        </div>
    )
}

export default EffectEx;
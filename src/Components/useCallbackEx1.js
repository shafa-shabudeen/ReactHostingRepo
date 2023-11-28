import { useState, useCallback } from "react";
import ChildHook from "./ChildHook";

function CallbackHook(){
    const [counter, setCounter] = useState(0);
    const [item, setItem] = useState(100);

    const calls = useCallback(()=>{
         console.log("callBack is called...");
    },[counter])

    return(
        <div>
            <ChildHook calling={calls} count={counter} />
            <h3>{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Incr</button>
            <h3>{item}</h3>
            <button onClick={()=>setItem(item*10)}>mul</button>
        </div>
    )
}

export default CallbackHook;
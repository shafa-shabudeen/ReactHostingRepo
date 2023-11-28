import { useMemo, useState } from "react";

function MemoHook(){
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(0);

    // const Multiply = () =>{
    //     console.log("Calls Automatically everytime...");
    //     return add*10;
    // }

    //  const a = Multiply();
    //  console.log(a);

     const multiplication = useMemo(function Multiply(){
        console.log("Calls Automatically everytime...");
        return add*10;
     },[add])
    return(
        <div>
            <h2>{multiplication}</h2>
            <h2>Added Value: {add}</h2>
            <button onClick={()=>setAdd(add+1)}>Inc</button>
            <h2>Subract Value: {sub}</h2>
            <button onClick={()=>setSub(sub-1)}>Sub</button>
        </div>
    )
}

export default MemoHook;
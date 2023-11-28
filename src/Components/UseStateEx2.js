import React, {useState} from "react";

const ColorChanger = () =>{
    const[color, setcolor] = useState("black");

    const updateColor = () => {
        setcolor("white");
    }

    return(
        <div>
            <h4>My Favorite color is {color}</h4>
            <button onClick={updateColor}>Change Color1</button>
            <button onClick={()=>{setcolor("pink")}}>Change Color2</button>
            <button onClick={()=>{setcolor("green")}}>Change Color3</button>
            <button onClick={()=>{setcolor("violet")}}>Change Color4</button>
        </div>
    )
}

export default ColorChanger;
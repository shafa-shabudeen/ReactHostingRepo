import {React, memo} from "react";

function ChildHook({calling,count}){
    console.log("Child Component");
    return count*10;
}

export default memo(ChildHook);
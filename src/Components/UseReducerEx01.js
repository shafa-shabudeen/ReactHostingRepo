import { useReducer } from "react";

function counterReducer(state,action){
   switch(action.type){
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECERMENT":
            return {count: state.count - 1};
      case "RESET":
        return {count: 0};
      default:
        throw Error("Invalid...");
   }
}

function Counter(){
    const [state, dispatch] = useReducer(counterReducer, {count: 0});

    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch({type: "INCREMENT"})}}>Increment</button>
            <button onClick={()=>{dispatch({type: "DECERMENT"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type: "RESET"})}}>Reset</button>
        </div>
    )
}

export default Counter;
import { useState } from "react"

export default function Counter(){
const [count, setCount]=useState(0)
const handleClick=()=>{
    setCount(count+1)
}
    return (
        <>
        <h1> My first Counter</h1>
        <h1>Counted {count} times</h1>
        <button onClick={handleClick}>+1</button>
        </>
    )
}
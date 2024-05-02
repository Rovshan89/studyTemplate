import { useState } from "react"
export default function MyFirstForm(){
    const[text, setText]=useState("Rovshan")
    const handleChange=(evt)=>{
        
        setText(evt.target.value)
        
    }
const handleH1=(e)=>{
    setText("")
}

    return<>
    <h1>MyFirst Form</h1>
    <label htmlFor="text">Write something</label>
    <h1 onChange={handleH1}> Your text is: {text}</h1> 

    <input type="text"
    placeholder="Type Something"
    id="text"
    value={text}
    onChange={handleChange}
      />
    
    </>
}
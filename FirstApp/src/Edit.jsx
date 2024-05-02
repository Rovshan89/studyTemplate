import { useState } from "react"

export default function Edit(){
    const [text, setText]=useState("")
    const[items, setItem]=useState([])
    const[editId, setEditId]=useState(null)
    const[editText, setEditText]=useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!text.trim()){
            return}
            const newItem={
                id: Date.now(),
                text:text
            }
        
        setItem([...items, newItem])
        setText("")
    }

    const handleEditChange=(e)=>{
        setEditText(e.target.value)
    }

    const handleEditSave = () => {
        const updatedItems = items.map((item) => {
            if (item.id === editId) {
                return { ...item, text: editText };
            }
            return item;
        });
        setItem(updatedItems);
        setEditId(null); // Clear editId to exit edit mode
        setEditText(""); // Clear editText for the next edit
    };
    
    
    

    return (<>
    <h1>This is Editing page</h1>
    <form onSubmit={handleSubmit}>
    
        <input 
        type="text" 
        placeholder="Your text"
        onChange={handleChange}
        value={text}
        />
        <button type="submit">Submit</button>

        </form>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    {editId===item.id ?(<>
                    <input type="text" value={editText} onChange={handleEditChange} />
                    <button onClick={handleEditSave}>Save</button>
                    </>):(<>
                        {item.text}
                    
                         <button onClick={()=>{setEditId(item.id); setEditText(item.text)}}>Edit</button>
                    
                    </>)}
                    

                </li>
                 
            ))}
        
        </ul>




    <div>
    <h1>{text}</h1>
    </div>
    
    
    
    </>)
}
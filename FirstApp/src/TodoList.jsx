import { useState } from "react"

export default function  TodoList(){
    
    const [text, setText]=useState("")
    const [items, setItems]=useState([])
    const[editingId, setEditingId]=useState(null)
    const[editText, setEditText]=useState("")
    

    const handleChange=(evt)=>{
        setText(evt.target.value)
        
    }

    const handleEditChange=(e)=>{
        setEditText(e.target.value)
    }
    
    const saveEdit=(id)=>{
        setItems(items.map(item=>{
            if(item.id===id){
                return {...item, text:editText}
            }
            return item
            
        }))
        setEditingId(null)
            setEditText("")
    }


    const handleSubmit=(e)=>{
       e.preventDefault(); 
       if(!text.trim()) return
       const newItem={
        id:Date.now(),
        text:text,
       }
        setItems([...items, newItem])
        setText("")
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };
    
    return (<>
    <h1>MY LIST </h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="todos">Write the list here</label>

    <input type="text"
    placeholder="type here"
    id="todos"
    value={text}
    onChange={handleChange}
    />
    <button type="submit">Submit</button>
    </form>
    <ul>
    {items.map((item)=>(
        <li key={item.id}>
            {editingId===item.id ?(
            <>
            <input type="text" value={editText} onChange={handleEditChange} />
            <button onClick={()=>saveEdit(item.id)}>Save</button>
            </>) :(<>


            {item.text}
            <button onClick={()=>{setEditingId(item.id); setEditText(item.text)}}>Edit</button>
        <button onClick={()=>handleDelete(item.id)}>DELETE</button>
        </>
            )}
        </li>
        

    ))}
    </ul>
   

    
    </>)
}

// // const handleEdit = (id) => {
//     const item = items.find(item => item.id === id);
//     setEditId(id);
//     setEditText(item.text);
// };
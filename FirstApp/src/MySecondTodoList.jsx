
import { useState } from "react";
export default function MySecondTodolist(){
    const [text, setText]=useState("")
    const [items, addItem]=useState([])
    const[editId, setEditId]=useState(null)
    const[editText, setEditText]=useState("")
    const[num, setNum]=useState(0)

    const handleCount=()=>{
        setNum(num+1)
    }


    const handleChange=(evt)=>{
        setText(evt.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!text.trim()) return 
        const newItem={
            qnt: num,
            id:Date.now(),
            text:text,}
        addItem([...items, newItem])
        setText("")
        setNum(0)
        
    }

    const handleEditChange=(e)=>{
        setEditText(e.target.value)
    }
    
    const handleEditSave=(id)=>{
       addItem(items.map(item=>{
        if(item.id===id){
            return {...item, text:editText}
        } return item
       }))
       setEditId(null)
       setEditText("")

    }
    const handleDelete=(id)=>{
        addItem(items.filter(item=>item.id !==id))

    }

return(<>
<div>
<h1 style={{fontSize:"30px"}}>Weekly Shopping list</h1>
</div>
<form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '1px 20px'}}>
   
   
    <label htmlFor="list">What do we need to buy this week</label>
   
    <input 
          type="text"
           placeholder="type here"
           id="list"
           value={text}
           onChange={handleChange}
    />
   <h4>{num}</h4>
    <button type="submit" style={{fontSize:"12px", padding:"5px 10px"}}>Add Product</button>
   </form>
<div style={{fontSize:"12px", padding:"5px 10px"}}>
<button  onClick={handleCount}>+1</button>
</div>

<ul>
  {items.map((item) =>(
        <li key={item.id} className="list"> 
        {editId===item.id? (<>
        <input type="text" value={editText} onChange={handleEditChange}/>
        <button onClick={()=>handleEditSave(item.id)}>Save</button>
        
        </>):(<>
          {item.qnt}  {item.text}
            <button style={{fontSize:"12px", padding:"5px 10px"}} onClick={()=>{setEditId(item.id); setEditText(item.text)} }>Edit</button>
            <button style={{fontSize:"12px", padding:"5px 10px"}} onClick={()=>handleDelete(item.id)}>DELETE</button>
        
        </>)}
       
        

        
        </li>
    ))}
</ul>
</>)
}
import { useState } from "react"
import  "./Comments.css"

export default function Comments(){
const[formData, setFormdata]=useState({
    firstname: "",
    lastname: "",
    username:"",
    comment:"",
    id:Date.now()
     

})
const[submittedData, setSubmittedData]=useState([])
const[num, setNum]=useState(0)
const[editingId, setEditingId]=useState(null)


const handLikes=()=>{
    setNum(num+1)
}

const handleChange=(e)=>{
    
     const changedFields=e.target.name
    setFormdata({
        ...formData, [changedFields]:e.target.value
    })
   
}

const handleSubmit=(e)=>{
e.preventDefault()
const newComment={...formData, id:Date.now()}
setSubmittedData(
    [...submittedData, newComment]
)
setFormdata({
    firstname: "",
    lastname: "",
    username:"",
    comment:"",
})
}


const handleDelete=(id)=>{
    setSubmittedData(submittedData.filter(item=>item.id !== id))
    }



const handleEdit=(item)=>{
  setEditingId(item.id)
  setFormdata({...formData, comment: item.comment})
}


const saveEdit=(id)=>{
const updatedComments=submittedData.map(item=>{
  if(item.id===id){
    return {...item, comment:formData.comment}
  }
  return item
})
   setSubmittedData(updatedComments);
    setEditingId(null); // Exit editing mode
    setFormdata({ firstname: "", lastname: "", username: "", comment: "", id: Date.now() }); // Reset formData

}

    return(<>
    <h1 style={{fontSize:"20px"}}>Write your comments</h1>
    <form className="form-container" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" 
        id="firstname" 
        name="firstname"
        placeholder="Your name"
        value={formData.firstname}
        onChange={handleChange}
        />
        </div>


        <div>
        <label htmlFor="lastname">Last Name</label>

        <input type="text" 
        id="lastname"
         name="lastname"
         placeholder="Your last Name"
         value={formData.lastname}
         onChange={handleChange}
         
         />
        </div>

        <div>
        <label htmlFor="username">User Name</label>
        <input type="text" 
        id="username" 
        name="username"
        placeholder="username"
         value={formData.username}
         onChange={handleChange}
        />




        </div>
        <div className="comment-section">
        <label htmlFor="comment">Your comment</label>
        <textarea  id="comment" 
        name="comment"
         placeholder=" Your Comment"
        value={formData.comment}
         onChange={handleChange}
         />
        </div>
        <div>
        <button type="submit" id="submitbutton">Submit</button>
        </div>
    </form>
   
<ul>
    {submittedData.map((item)=>(
        <li key={item.id}>
            <div id="commentframe">
            <div>
          {editingId === item.id ? (
            <textarea
              id="editComment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          ) : (
            <h2 id="h2">{item.firstname} {item.lastname} - {item.username} says:</h2>
          )}
        </div>
        <div>
          {editingId === item.id ? (
            <div>
              <button className="shared" onClick={() => saveEdit(item.id)}>Save</button>
            </div>
          ) : ( 
            <div>
              <p id="pcomment">{item.comment}</p>
              <p id="like">{num}Likes</p>
              <button onClick={handLikes} className="shared" id="plusone">Like</button>
              <button className="shared" id="delete" onClick={() => handleDelete(item.id)}>Delete</button>
              <button className="shared" id="edit" onClick={() => setEditingId(item.id)}>Edit</button>
            </div>
          )}
        </div>
      </div>
    </li>
  ))}


</ul>

    </>)

   
}
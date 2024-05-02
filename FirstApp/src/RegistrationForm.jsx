import { useState } from "react"



export default function RegistrationForm(){
    const[formData, setData]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const [submittedData, setSubmittedData]=useState(null)


const handleChange=(e)=>{
    const changedFields=e.target.name
    setData({
        ...formData, [changedFields]:e.target.value
    })

    
}



const handleSubmit=(evt)=>{
    evt.preventDefault()
    setSubmittedData(formData)

    setData({ firstName:"",
    lastName:"",
    email:""})
    console.log(evt.target.name)
    
}

    return (<>
    <h1>Registration Form</h1>
     <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" 
         id="name"
         placeholder="Name"
         name="firstName"
         value={formData.firstName}
         onChange={handleChange}/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text"
         id="lastName" 
         placeholder="LastName"
         name="lastName"
         value={formData.lastName}
         onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email"
         id="email" 
         placeholder="email"
         name="email"
         value={formData.email}
         onChange={handleChange}/>

        <button type="submit">Submit</button>
        
     </form>

     {submittedData && (
          <div>
            <h1>Welcome {submittedData.firstName} {submittedData.lastName}</h1>
            
          </div>
          
     ) }
     
        
        
        
     
    
    
    
    </>)
} 
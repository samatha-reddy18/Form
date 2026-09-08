//import React from 'react'
import "./Signup.css"
import { useState } from "react"

function Signup() {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
        let [password,setPassword]=useState("")
    
        function submitForm(e){
            e.preventDefault()
            alert(`${email} ${password}`)
        }
  return (
    <div>
      <form onSubmit={(e)=> submitForm(e)}>

        <div>
            <span>Name: </span>
              <input type="text"
               name="name"
               placeholder="Enter your Name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
        </div>
        <br/>
        
         <div>
            <span>Email: </span>
              <input type="email"
               name="email"
               placeholder="Enter your email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
        </div>
        <br/>

        <div>
            
            <span>Password: </span>
              <input type="password"
               name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
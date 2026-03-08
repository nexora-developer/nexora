import React,{useState} from "react"

function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

function handleLogin(){

alert("Login Successful")

}

return(

<div style={{padding:"40px"}}>

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={handleLogin}>

Login

</button>

</div>

)

}

export default Login
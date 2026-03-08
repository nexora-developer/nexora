import React,{useState} from "react"

function Login(){

const [name,setName] = useState("")
const [phone,setPhone] = useState("")

function handleLogin(){

if(!name || !phone){
alert("Enter name and phone")
return
}

const user = {
name:name,
phone:phone
}

localStorage.setItem("user",JSON.stringify(user))

window.location.reload()

}

return(

<div style={{
padding:"40px",
textAlign:"center"
}}>

<h2>Nexora Login</h2>

<input
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Enter Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<br/><br/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login
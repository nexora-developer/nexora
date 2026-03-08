import React,{useState} from "react"
import {auth} from "../firebase"

import {
signInWithPhoneNumber,
RecaptchaVerifier
} from "firebase/auth"

function Login(){

const [phone,setPhone] = useState("")
const [name,setName] = useState("")
const [otp,setOtp] = useState("")
const [confirm,setConfirm] = useState(null)

function sendOtp(){

window.recaptchaVerifier = new RecaptchaVerifier(
"recaptcha",
{size:"invisible"},
auth
)

const appVerifier = window.recaptchaVerifier

signInWithPhoneNumber(auth,phone,appVerifier)
.then((result)=>{

setConfirm(result)

alert("OTP Sent")

})

}

function verifyOtp(){

confirm.confirm(otp)
.then((result)=>{

const user = result.user

localStorage.setItem("user",
JSON.stringify({
name:name,
phone:user.phoneNumber
}))

window.location="/"

})

}

return(

<div style={{
padding:"40px",
maxWidth:"400px",
margin:"auto"
}}>

<h2>Login</h2>

<input
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<button onClick={sendOtp}>
Send OTP
</button>

<input
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
/>

<button onClick={verifyOtp}>
Verify
</button>

<div id="recaptcha"></div>

</div>

)

}

export default Login
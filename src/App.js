import React from "react"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App(){

const user = JSON.parse(localStorage.getItem("user"))

return(

<div>

{user ? <Home/> : <Login/>}

</div>

)

}

export default App
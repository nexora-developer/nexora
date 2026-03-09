import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Map from "./pages/Map"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Products/>}/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/map" element={<Map/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
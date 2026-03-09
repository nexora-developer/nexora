import React from "react"

function Map(){

return(

<div style={{padding:"40px"}}>

<h2>Nearby Shops</h2>

<iframe
title="map"
width="100%"
height="500"
src="https://maps.google.com/maps?q=grocery&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>

</div>

)

}

export default Map
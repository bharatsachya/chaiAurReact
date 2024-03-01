import { useState } from "react"

function Background({color}){
    const mystyle = {
        backgroundColor: color,
        color: 'white'
      }
   return(
    <div>
         <button style={mystyle}>{color}</button>
         
    </div>
   )
}

export default Background
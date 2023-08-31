import React from 'react'
import { useState } from 'react'

function Search(props) {
    const [location,setLocation]= useState("");
   
  return (
    <div className='search'>
      {/* <h3>{props.brand}</h3> */}
        <form action="">
            <label htmlFor="location">Location:
            <input type="text" onChange={(e)=>{
                setLocation(e.target.value);
            }} id='location' value={location} placeholder='Location'/>
           </label>

            

            
            <button>Submit</button>
         </form> 
    </div>
  )
}


export default Search
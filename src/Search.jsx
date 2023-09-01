import React from 'react'
import { useState } from 'react'

function Search() {
    const [location,setLocation]= useState("");
    const [animal]=useState("");
  return (
    <div className='search'>
      {/* <h3>{props.brand}</h3> */}
        <form action="">
            <label htmlFor="location">Location:
            <input type="text" onChange={(e)=>{
                setLocation(e.target.value);
            }} id='location' value={location} placeholder='Location'/>
           </label>

           <label htmlFor="location">Animal:
            <select  id="animal" >
              <option value="">{animal}</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option> 
            </select>


           </label>

            

            
            <button>Submit</button>
         </form> 
    </div>
  )
}


export default Search
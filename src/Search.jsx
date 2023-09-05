import axios from 'axios';
import React from 'react'
import { useState } from 'react'


const Animals=["bird" , "dog" ,"cat" ,"rabbit" , "panda"];
const Breed=["hyderabad","poland","USA"];
function Search() {
    const [location,setLocation]= useState("");
    const [animal,setAnimal]=useState("");
    const [breed,setBreed]=useState("");
    
    
    return (
    <div className='search'>
      
        <form action="">
            <label htmlFor="location">Location:
            <input type="text" onChange={(e)=>{
                setLocation(e.target.value);
            }} id='location' value={location} placeholder='Location'/>
           </label>

           <label htmlFor="animal">Animal:
           <select id="animal" value={animal}
                onChange={(e)=>{
                  setAnimal(e.target.value)
                  setBreed("");
                }}>
                  
                <option value=""></option>
                {Animals.map(e=>
                    <option key={e}>{e}</option>
                  )}
                </select>
           </label>

           <label htmlFor="breed">Breed:
           <select id="breed" value={breed} disabled={Breed.length===0}
                onChange={(e)=>{
                  setBreed(e.target.value)
                }}>
                  
                <option value=""></option>
                {Breed.map(e=>
                    <option key={e}>{e}</option>
                  )}
                </select>
           </label>
           

            <button>Submit</button>
         </form>
         
    </div>
  )
}


export default Search
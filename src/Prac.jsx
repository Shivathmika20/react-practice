import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios';
function Prac() {
const [dat,setDat]=useState([]);
const [set,setgah]=useState(0);

  useEffect(()=>{

    const getdata= async ()=>{

      try{
        const res=await axios.get(`http://pets-v2.dev-apis.com/pets`);
        
        setDat(res.data.pets);
      }
      catch(e)
      {
        console.log(e)
      }
    }
    getdata()
  },[set])

  


  return(
    <div>
      {
        dat.map(e=>
          <div>
            {e.name}
          </div>
          )
      }
      <button onClick={()=>{
        setgah(+1);
      }}>clickme</button>
      
    </div>
  )

}



 

export default Prac

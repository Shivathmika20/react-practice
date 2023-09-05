import React from 'react'

const Pro = (props) => {
    
  return (
    <div className='main'>
        
       <div className='content'  >
        <img src={props.url} style={{height:'17rem'}} alt="" />
        <h3 style={{textAlign:'center',fontSize:'1em',margin:'0px'}}>{props.name}</h3>
        <p style={{textAlign:'center',fontSize:'1rem',margin:'0px'}}>{props.head}</p>
       </div>

       {/* <div className='content' >
        <img  src="http://pets-images.dev-apis.com/pets/dog27.jpg" alt="" style={{height:'20rem'}} />
        <h3>Dog</h3>
       </div> */}

       {/* <div className='content'>
        <img src="http://pets-images.dev-apis.com/pets/dog31.jpg" alt="" />
        <h3>Dog</h3>
       </div>

       <div className='content'>
        <img src="http://pets-images.dev-apis.com/pets/dog33.jpg" alt="" />
        <h3>Dog</h3>
       </div> */}

    </div>
  )
}

export default Pro
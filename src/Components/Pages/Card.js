import React from 'react'

function Card(props) {
  return (
   <>

   
    <div className='col-md-4 col-sm-10 mx-auto'>
        <div class="cards mt-1 my-5 " style={{color:"black", backgroundColor:"white"}}>
       <img  src= {props.imgsrc} class="card-img-top" width="100%" height="100%" />
       <div class="card-body" >
       <h5 class="card-title text-center" style={{color:"black", }}>{props.title}</h5>   
    </div>
    </div>
  
        </div>
    
   
   </>
  )
}

export default Card
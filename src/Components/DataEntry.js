import React, { useState } from 'react'
import User from './User'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function DataEntry() { 
 const profile = [{
  name : 'Mehrab', id : '002', img : 'orguser.jpeg'
},
{
  name :'Rashed', id : '003' ,img : 'rashed.png'
}
,{
  name :'Omar', id : '004' ,img : 'omar.png'
},
{
  name :'Sufian', id : '005' ,img : 'sufian.jpg'
}
,
{
  name :'Ekram', id : '006' ,img : 'ekram.jpeg'
}
,
{
  name :'Rakib', id : '007' ,img : 'rakib.png'
}
,
{
  name :'Saiful', id : '008' ,img : 'saiful.jpeg'
}
,{
  name :'Fahim', id : '009' ,img : 'unknown.png'
}
,
{
  name :'Fahim Rakib', id : '010' ,img : 'unknown.png'
}
,
{
  name :'Apurbo', id : '011' ,img : 'apurbo.png'
}

]
  return (
    <div className='openc4'>
      <Link to='/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link>
      <p className='cntrl'>User's</p>
     
 
<hr style={{width:'310px', marginTop : '-2%'}} />
<div className="profs">
<div className="users-id">
  <ul className='profiles' >
     {
      profile.map((prof)=>{
        return  <User key={prof.id} name={prof.name} id={prof.id} img={prof.img}/>
      })
     }
  </ul>
</div>
</div>
    </div>
  )
}      
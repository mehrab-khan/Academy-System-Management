import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
export default function StudentData() {
  
    const profile = [{
        name : 'Mehrab', id : '002', salary : 2000
      },
      {
        name :'Rashed', id : '003' ,salary : 2000
      }
      ,{
        name :'Omar', id : '004' ,salary : 2000
      },
      {
        name :'Sufian', id : '005' ,salary : 2000
      }
      ,
      {
        name :'Ekram', id : '006' ,salary : 2000
      }
      ,
      {
        name :'Rakib', id : '007' ,salary : 2000
      }
      ,
      {
        name :'Saiful', id : '008' ,salary : 2000
      }
      ,{
        name :'Fahim', id : '009' ,salary : 2000
      }
      ,
      {
        name :'Fahim Rakib', id : '010' ,salary : 2000
      }
      ,
      {
        name :'Apurbo', id : '011' ,salary : 2000
      }
      
      ]


  return (
    <div className='openc20'>
       <Link to='/control'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> <p className="cntrl">Students's Data</p>
<hr  style={ {
    marginTop : '-3%'

}
}/>


<table class="table table-striped teachdatatable">
  <thead>
    <tr>
       
      <th scope="col"style={{color : 'rgb(0, 15, 255)',fontSize:'15px',fontFamily: 'Quicksand'}}>Name</th>
      <th scope="col"style={{color : 'rgb(0, 15, 255)',fontSize:'15px',fontFamily: 'Quicksand'}}>ID</th>
      <th scope="col"style={{color : 'rgb(0, 15, 255)',fontSize:'15px',fontFamily: 'Quicksand'}}>Tution Fee</th>
    </tr>
  </thead>
  <tbody>
    {
        profile.map((teachersdata)=>{
            return (
    <tr>
      <th scope="row" style={{fontFamily: 'Quicksand'}}>{teachersdata.name}</th>
      <td style={{fontFamily: 'Quicksand', fontWeight:'800'}}>{teachersdata.id}</td>
      <td style={{fontFamily: 'Quicksand', fontWeight:'800'}}>{teachersdata.salary}</td>
       
    </tr>)
        })
    }
    
     
  </tbody>
</table>

<Link to='/student'><button className='btn btn-primary' style={{position  :'relative',fontFamily: 'Quicksand',float:'right',marginRight:'3%',marginTop:'2%'}}>Set Tution Fee</button></Link>
    </div>
  )
  
}

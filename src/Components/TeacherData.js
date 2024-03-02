import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useEffect } from 'react';
export default function TeacherData() {

  const [keys, setKeys] = useState([]);
  const [notice, setNotice] = useState('There is no notice');
  function reset(){
    localStorage.clear()
    alert('Cleared Refresh The Page Again')
   }
 
  useEffect(() => {
    // Retrieve all keys from localStorage
    const localStorageKeys = Object.keys(localStorage);
    setKeys(localStorageKeys);
  }, []);


function noticesubmit(){
  const data = {
    name: notice
  };
  
  fetch('https://database-7afec-default-rtdb.firebaseio.com/notice.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('Data successfully sent to Firebase.');
    } else {
      console.error('Failed to send data to Firebase.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}













       
  return (
    <div className='openc20'>
       <Link to='/control'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> <p className="cntrl">Teacher's Data</p>
<hr  style={ {
    marginTop : '-3%'

}
}/>
 

<table className="table table-striped teachdatatable">
  <thead>
    <tr>
       
      <th scope="col"style={{color : 'rgb(0, 15, 255)',fontSize:'15px',fontFamily: 'Quicksand'}}>Table Of Teacher's Data</th>
 
    </tr>
  </thead>
  <tbody>
    {
       keys.map((key, index)=>{
            return (
    <tr key={index}>
      <th scope="row" style={{fontFamily: 'Quicksand' ,fontWeight : '500',textAlign  :'center', fontSize : '16px'}}>{key}</th>
       
       
    </tr>)
        })
    }
    
     
  </tbody>
</table>

<Link to='/teacher'><button className='btn btn-primary' style={{position  :'relative',float:'right',marginRight:'3%',marginTop:'2%',fontFamily: 'Quicksand'}}> Set Salary</button></Link>
 <button className=' btn btn-primary' style={{position  :'relative',float:'right',marginRight:'3%',marginTop:'2%',fontFamily: 'Quicksand'}} onClick={reset}>Reset</button> 
 <p style={{color : 'rgb(0, 15, 255)',fontSize:'15px',fontFamily: 'Quicksand',fontWeight : '800',marginLeft:'2%', marginTop : '16%'}}>Set Notice</p>

    <input type="text" className='form-control' placeholder='Notice' style={{width :' 330px',marginLeft:'2%'}} onChange={(e)=>setNotice(e.target.value)} />
 <button className=' btn btn-primary' style={{position  :'relative',float:'right',marginRight:'3%',marginTop:'2%',fontFamily: 'Quicksand'}} onClick={noticesubmit}>Submit</button>    
    
    </div>



  )
}

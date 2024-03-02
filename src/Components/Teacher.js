import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Teacher() {
 const [name , setName] = useState ('Unknown')
 const [id , setId] = useState ('00')
 const [salary , setSalary] = useState ('00')
 const [selectedValue, setSelectedValue] = useState('');
 const [alert , setAlert] = useState (false)
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  function alertHide(){
    setAlert(false)
  }
   function clicked(){
 if(name && id && salary && selectedValue == ''){
  setAlert(true)
 }
   
localStorage.setItem(`Name : ${name} -- ID : ${id} -- Salary : ${salary} -- (${selectedValue})`  , 'No Data')
   }
  
  return (
    <div className='openc20'>
    <Link to='/control'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> <p className="cntrl">Teacher's Database</p>
<hr  style={ {
marginTop : '-3%'

}
}/>
<p className='tnewname'> User 1</p>
<input type="text"className='form-control user1 ' onFocus={alertHide} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
 
<input type="number"className='form-control tn2' onFocus={alertHide} placeholder='Salary'  onChange={(e)=>setSalary(e.target.value)} />
 
<input type="number"className='form-control tn2'  onFocus={alertHide} placeholder='ID'  onChange={(e)=>setId(e.target.value)} />
<div className="radio form-check"  >
<label>
        <input
        style={{marginLeft : '2%'}}
          type="radio"
          value="Teacher"
          onFocus={alertHide}
          required
          className="form-check-input"
          checked={selectedValue === 'Teacher'}
          onChange={handleRadioChange}
        />
        <p style={{marginLeft : '50%', fontFamily : 'Quicksand',fontWeight : '400'}}>Teacher</p>
      </label>
      <label>
        <input
        required
        style={{marginLeft: '12%'}}
          type="radio"
          onFocus={alertHide}
          className="form-check-input"
          value="Student"
          checked={selectedValue === 'Student'}
          onChange={handleRadioChange}
        />
         <p style={{marginLeft : '120%', marginTop : '1%', fontFamily : 'Quicksand' , fontWeight : '400'}}>Student</p>
      </label>
      </div>
<button className='addnewteacher btn btn-primary' onClick={clicked}>Add</button>
{ alert && 
<p style={{
  marginLeft : '50%', fontFamily : 'Quicksand',fontWeight : '400' , position : 'absolute',margin : 'auto', color : 'red',top : '28%'
}}>Please fill the full form!</p>
}
 </div>
  )
}

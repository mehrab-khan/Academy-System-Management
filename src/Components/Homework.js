import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Control() {
    const [English , setEnglish] = useState('Null')
    const [Bangla , setBangla] = useState('Null')
    const [Accounting , setAccounting] = useState('Null')
    const [Finance , setFinance] = useState('Null')
    const [BOM , setBOM] = useState('Null')
    const [Marketing , setMarketing] = useState('Null')
    const [ICT , setICT] = useState('Null')
    const [GEO , setGEO] = useState('Null')
    const [ECO , setECO] = useState('Null')
    const [History , setHistory] = useState('Null')
    




 



    
    const hwsubmitted = () => {
const homework = {
  english : English,
  bangla : Bangla,
  accounting : Accounting,
  finance : Finance,
  bom : BOM,
  marketing : Marketing,
  ict : ICT,
  geo : GEO,
  eco : ECO,
  history : History
}
  

// Sending POST request to Firebase
fetch('https://database-7afec-default-rtdb.firebaseio.com/homework/-Nr_IzSnQeHmy2ex8DpT.json', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(homework)
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
    <>
     
    <div className='openc5 hwc5'>
         
      <Link to='/control'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> <p className="cntrl">Homework</p>
<div className="section2"><p className="homework n1">Set Homework</p>
<div className="hr">
<p className="hwsub">Bangla</p>
<input type="text" className="form-control" placeholder='Bangla' onChange={(e)=> setBangla(e.target.value)} />

<p className="hwsub">English</p>
<input type="text" className="form-control" placeholder='English'onChange={(e)=> setEnglish(e.target.value)} />

<p className="hwsub">ICT</p>
<input type="text" className="form-control" placeholder='ICT' onChange={(e)=> setICT(e.target.value)}/>

<p className="hwsub">Accounting</p>
<input type="text" className="form-control" placeholder='Accounting' onChange={(e)=> setAccounting(e.target.value)}/>

<p className="hwsub">Finance</p>
<input type="text" className="form-control" placeholder='Finance'onChange={(e)=> setFinance(e.target.value)} />
<p className="hwsub">BOM</p>
<input type="text" className="form-control" placeholder='BOM'onChange={(e)=> setBOM(e.target.value)} />
<p className="hwsub">ECO</p>
<input type="text" className="form-control" placeholder='ECO'onChange={(e)=> setECO(e.target.value)} />
<p className="hwsub">GEO</p>
<input type="text" className="form-control" placeholder='GEO'onChange={(e)=> setGEO(e.target.value)} />
<p className="hwsub">History</p>
<input type="text" className="form-control" placeholder='History'onChange={(e)=> setHistory(e.target.value)} />

<p className="hwsub">Marketing</p>
<input type="text" className="form-control" placeholder='Marketing' onChange={(e)=> setMarketing(e.target.value)}/>
<div className="bt5"><Link to='dashboard'><button className="btn btn-primary hwsubmit" onClick={hwsubmitted}>Submit</button></Link></div>

</div>
 
</div>

    </div>
    </>
  )
}

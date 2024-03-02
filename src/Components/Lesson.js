import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
export default function Lesson() {
const [accounting , setAccounting] = useState('')
const [bangla , setBangla] = useState('')
const [english , setEnglish] = useState('')
const [ict , setICT] = useState('')
const [marketing , setMarketing] = useState('')
const [bom , setBOM] = useState('')
const [finance , setFinance] = useState('')
const [eco , setECO] = useState('')
const [geo , setGEO] = useState('')
const [history , setHistory] = useState('')
  fetch('https://database-7afec-default-rtdb.firebaseio.com/homework/-Nr_IzSnQeHmy2ex8DpT.json')
  .then(response => {
    return response.json()
    
  })
  .then(data => {
    setAccounting(data.accounting);
    setBangla(data.bangla);
    setEnglish(data.english);
    setFinance(data.finance);
    setBOM(data.bom);
    setMarketing(data.marketing);
    setICT(data.ict);
    setECO(data.eco)
    setGEO(data.geo)
    setHistory(data.history)
  })




  return (
    <div className='openc4'>
       <Link to='/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> 
<p className="titlesson">Today's Lessons</p>
  <div className="alert lessontable" style={{overflow : 'scroll'}}>
  
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Lessons</th>
       
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bangla</th>
      <td>{bangla}</td>
       
    </tr>
    <tr>
      <th scope="row">English</th>
      <td>{english}</td>
       
    </tr>
    <tr>
      <th scope="row">Accounting</th>
      <td>{accounting}</td>
       
    </tr>
    <tr>
      <th scope="row">BOM</th>
      <td>{bom}</td>
       
    </tr>
    <tr>
      <th scope="row">Finance</th>
      <td>{finance}</td>
       
    </tr>
    
    <tr>
      <th scope="row">I.C.T</th>
      <td>{ict}</td>
       
    </tr>
    <tr>
      <th scope="row">Marketing</th>
      <td>{marketing}</td>
       
    </tr>
    <tr>
      <th scope="row">ECO</th>
      <td>{eco}</td>
       
    </tr>
    <tr>
      <th scope="row">GEO</th>
      <td>{geo}</td>
       
    </tr>
    <tr>
      <th scope="row">History</th>
      <td>{history}</td>
       
    </tr>
     
  </tbody>
</table>

</div>
    </div>
  )
}

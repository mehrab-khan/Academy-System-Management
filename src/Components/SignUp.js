import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [warning, setWarning] = useState(false);
  const [access, setAccess] = useState(false);
  const [access02, setAccess02] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleEmail= (e) => {
    setEmail(e.target.value);
  }
 
  const handlePassword = (e) => {
    setPass(e.target.value);
  }

    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        if (email === '' || pass === '') {
          setWarning(true);
        } else {
          setAccess(true);
        }
        if(email.includes('cosmoteacher') && pass.includes('cosmo$2024')){
           setAccess(true)
        }
       else if(email.includes('cosmostudent') && pass.includes('cosmostudent')){
          setAccess02(true)
       }
        else{
          setAccess(false)
          setAlert(true)
          
        }
      }
       
    function focus(){
        setWarning(false)
        if(alert){
          setAlert(false)
        }
    }
    
  return (
    <>
    <div className='openc3'>
    <iframe src="https://rive.app/community/66-92-dory-demo/embed" allowFullScreen className='fish' title='fish'style={{marginLeft:'-16%' ,width : '460px'}}></iframe>
     
    <div className="container form-2" style={{marginTop:'-26%'}}>
           <p className="welcomenote-02">COSMO ACADEMY</p>
           <div className="inputss">
            <p className='note-email'>EMAIL</p>
           <input type="text" className='loginsgu' onFocus={focus} onChange={handleEmail} />
           <p className='note-password'>PASSWORD</p>
           <input type="password" className='passsgu' onFocus={focus} onChange={handlePassword} />
            {warning && <p className="warning warn">Please Fill The Form!</p>}
           <button className="submitbtn"  onClick={handleSubmit}>SUBMIT</button>
            
          {access ? <Redirect to='/teacherinfo'/> : ''}
          {access02 ? <Redirect to='/homework'/> : ''}
           </div>


    </div>
     <p className="remind" style={{marginLeft:'30%'}}>FORGET PASSWORD!</p> 
      
   </div>
   {alert &&
   <div className="alertbar">
    <p className='loginalrt'>Try Again Wrong Password!</p>
    <button className='trybtn' onClick={()=>setAlert(false)}>Try Again</button>
   </div>
}
   </>
  )
}

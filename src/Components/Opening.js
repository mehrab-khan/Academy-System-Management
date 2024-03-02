import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Opening() {
  return (
    <>
    <div className='container openc1'>
      <div className="welcome-note"><h1 className='welcome-data' style={{textAlign : 'center'}}>Welcome To <br /> Cosmo Academy  </h1>
      <br />
      <p className="welcome-data2">Make Sure Your Learning Performance Better</p>
      </div>
      <img src="Assets/openingimg.jpg" className='openimg' alt="" />

    
    <div className="btns">
    <Link to='login'><button className='login'>Log In</button></Link>
    
    </div>
    </div>
    
    </>
  )
}

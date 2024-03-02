import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Error() {
  return (
    <div className='openc5 err'>
      <img src="Assets/err.jpg.webp" style={{height : '230px'}} className='errimg' alt="" />
      <p className="errtxt">Error!</p>
      <p className='errmsg'>This Page Isn't Available Right Now</p>
      <Link to='/dashboard'><button className='btn errbtn'>Go to homepage</button></Link>
    </div>
  )
}

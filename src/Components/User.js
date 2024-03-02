import React from 'react'

export default function User(props){
  var img = `Assets/${props.img}`
  return (
    <div className='container user-id'>
        <div className="userimg">
      <img src={img} className='userpic' alt="" />
      </div>
      <div className="identity">
      <p className="name user-name">Name : {props.name}</p>
      <p className='name roll'>ID : {props.id}</p>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Dashboard() {
  const [sideBar, setSideBar] = useState('-90%')
  const [sub, setSub] = useState('')
  const [time, setTime] = useState('4:21 - 5:20')
  const [clas, setClas] = useState('')
  const [indexofclass , setIndexOfClass] = useState('0')
  const [notice , setNotice] = useState('')
  const [shownoteclas , setShownoteclas] = useState(false)
  const [handle , setHandle] = useState('')
  //section of management
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ];
  const dayName = daysOfWeek[currentDate.getDay()];
    
  useEffect(()=>{
    setTimeout(()=>{
      setHandle('Sent Data')
    },100)
  })
 
  useEffect(()=>{
     
    const currentDate = new Date();
    var hours = currentDate.getHours();
    
      if(dayName == 'Saturday'){
        setClas(['Bangla',' English',' Finance/Civics'])
        setSub(clas[0])
        setIndexOfClass(clas.length)
      }
      else if(dayName == 'Sunday'){
        setClas(['Marketing/ECO',' I.C.T ,',' Accounting'])
        setSub(clas[0])
        setIndexOfClass(clas.length)
      }
      else if(dayName == 'Monday'){
        setClas(['English',' Finance'])
        setSub(clas[0])
        setIndexOfClass(clas.length)
      }
      else if(dayName == 'Tuesday'){
        setClas(['I.C.T',' English'])
        setSub(clas[0])
        setIndexOfClass(clas.length)
      }
      else if(dayName == 'Wednesday'){
        setClas(['Acc/GEO',' ECO/BOM'])
        setIndexOfClass(clas.length)
        setSub(clas[0])
      }
      else if(dayName == 'Thursday'){
        setClas(['Bangla', ' Acc/History'])
        setSub(clas[0])
        setIndexOfClass(clas.length)
      }
      else if(dayName == 'Friday'){
        setClas(['Today Is OFF'])
        setSub('Today is Off')
        setIndexOfClass('0')
        setTime('0:00 - 0:00')
      }



      if(hours == 16){
        setSub(clas[0])
        setTime('4:21 - 5:20')
      }
      else if(hours == 17){
        setSub(clas[1])
        setTime('5:21 - 6:20')
      }
      else if(hours == 19 || hours == 20 || hours == 21 || hours == 22 || hours == 23 || hours == 24){
        if( clas.length == 2 || clas.length == 1){
          setSub('No Class Left')
        }
        else{
           setSub(clas[2])
        }
        setTime('6:21 - 7:20')
        
      }

      },[handle])
  const JoinStream = () => {
    alert('Stream Not Available Right Now')
  }
  function CloseNav(){
    setSideBar('-90%')
  }
  function OpenNav(){
    setSideBar('-2%')
  }
  useEffect(()=>{
    
 
   fetch('https://database-7afec-default-rtdb.firebaseio.com/notice.json')
   .then((response02)=> {
    return response02.json()
   })
   .then((recievedData)=>setNotice(recievedData.name))
  })
  return (
     
    <div className='openc3'>
       <div className="side-bar"   style={{marginLeft : sideBar}}>
        <p className="heading" style={{fontSize : '22px'}}>Cosmo Academy</p>
       <ul className='nav-ul'>
        <li  onClick={CloseNav}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house house ico" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg> <Link to='/dashboard'><p className='litext'>Home</p></Link> </li>

<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
</svg><Link to='/about'><p className='litext litxt2'>About</p></Link></li>



<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ico bi bi-database-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
  <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"/>
</svg><Link to='/data'><p className='litext litxt2'>Data Inquery of (User's)</p></Link></li>

<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ico bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg> <Link to='/lesson'><p className='litext'>Lessons</p></Link></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
</svg><Link to='/imgtext'><p className='litext'>Image To Text</p></Link></li>
<li ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg><Link to='/bot'> <p className='litext'>Artificial Intelligence</p></Link></li>
 
<li ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg><Link to='/control'> <p className='litext'>Control Panel</p></Link></li>

<li ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ico bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg> <Link to='/login'> <p className='litext'>Log Out</p></Link></li>

       </ul>

       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" style={{marginTop :'-2%',marginLeft:'2%'}} className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={CloseNav}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ico bi bi-three-dots more" onClick={OpenNav} viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
<div className="user">
<img src="./Assets/user-img.png" className='user-face' alt="" />
</div>
<Link to='data'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Link>
<div className="sectionA">
  <p className="hlw-note">
    Hello, <span className="name">{localStorage.getItem('My Account')}</span>
  </p>
  <div className="titles"><p className='classes'>Classes</p><p className='amountofclass' onClick={()=>setShownoteclas(true)}>{indexofclass} classes today</p></div>
  <div className="box">
    <div className="iconbox">
    🏹
    </div>
    <p className="sub">
      {sub}
    </p>
    <p className='sub-time'>{time}</p>
    <div className="vid-icon">
    <img src="Assets/Vector.png" className='vector-icon' alt="" />
    <div className="bar"></div>
    <p className="join" onClick={JoinStream}>Join Now</p>
    <img src="Assets/book.png" alt="" className='book' />
    </div>
  </div>
  <div className="titles titles1"><p className="homework">Homework</p> <Link to='lesson'><p className="view">View All</p></Link></div>

</div>
<div className="box2">
  <div className="under-box3">
    <p className="subject">{sub}</p>
    <p className='time'>⌛ 1 days left</p>
    <p className="hw">{notice}</p>
    <p className='note2'>Read screens 1.1 - 1.2 of <img src="Assets/sheild.png" className='sheild' alt="" /> </p>
    <div className="box4">
    <span className="books-icon">📚</span>
    </div>
  </div>
</div>
{shownoteclas &&
<div className="remainclasses">
<p className="classname">Classes : </p>
<p className='clstit'> {clas} </p>
<button className="btn btn-ok class-ok"onClick={()=>setShownoteclas(false)}>OK</button>


</div>
}
    </div>
    
  )
}

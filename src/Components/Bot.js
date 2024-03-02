import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Bot() {
const [usertxt, setUserTxt] = useState('')
const [bottxt, setBotTxt] = useState('')
const[dataapproved ,setDataApproved] = useState(0)

 

function send(){
    
    let conversation = document.querySelector('.conversation');
    let newuserdiv = document.createElement('div')
    newuserdiv.setAttribute('class','userText')
    newuserdiv.textContent = usertxt;
    conversation.appendChild(newuserdiv)
 
     setDataApproved(dataapproved + 1)
 
    const apiKey = "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"; 
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: usertxt
          }
        ]
      })
    })
      .then(response => response.json())
      .then(data => {
        let conversation = document.querySelector('.conversation');
        let newbotdiv = document.createElement('div')
        newbotdiv.setAttribute('class','bottxt')
        newbotdiv.textContent = data.choices[0].message.content;
        conversation.appendChild(newbotdiv)
       setUserTxt('')
             
       
      
      })
      .catch(error => console.log('Error:', error));
     
        
    
     

} 













console.log(usertxt)


  return (
    <div className='openc12'>
        <div className="bck">
       <Link to='/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short bckk" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link>
<p className="phead">ChatBot</p>
</div>

<div className="conversation">
    <div className="bot-dsntxt">Hello {localStorage.getItem('username')}! I'm your assistant How can i assist you?</div>
     
</div>
<div className="inputfield02 ">
   <input type="text" className='userinput' placeholder='Ask Something' onChange={(e)=>setUserTxt(e.target.value)}/>
   <svg xmlns="http://www.w3.org/2000/svg" width="30" onClick={send} height="30" style={{marginLeft : '3%'}} fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
   </div>
   <p className="suggest">Top Search Suggestions : </p>
   <button className='btn btn-primary hwbtn'>Homework</button>
   <button className='btn btn-primary hwbtn' style={{marginLeft : '2%'}}>History Of Number System</button>
    </div>
  )
}

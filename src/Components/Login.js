import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [warning, setWarning] = useState(false);
  const [access, setAccess] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

  }

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem('My Account',email)
    if (email === '' || pass === '') {
      setWarning(true);
    } else {
      setAccess(true);
    }
  }

  const handleFocus = () => {
    setWarning(false);
  }

  return (
    <div className='openc2'>
      <iframe src="https://rive.app/community/66-92-dory-demo/embed" allowFullScreen title='fish'></iframe>

      <div className="form container">
        <h4 className='welcome-back'>Welcome Back!</h4>
        <div className="inputfields">
          <input type="text" className='emailinput' placeholder='Enter User Name' required onFocus={handleFocus} onChange={handleEmailChange} />
          <input type="password" className='passinput' placeholder='Enter Password' required onFocus={handleFocus} onChange={handlePasswordChange} />
          <button className='btnlogin' onClick={handleSubmit}>Log In</button>
          {access && <Redirect to='/dashboard' />}
          {warning && <div><p className='warning'>Please Fill The Information!</p></div>}
        </div>
      </div>
    </div>
  );
}

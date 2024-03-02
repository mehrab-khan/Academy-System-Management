import './App.css';
import Login from './Components/Login';
import Opening from './Components/Opening';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import DataEntry from './Components/DataEntry';
import Control from './Control';
import Lesson from './Components/Lesson';
import ImgText from './Components/ImgText';
import Bot from './Components/Bot';
import Homework from './Components/Homework';
import StudentData from './Components/StudentData';
import TeacherData from './Components/TeacherData';
import Teacher from './Components/Teacher';
import Student from './Components/Student';
import Error from './Components/Error';
import { useEffect, useState } from 'react';
import About from './Components/About';
function App() {
  const[defaultaccess ,setDefaultaccess] = useState(false)
  useEffect(()=>{
    
    if(localStorage.getItem('My Account')){
       setDefaultaccess(true)
    }
  },[])

  return (
    <div className="container-sm App">
      <Router>
       
        <Switch>
          {defaultaccess ?<Route exact path='/' component={Dashboard}></Route> : <Route exact path='/' component={Opening}></Route> }
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/auth' component={SignUp}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/data' component={DataEntry}></Route>
          <Route exact path='/control' component={Control}></Route>
          <Route exact path='/lesson' component={Lesson}></Route>
          <Route exact path='/imgtext' component={ImgText}></Route>
          <Route exact path='/bot' component={Bot}></Route>
          <Route exact path='/homework' component={Homework}></Route>
          <Route exact path='/teacherinfo' component={TeacherData}></Route>
          <Route exact path='/studentinfo' component={StudentData}></Route>
          <Route exact path='/teacher' component={Teacher}></Route>
          <Route exact path='/student' component={Student}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route  component={Error}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

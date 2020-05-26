import React,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Auth from './routes/auth/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import StudentDashboard from './routes/student_dashboard/StudentDashboard'
import DoctorDashboard from './routes/doctor_dashboard/DoctorDashboard'
import AdminPanel from './routes/admin_panel/AdminPanel'
import StaffPanel from './routes/staff_panel/StaffPanel'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/auth' component={Auth} />
          <ProtectedRoute path='/student_dashboard' forUserType="Student" component={StudentDashboard} />
          <ProtectedRoute path='/doctor_dashboard' forUserType="Doctor" component={DoctorDashboard} />
          <ProtectedRoute path='/admin_panel' forUserType="Admin" component={AdminPanel} />
          <ProtectedRoute path='/staff_panel' forUserType="Hospital Official" component={StaffPanel} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
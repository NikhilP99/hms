import React,{Component} from 'react'
import {Router,Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {history} from './config'

//pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from './routes/ProtectedRoute'
import StudentDashboard from './pages/student_dashboard/StudentDashboard'
import DoctorDashboard from './pages/doctor_dashboard/DoctorDashboard'
import Forbidden from './pages/forbidden/Forbidden'
import AdminPanel from './pages/admin_panel/AdminPanel'
import StaffPanel from './pages/staff_panel/StaffPanel'
import NotFound from './pages/NotFound'

class App extends Component {
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forbidden' component={Forbidden} />
          <ProtectedRoute path='/student_dashboard' forUserType="Student" component={StudentDashboard} />
          <ProtectedRoute path='/doctor_dashboard' forUserType="Doctor" component={DoctorDashboard} />
          <ProtectedRoute path='/admin_panel' forUserType="Admin" component={AdminPanel} />
          <ProtectedRoute path='/staff_panel' forUserType="Staff" component={StaffPanel} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStatetoProps)(App)
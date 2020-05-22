import React,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Auth from './routes/auth/Auth'


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
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
import React,{Component} from 'react'
import {Redirect,Route} from 'react-router-dom'
import {connect} from 'react-redux'

class ProtectedRoute extends Component {
    render(){
        if(this.props.auth.loggedIn){
            if(this.props.auth.userType === this.props.forUserType){
                return(
                    <Route path={this.props.path} component={this.props.component} />
                )
            }else{
                return(
                    <Redirect to={{
                        pathname: '/forbidden',
                        state: { from: this.props.location }
                    }} />
                )
            }
        }else{
            return (
                <Redirect to={{
                    pathname: '/auth',
                    state: { from: this.props.location }
                }} />
            )
        }
    }
}


const mapStateToProps = ({auth}) => {
    return {
        auth: auth
    }
}

export default connect(mapStateToProps)(ProtectedRoute)
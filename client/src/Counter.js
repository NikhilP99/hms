import React, {Component} from 'react'
import { connect } from 'react-redux'
import {plus,minus} from './store/actions/counter'


class Counter extends Component {
    render(){
        return(
            <div>
                <button onClick={()=>{this.props.minus()}}>-</button>
                {this.props.counter.count}
                <button onClick={()=>{this.props.plus()}}>+</button>
            </div>
        )
    }
}


const mapStatetoProps = ({counter}) => {
    return {counter}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      plus: ()=>dispatch(plus()),
      minus: ()=>dispatch(minus())
    }
  }
  
  export default connect(mapStatetoProps,mapDispatchToProps)(Counter);
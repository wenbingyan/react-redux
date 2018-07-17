import React from 'react';
import * as actions from '../store/actions/counter'
import {connect} from 'react-redux'

class Counter extends React.Component{
    render(){
        return <div>
            <button onClick={()=>{
                this.props.add(10)
            }}> + </button>
            {this.props.num}
            <button onClick={()=>{
                this.props.minus(10)
            }}> - </button>            
        </div>
    }
}
let mapStateToProps = (state) => {
    return {num:state.counter.num}
}
let mapDispatchToProps = (dispatch) => {
    return {
        add:(count)=>{
            dispatch(actions.add(count))
        },
        minus:(count)=>{
            dispatch(actions.minus(count))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
import React from 'react';
import action from '../store/actions/todo'
import { connect } from 'react-redux';

class Todo extends React.Component{
    render(){
        return <div>
            <input type="text" onKeyUp={(e)=>{
                if(e.keyCode == 13){
                    this.props.todo(e.target.value) 
                    e.target.value = ''
                }               
            }}/>
            {this.props.text.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </div>
    }
}
let mapStateToProps = (state)=>{
    return {text:state.todo}
}
let mapDispatchToProps = (dispatch)=>{
    return {
        todo:(text)=>{
            dispatch(action(text))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
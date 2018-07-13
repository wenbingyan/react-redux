import React from 'react';
import store from '../store';

export default class Todo extends React.Component{
    render(){
        return <div>
            {store.getState().counter.num}
        </div>
    }
}
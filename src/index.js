import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import Todo from './components/Todo'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render((
  <Provider store={store}>
  <div className='box'>
      <Counter />
      <Todo />
    </div>
  </Provider>
), document.getElementById('root'))
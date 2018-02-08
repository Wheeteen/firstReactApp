import 'babel-polyfill'

import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import CommentApp from './CommentApp'

// ReactDOM.render(<CommentApp />, document.getElementById('root'));
// registerServiceWorker();
// Object.assign(): 方法用于将所有可枚举属性的值从一个或多个原对象copy -> target 对象。它将返回目标对象
// 合并具有相同属性的对象： Object.assign({},o1)

// 先使用map循环
// return state.map((todo, index) => {
//   if(index === action.index) {
//   	return Object.assign({}, todo, {
// 	  completed: true
//   	})
//   }
//   return todo
// })

import { render } from 'react-dom'
// import App from './TodoApp/containers/App'
// import reducer from './TodoApp/store/reducers'
import Root from './AsyncTodoApp/containers/Root.js'

// let store = createStore(reducer)


render(
  <Root />,
  document.getElementById('root')
)
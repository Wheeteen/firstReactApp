import React, { Component } from 'react'
import propTypes from 'prop-types'

class CommentInput extends Component {
  // this指定的是当前的对象，如果在事件中要绑定当前的元素的时候，要使用bind
  static propTypes = {
  	onSubmit: propTypes.func
  }
  constructor() {
  	super()
  	this.state = {
	  username: '',
	  content: ''
  	}
  }
  componentWillMount() {
  	this._loadUsername();
  }
  componentDidMount() {
  	this.textarea.focus()
  }
  handleUsernameChange(event) {
  	this.setState({
	  username: event.target.value
  	})
  }
  // 将username放在localStorage里面
  // 以_开头的方法为私有方法

  _loadUsername () {
  	const username = localStorage.getItem('username')
  	if(username) {
	  this.setState({username})
  	}
  }
  _saveUsername(username) {
  	localStorage.setItem('username', username)
  }
  handleUsernameBlur(event) {
  	this._saveUsername(event.target.value)
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit() {
  	if(this.props.onSubmit) {
	  const { username, content } = this.state
	  const createdTime = +new Date()
	  this.props.onSubmit({username, content, createdTime})
  	}
  	this.setState({'content': ''})
  }
  render() {
  	return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.username} 
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
            ref = {(textarea) => this.textarea = textarea}
            value={this.state.content} 
            onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
	)
  }
}

export default CommentInput
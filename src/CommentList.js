import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
  static propTypes = {
  	comments: PropTypes.array,
  	onDeleteComment: PropTypes.func
  }

  static defaultProps = {
  	comments: []
  }

  handleDeleteComment(index) {
  	if(this.props.onDeleteComment) {
	  this.props.onDeleteComment(index)
  	}
  }
  render() {
  	// const comments = [
   //    {username: 'Jerry', content: 'Hello'},
   //    {username: 'Tomy', content: 'World'},
   //    {username: 'Lucy', content: 'Good'}
   //  ]
  	return (
	  <div>
	    {this.props.comments.map((comment, i) => 
	    	<Comment 
	    	  comment={comment} 
	    	  key={i}
	    	  index={i}
	    	  onDeleteComment={this.handleDeleteComment.bind(this)} />)}
	  </div>
	)
  }
}

export default CommentList
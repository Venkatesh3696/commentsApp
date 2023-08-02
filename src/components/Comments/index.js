import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: initialCommentsList,
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' || comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        date: new Date(),
      }
      try {
        this.setState(prevState => ({
          commentsList: [...prevState.commentsList, newComment],
          name: '',
          comment: '',
        }))
      } catch (error) {
        console.log(error.message)
      }
      const {commentsList} = this.state
      console.log(commentsList)
    } else {
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList],
      }))
      console.log('please enter')
    }
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        // console.log(eachComment)
        if (id === eachComment.id) {
          console.log('liked')
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
    console.log('deleted')
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="left-half">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.addComment}>
              <input
                value={name}
                className="name-input"
                placeholder="Your Name"
                onChange={this.onNameChange}
              />
              <textarea
                value={comment}
                onChange={this.onCommentChange}
                className="comment-input"
                rows="6"
                cols="40"
                placeholder="Your Comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            alt="comments"
            className="comments-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>

        <div className="bottom-container">
          <p>
            <span className="count">{commentsList.length}</span>Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentData={eachComment}
                onLikeComment={this.onLikeComment}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

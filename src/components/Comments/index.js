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

const initialCommentsList = [
  {name: 'venky', comment: 'keep going', isLiked: false},
]

// Write your code here

class Comments extends Component {
  state = {
    id: 'a',
    name: '',
    comment: '',
    commentsList: initialCommentsList,
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
    console.log(event.target.value)
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
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
  }

  onLikeComment = id => {
    console.log('initiated')
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        console.log(id)
        if (id === eachComment) {
          console.log('found')
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
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
          <h1>Comments</h1>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentData={eachComment}
                onLikeComment={this.onLikeComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

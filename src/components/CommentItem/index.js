// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentData, onLikeComment, onDeleteComment} = props
  const {id, name, comment, isLiked, date} = commentData
  //   console.log(`start id in item  ${id}`)
  const postedTime = formatDistanceToNow(date)

  const firstLetter = name[0].toUpperCase()

  const onLike = () => {
    onLikeComment(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeImage = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  return (
    <li className="comments-container">
      <div className="user-details">
        <div className="name-profile">
          <div className="first-letter">{firstLetter}</div>
          <h1 className="user-name">{name}</h1>
          <p className="time">{postedTime}</p>
        </div>
        <p>{comment}</p>
      </div>

      <div className="interactions">
        <button className="like-button" type="button" onClick={onLike}>
          <img alt="like" className="like-img" src={likeImage} />
          <p className="like-text">like</p>
        </button>
        <button
          data-testid="delete"
          type="button"
          onClick={onDelete}
          className="like"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

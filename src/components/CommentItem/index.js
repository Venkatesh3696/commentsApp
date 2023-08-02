// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentData, onLikeComment} = props
  const {id, name, comment, isLiked} = commentData
  console.log(`start id  ${commentData}`)

  const firstLetter = name[0]

  const onLike = () => {
    console.log(`id:: ${id}`)
    onLikeComment(id)
  }

  const likeImage = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  return (
    <li className="comments-container">
      <div className="user-details">
        <div className="name-profile">
          <div className="first-letter">{firstLetter}</div>
          <h1>{name}</h1>
        </div>
        <p>{comment}</p>
      </div>

      <div className="interactions">
        <button className="like-button" type="button" onClick={onLike}>
          <img alt="like" className="like-img" src={likeImage} />
          <p className="like-text">like</p>
        </button>
        <img
          className="like"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

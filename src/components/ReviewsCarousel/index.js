// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {current: reviewsList[0]}

  render() {
    const {reviewsList} = this.props
    const {current} = this.state
    const {imgUrl, username, companyName, description} = current
    return (
      <div className="outer">
        <div className="inner">
          <h1>Reviews</h1>
          <img src={imgUrl} alt="" className="image" />
          <p className="username">{username}</p>
          <p className="username">{companyName}</p>
          <p className="username">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

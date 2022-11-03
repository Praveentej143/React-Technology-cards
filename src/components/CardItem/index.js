// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-desc">{description}</p>
        <div className="img-container">
          <img src={`${imgUrl}`} alt={`${title}`} className="avatar" />
        </div>
      </div>
    </li>
  )
}
export default CardItem

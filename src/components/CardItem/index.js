// Write your code here.
import './index.css'

const TechCardItem = props => {
  const {TechDetails} = props
  const {title, description, imgUrl, className} = TechDetails

  return (
    <div className="tech-bg-container">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
      <p className="main-description">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in Product Development.
      </p>
      <div className="bg-card-container">
        <div className="card-1">
          <h1 className="card-heading">{title}</h1>
          <p className="card-description">{description}</p>
          <img className="card-img" alt={title} src={imgUrl} />
        </div>
      </div>
    </div>
  )
}
export default TechCardItem

// Write your code here.
import './index.css'

const TechCardItem = props => {
  const {TechDetails} = props
  const {title, description, imgUrl, className} = TechDetails

  return (
    <div className="tech-bg-container">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
    </div>
  )
}
export default TechCardItem

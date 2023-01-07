import "./resumeItem.css"

export default function ResumeItem(props) {
  return(
    <div className="card-container">
      <div className="card-header">
        <p>{props.title}</p>
        <props.Icon/>
      </div>
      <span>{props.amount}</span>
    </div>
  )
}
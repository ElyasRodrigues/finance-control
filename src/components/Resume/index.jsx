import ResumeItem from "../ResumeItem"
import "./resume.css"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign

} from "react-icons/fa"


export default function Resume(props) {
  return(
    <div className="resume">
      <ResumeItem title="Entradas" amount={props.income} Icon={FaRegArrowAltCircleUp}/>
      <ResumeItem title="Saídas" amount={props.expense} Icon={FaRegArrowAltCircleDown}/>
      <ResumeItem title="Total" amount={props.total} Icon={FaDollarSign}/>
    </div>
  )
}
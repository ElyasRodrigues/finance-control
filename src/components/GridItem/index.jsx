import "./gridItem.css"
import {
  FaTrashAlt, 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown 
} from "react-icons/fa"

export default function GridItem({itens, onDelete}) {
  return (
    <>
      <tr>
        <td>{itens.desc}</td>
        <td>R$ {itens.amount}</td>
        <td>
          {itens.expense ? (
            <FaRegArrowAltCircleDown color="red"/>
            ) : (
            <FaRegArrowAltCircleUp color="#4fce58"/>
          )}
        </td>
        <td onClick={() => onDelete(itens.id)}><FaTrashAlt/></td>
      </tr>
    </>
  )
}
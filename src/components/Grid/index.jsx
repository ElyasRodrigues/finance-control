import GridItem from "../GridItem";
import "./grid.css";
// import {FaTrashAlt, FaAccusoft}   from "react-icons/fa"



export default function Grid({itens, setItens}) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return(
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {itens?.map((item, index) => (
            <GridItem key={index} itens={item} onDelete={onDelete}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
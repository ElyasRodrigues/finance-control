import { useState } from "react";
import Grid from "../Grid";
import "./form.css";

export default function Form({handleAdd, transactionsList, setTransactionsList}) {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setIsExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if(!desc || !amount){
      alert("Informe a descrição e o valor!");
      return
    } else if(amount < 1){
      alert("O valor tem que ser positivo!")
      return
    }


    const transaction = {
      id: generateID,
      desc: desc,
      amount: amount,
      expense: isExpense
    }

    handleAdd(transaction)
    
    setDesc("")
    setAmount("")
  } 

  return(
    <>
      <div className="form-container">
        <div className="input-content">
          <label htmlFor="desc">Descrição:</label>
          <input 
            type="text" 
            name="desc" 
            value={desc} 
            onChange={(ev) => setDesc(ev.target.value)}
          />
        </div>
        <div className="input-content">
          <label htmlFor="amount">Valor:</label>
          <input 
            type="number" 
            step="0.01"
            name="amount" 
            value={amount} 
            onChange={(ev) => setAmount(ev.target.value)}
          />
        </div>
        <div className="radio-group">
          <input 
            type="radio" 
            name="group-1" 
            id="rIncome" 
            defaultChecked
            onChange={() => setIsExpense(!isExpense)}
          />
          <label htmlFor="rIncome">Entrada</label>

          <input 
            type="radio" 
            name="group-1" 
            id="rExpenses" 
            onChange={() => setIsExpense(!isExpense)}
          />
          <label htmlFor="rExpenses">Saída</label>
        </div>

        <button onClick={handleSave}>Adicionar</button>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}
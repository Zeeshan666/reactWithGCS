import React from 'react'
import { useExpense } from '../../context/ExpenseTracker/ExpenseContactProvider'

export const Transaction = ( {transaction} ) => {

  const expenseOrIncome = transaction.amount < 0 ? '-' : '+';

  const {deleteTransaction} = useExpense()

  return (
    <>
        <li className= {expenseOrIncome === '-' ? 'minus' : 'plus'}>
           {transaction.text} <span > {expenseOrIncome} PKR {Math.abs(transaction.amount).toFixed(2)} </span>
          
           <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}> x </button>
        </li> 
    </>
  )
}


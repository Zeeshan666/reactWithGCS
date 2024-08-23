import React from 'react'
import { useExpense } from '../../context/ExpenseTracker/ExpenseContactProvider'
import { Transaction } from './Transaction'

export const  TransactionList = ()=>  {

  const {transactions} = useExpense()
  console.log(transactions)

  return (
    <>
    <h3>History</h3> 
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key= {transaction.id} transaction={transaction}/>
        ))}
        
      </ul>
    </>
  )
}


import React from 'react'
import { useReducer, useContext, createContext } from 'react'
import  AppReducer  from './AppReducer'

const initialState = {
  transactions : [
    { id: 1, text: 'TestingSend', amount: -20 },
    { id: 2, text: 'TestingReceive', amount: +20 }
  ]
}

export const ExpenseContactContext = createContext(initialState)

export const ExpenseContactProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState)
  

  function deleteTransaction(id) {
    dispatch({
      type: 'REVERT_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <ExpenseContactContext.Provider value = {
      {
        transactions : state.transactions,
        deleteTransaction,
        addTransaction

      }
    }>
      {children}
    </ExpenseContactContext.Provider>
  )
}


export const useExpense = () => {
  return useContext(ExpenseContactContext)
}
import React from 'react'
import { useReducer, useContext, createContext, useEffect } from 'react'
import  AppReducer  from './AppReducer'

const initialState = {
  transactions : [
    // { id: 1, text: 'TestingSend', amount: -20 },
    // { id: 2, text: 'TestingReceive', amount: +20 }
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

  useEffect ( () => {
    try {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions'))
        if (storedTransactions && storedTransactions.length > 0) {
          dispatch({
            type: 'INITIALIZE_TRANSACTIONS',
            payload: storedTransactions
          })
          console.log("Loaded existing transactions" + storedTransactions)
        }
    }
    catch (error) {
      console.log("Failed to load existing transactions", error)
    }
  }, [])


  useEffect ( () => {
    try{
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
      console.log("Saved transactions" + state.transactions)
    }
    catch(error) {
      console.log("Failed to save transactions", error)
    }
  }, [state.transactions])


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
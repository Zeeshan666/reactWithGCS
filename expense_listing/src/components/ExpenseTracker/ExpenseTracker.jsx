import React from 'react'
import './ExpenseTracker.css'
import {Header } from './Header'
import {Balance } from './Balance'
import {IncomeExpenses } from './IncomeExpenses'
import {TransactionList } from './TransactionList'
import {AddTransaction} from './AddTransaction'
import {ExpenseContactProvider} from '../../context/ExpenseTracker/ExpenseContactProvider'

function ExpenseTracker() {
  return (
    <>
        <ExpenseContactProvider>
            <Header/>
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </ExpenseContactProvider>
    </>
  )
}

export default ExpenseTracker
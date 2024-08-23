import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToExpenseTracker = () => {
        navigate("/expenseTracker")
    }

  return (
    <>
        <h1 style = {{color: "white"}}> Project Navigation </h1>
        <br></br> <br></br> <br></br>
        <button style = {{color: "orange"}} onClick = { goToExpenseTracker }> Expense Tracker </button>

    </>
  )
}

export default Home
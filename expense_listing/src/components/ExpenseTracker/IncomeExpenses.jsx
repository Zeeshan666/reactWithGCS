import React from "react";
import { useExpense } from "../../context/ExpenseTracker/ExpenseContactProvider";



export const IncomeExpenses = () => {
	const { transactions } = useExpense();
	const income = transactions
								.filter((transaction) => transaction.amount > 0)
								.reduce((acc, item) => (acc += item.amount), 0)
								.toFixed(2);	
								
	const expense = transactions
								.filter((transaction) => transaction.amount < 0)
								.reduce((acc, item) => (acc += -item.amount), 0) 
								.toFixed(2) ;

	return (
		<>
			<div className="inc-exp-container">
				<div>
					<h4 style={{ color: "#333" }}>Income </h4>
					<p className="money plus"> PKR {income}</p>
				</div>
				<div>
					<h4 style={{ color: "#333" }}>Expense </h4>
					<p className="money minus"> PKR {expense}</p>
				</div>
			</div>
		</>
	);
}



import React from "react";
import { useExpense } from "../../context/ExpenseTracker/ExpenseContactProvider";

export const  Balance = () => {
	const {transactions} = useExpense()
	const amount = transactions.map ( transaction => transaction.amount)
	const netAmount = amount.reduce((acc, value) => (acc += value), 0).toFixed(2)


	return (
		<>
			<h4> Net Balance </h4>
			<h2 > PKR {netAmount} </h2>
		</>
	);
}



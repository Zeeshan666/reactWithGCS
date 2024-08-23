import React from "react";
import { useState } from "react";
import { useExpense } from "../../context/ExpenseTracker/ExpenseContactProvider";

export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

  const { addTransaction } = useExpense();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }

	return (
		<>
			<h3>Add new transaction</h3>

			<form id="form" onSubmit = {handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						id="text"
						placeholder="Enter text..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Key <br />
						(Expense : -ve Value, Income : +ve Value)
					</label>
					<input
						type="number"
						id="amount"
						placeholder="Enter amount..."
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn" >Add transaction</button>
			</form >
		</>
	);
};

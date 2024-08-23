import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker'



const router = createBrowserRouter(

    createRoutesFromElements(

        <Route path="/" element = {<Layout />} >
             <Route index element = {<Home />} />
             <Route path="/expenseTracker" element = { <ExpenseTracker />} />
        </Route>
    )
)

export default router

/*
   
*/
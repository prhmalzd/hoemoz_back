const express = require("express")
const Expense = require('../models/Expense')

const router = express.Router();

router.post("/expense" , async (req , res) => {
    try {
        const {name , amount , buyer , price} = req.body
        const currentMonth = new Date().toISOString().slice(0,7);

        const newExpense = new Expense({
            name,
            amount,
            buyer,
            price,
            month : currentMonth
        });
        await newExpense.save();

        res.status(201).json(newExpense);
    }
    catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get('/expense', async (req , res) => {
    try {
        const currentMonth = new Date().toISOString().slice(0,7);
        const expense = await Expense.find({month : currentMonth});
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
router.delete('/expenses/reset' , async (req , res) => {
    try {
        await Expense.deleteMany({})
        res.status(200).json({message : 'All expenses deleted!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
})

module.exports = router
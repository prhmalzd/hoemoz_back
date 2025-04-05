const express = require("express")
const Todo = require('../models/Todo')

const router = express.Router();

router.post("/todos" , async (req , res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();

        res.status(201).json(newTodo);
    }
    catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get('/todos', async (req , res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.delete('/todos/:id' , async (req , res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({message : "Todo Not Found"})
        }
        res.json({message : "Todo deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
})

module.exports = router
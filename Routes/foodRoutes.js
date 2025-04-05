const express = require("express")
const Foods = require('../models/Foods')

const router = express.Router();

router.post("/foods" , async (req , res) => {
    try {
        const newFoods = new Foods(req.body);
        await newFoods.save();

        res.status(201).json(newFoods);
    }
    catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get('/foods', async (req , res) => {
    try {
        const foods = await Foods.find();
        res.status(200).json(foods)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})
router.delete('/foods/reset' , async (req , res) => {
    try {
        await Foods.deleteMany({})
        res.status(200).json({message : 'All expenses deleted!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
})

module.exports = router
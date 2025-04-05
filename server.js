const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();
const todoRoutes = require('./Routes/todoRoutes')
const expenseRoutes = require('./Routes/expenseRoutes')
const foodsRoutes = require('./Routes/foodRoutes')

const app = express()

app.use(express.json());
app.use(cors());
app.use('/api' , todoRoutes);
app.use('/api' , expenseRoutes);
app.use('/api' , foodsRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected")).catch((err) => console.log(err))

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log('Server Running')
})
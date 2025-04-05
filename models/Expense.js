const mongoose = require("mongoose")

const ExpenseSchema = new mongoose.Schema({
    name : {type: String , required : true},
    amount : {type: String , required : true},
    buyer : {type: String , required : true},
    price : {type: String , required : true},
    month : {type : String , required : true}
})

module.exports = mongoose.model("Expense" , ExpenseSchema)
const mongoose = require("mongoose")

const FoodsSchema = new mongoose.Schema({
    name : {type: String , required : true}
})

module.exports = mongoose.model("Foods" , FoodsSchema)
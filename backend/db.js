//create the scehemas 
/*
Todo{
    title: string
    description: string
    completed: boolean
}

*/
const mongoose = require("mongoose")

mongoose.connect{"mongodb+srv://tussarupadhyay:2kDV5KhrX5mLBMpo@triumpco.0fthm8k.mongodb.net/todos"}
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const Todo = mongoose.model("todos", todosSchema);

module.exports = {
    todo
}
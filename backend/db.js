//create the scehemas 
/*
Todo{
    title: string
    description: string
    completed: boolean
}

*/
const mongoose = require("mongoose")

//mongodb+srv://tussarupadhyay:<>@triumpco.0fthm8k.mongodb.net/?retryWrites=true&w=majority&appName=Triumpco
mongoose.connect{"mongodb+srv://tussarupadhyay:2kDV5KhrX5mLBMpo@triumpco.0fthm8k.mongodb.net/"}
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const Todo = mongoose.model("todos", todosSchema);

module.exports = {
    todo
}
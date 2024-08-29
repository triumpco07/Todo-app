// write basic express boilerplate code
// with express.json middleware
 
const express = require("express"); // Import required modules
const {createTodo} = require("./types");
const { todo } = require(" ./db")
const app = express(); // Create an Express application

app.use(express.json()); // Use express.json() middleware to parse JSON request bodies

app.get('/todos', async (req, res) => { // Define a simple route
   const todo = await todo.find({

   })

   console.log(todos) //promise

   res.json({
    todos
   })
})

app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs!!"
        })
        return;
    }

    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.put('/todos', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs!!"
        })
        return;
    }

    await todo.update({
        _id.req.body.id
    }, {
        completed: true
    })

    res.json([
        msg: "Todo marked as completed"
    ])
})
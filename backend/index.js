// write basic express boilerplate code
// with express.json middleware
 
const express = require("express"); // Import required modules
const {createTodo} = require("./types");
const app = express(); // Create an Express application

app.use(express.json()); // Use express.json() middleware to parse JSON request bodies

app.get('/todos', (req, res) => { // Define a simple route
   
})

app.post('/todos', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs!!"
        })
        return;
    }
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
})
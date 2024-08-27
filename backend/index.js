// write basic express boilerplate code
// with express.json middleware
 
const express = require("express"); // Import required modules

const app = express(); // Create an Express application

app.use(express.json()); // Use express.json() middleware to parse JSON request bodies

app.get('/todos', (req, res) => { // Define a simple route

    
})

app.post('/todos', (req, res) => {
    
})

app.put('/todos', (req, res) => {
    
})
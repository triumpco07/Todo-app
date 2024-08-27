const zod = require('zod');

const creatTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const createUpdate = zod.object({
    id: zod.string()
    
})

module.exports = {
    creatTodo: creatTodo,
    createUpdate: createUpdate
}
const zod = require("zod");


// Creating input type validation for the user input through Apis


const createTodo = zod.object(
    {
        title:zod.string(),
        description:zod.string()
    }
)

const updateTodo= zod.object(
    {
        id:zod.string(),
    }
)


module.exports ={
    createTodo:createTodo,
    updateTodo:updateTodo
}
const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(cors());


app.get("/getAllTodos", async (req,res)=>{

    try{

        const todoList = await todo.find({});

        res.json({
            todolist:todoList
        })
        
    }
    catch(err)
    {
        console.log(err)
    }

})

app.post("/updateTodo", async(req,res)=>{

    const recevedID= req.body.id; 
    const parsedId= updateTodo.safeParse(recevedID);

    if(!parsedId.success)
    {
        res.status(411).json({
            msg:"wrong input"
        })
        return;
    }

    try{
        const getTodo = await todo.find({_id :parsedId})

        const status = getTodo.completed
        getTodo.completed = !status;
        await getTodo.save();

        res.json(getTodo);
    }
    catch(err)
    {
        console.log(err)
    }

})


app.post("/createTodo", async (req,res)=>{
    const recevedPayload = req.body;

    const parsedPayload = createTodo.safeParse(recevedPayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg:"Wrong data send"
        })
        return;
    }

    // insert document in mongodb

    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })
    res.status(500).json({
        msg:"Todo Created Successfully "
    })
})

app.listen(8000,(err)=>{

    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`server is running on 8000`)
    }
})
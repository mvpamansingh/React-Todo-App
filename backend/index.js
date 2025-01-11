const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(cors());


app.get("/getAllTodos", (req,res)=>{


})

app.post("/updateTodo", (req,res)=>{

    const recevedID= req.body;
    const parsedId= updateTodo.safeParse(recevedID);

    if(!parsedId.success)
    {
        res.status(411).json({
            msg:"wrong input"
        })
        return;
    }

    

})


app.post("/createTodo", (req,res)=>{
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
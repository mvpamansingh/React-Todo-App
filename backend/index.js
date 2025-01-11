const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/getAllTodos", (req,res)=>{


})

app.post("/updateTodo", (req,res)=>{

})


app.post("/createTodo", (req,res)=>{

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
import { useState } from "react"

 export function CreateTodo()
{   
    // state of Title and desc
    const [title , setTitle] = useState("");
    const [description, setDescription] = useState("")


    return <div>

        <input style= {{
            padding:10,
            margin:10
        }} type = "text" placeholder="Title of your Todo"  onChange={function(it){
            setTitle(it.target.value)
        }} ></input>
        <br/>
        <br/>
        <input style ={{
            padding:10,
            margin:10
        }} type ="text" placeholder="description" onChange={function(it){
            setDescription(it.target.value)
        }}></input>
        <br/>
        <br/>

        <button style ={{
            padding:10,
            margin:10
        }}  onClick= {()=>{


            fetch("http://localhost:8000/createTodo", {
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json()
                alert("Todo added")
            })
        }

        }> Add Todo</button>
    </div>
}

function titleChanged(it)
{
    setDescription(it)
}
// this syntax is wrong as react follows ES6 
/*
In your code, you were using CommonJS style (module.exports) but React uses ES6 modules. Here's why this matters:
Vite (your build tool) uses ES modules by default
React components are typically written using ES6 module syntax
Modern browsers support ES modules natively

*/
// module.exports = {
//     CreateTodo
// }

 export function CreateTodo()
{
    return <div>

        <input style= {{
            padding:10,
            margin:10
        }} type = "text" placeholder="Title of your Todo" ></input>
        <br/>
        <br/>
        <input style ={{
            padding:10,
            margin:10
        }} type ="text" placeholder="description"></input>
        <br/>
        <br/>

        <button style ={{
            padding:10,
            margin:10
        }}   onClick={""}> Add Todo</button>
    </div>
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
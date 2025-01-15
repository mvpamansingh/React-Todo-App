

export function Todos({todos}){

    // const todos = todoListt.todolist

    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed== true? "Completed": "Mark as Complete"}</button>
                </div>
            })

        }
    </div>
    

    // return <div>

        
    //     <h1>Go to Gym</h1>
    //     <h2>You need to </h2>
    //     <button>mark as completed</button>
    // </div>
}
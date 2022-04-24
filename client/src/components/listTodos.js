import React from "react";
import EditToDo from "./editTodo";

const ListTodos = () =>{

    const [todos, setTodos] = React.useState([])

    //delete fn
    const DeleteTodo = async (id) => {
        try{
            const deleteTodo = await fetch(`/todos/${id}`, {
                method: "DELETE"
            }) 

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch(error) {
            console.error('Exception ' + error);
        }
    }

    const getTodos = async () => {
        try{
            const response = await fetch('/todos')
            const jsonData = await response.json()

            setTodos(jsonData)
        
        } catch(error) {
            console.error('Exception ' + error);
        }
        
    }

    React.useEffect(() => {
        getTodos()
    }, [])

    return(
    <>
    <table className="table mt-5 text-center">
        <thead>
        <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr> */}
        {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditToDo todo={todo}/></td>
                <td><button className='btn btn-danger' onClick={() => DeleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
    )
}

export default ListTodos
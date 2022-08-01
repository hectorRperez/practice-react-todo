import { Todo } from "../components/Todo";

import { useState } from "react";

export const TodoApp = () => {

    const [todo, setTodo] = useState([])

    function addTodo(e) {
        e.preventDefault();
        let newTodo = {
            id: crypto.randomUUID(),
            title: e.target.inputTitle.value,
            completed: false
        }

        let temp = [...todo];
        temp.push(newTodo)
        setTodo(temp)
        e.target.inputTitle.value = '';
    }

    function updateTodo(id, title) {
        let temp = [...todo];
        let index = temp.findIndex(item => item.id === id)
        temp[index].title = title;
        setTodo(temp)
    }

    function deleteTodo(id) {
        let temp = [...todo];
        let index = temp.findIndex(item => item.id === id)
        temp.splice(index, 1)
        setTodo(temp)
    }

    return (
        <div className="wrapper">
            <form className="form" onSubmit={addTodo}>
                <input name="inputTitle" placeholder="add new todo" type="text" />
                <button>Create todo</button>
            </form>
            <div className="todoList">
                {todo.map(item => {
                    return <Todo
                        title={item.title}
                        key={item.id}
                        handleUpdate={updateTodo}
                        handleDelete={deleteTodo}
                        id={item.id}
                    />
                })}
            </div>
        </div>
    )
}
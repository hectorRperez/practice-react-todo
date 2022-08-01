import { useState } from "react";

export const Todo = ({ id, title, handleUpdate, handleDelete }) => {

    const [isUpdate, setIsUpdate] = useState(false)

    function updateTodo(e) {
        e.preventDefault();
        setIsUpdate(true)
    }

    function RenderFormUpdate() {
        const [newValue, setNewValue] = useState(title)

        function handleSubmit(e) {
            e.preventDefault();
            handleUpdate(id, newValue);
            setIsUpdate(false)
        }

        function handleChange(e) {
            setNewValue(e.target.value)
        }

        return (
            <form className="formToEdit" onSubmit={handleSubmit}>
                <input type="text" value={newValue} name="change" onChange={handleChange}></input>
                <button>update</button>
            </form>
        )
    }

    function deleteTodo() {
        handleDelete(id)
    }

    function ShowTodo() {
        return (
            <div className="task">
                <h4>{title}</h4>
                <div className="containerTask__button">
                    <button className="editBtn" onClick={updateTodo}>edit</button>
                    <button className="deleteBtn" onClick={deleteTodo}>delete</button>
                </div>
            </div>
        )
    }

    return (
        <div className="containerTask">
            {isUpdate ? <RenderFormUpdate /> : <ShowTodo />}
        </div>
    )
}
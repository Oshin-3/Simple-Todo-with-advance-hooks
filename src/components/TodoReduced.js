import { useState, useReducer } from "react";
import uuid from 'react-uuid';
import { TiTick, TiTrash } from 'react-icons/ti';
import { taskReducers, formReducers } from "./reducers";



const TodoReduced = () => {

    const [stateTask, dispatchTask] = useReducer(taskReducers, [])
    //const [list, setList] = useState([]);

    const [stateForm, dispatchForm] = useReducer(formReducers, {
        title : "",
        by: ""
    })
    // const [task, setTask] = useState({
    //     title: "",
    //     by: ""
    // });

    const handleTask = (e) => {
        e.preventDefault();
        // const key = e.target.name;
        // const value = e.target.value;
        // setTask({ ...task, [key]: value });
        dispatchForm({
            type : 'HANDLE_TASK',
            field : e.target.name,
            payload : e.target.value
        })
    }

    // const addTask = () => {
    //     console.log(task);
    //     console.log(uuid());
    //     const updated = { ...task, "id": uuid(), "isDone": false }
    //     console.log(updated);
    //     setList([...list, updated]);
    // }

    // const markDone = (id) => {
    //     console.log(`Task with ${id} is done!`);
    //     const index = list.findIndex((task) => task.id === id);
    //     const doneTask = [...list];
    //     doneTask[index].isDone = true;
    //     setList(doneTask);
    // }

    // const deleteTask = (id) => {
    //     console.log(`Task with ${id} to remove!`)
    //     const filteredTask = list.filter((task) => task.id !== id);
    //     setList([...filteredTask]);
    // }



    return (
        <>
            <div>
                <h1>My TodoList</h1>
                <div>
                    I want to do <input type="text" name="title" onChange={handleTask} /> by{" "}
                    <input type="date" name="by" onChange={handleTask} />
                    <button className="wishBtn" onClick={() => dispatchTask({type : 'ADD_TASK', payload : stateForm})}>Add a Task</button>
                </div>
                <ul>
                    {stateTask.map((item) => (
                        <li key={item.id} style={{ textAlign: "center" }}>
                            <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                                <strong>{item.title}</strong> is due by {item.by}</span>
                            <span><TiTick size={24} onClick={() => dispatchTask({type : 'DONE_TASK', payload : item.id})} /></span>
                            <span><TiTrash size={24} onClick={() => dispatchTask({type : 'REMOVE_TASK', payload : item.id})} /></span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoReduced;
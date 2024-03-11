import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        title: "Hoc bai",
        done: false
    },
    {
        id: 2,
        title: "Lam viec ca nhan",
        done: false
    },
    {
        id: 3,
        title: "Lam viec nhom",
        done: false
    }
]

function  TodoList(props) {

    const [tasks, setTasks] = useState(data);
    const [countTaskDone, setCountTaskDone] = useState(0);
    const [task, setTask] = useState("");

    useEffect(() => {
        let tasksDone = tasks.filter(item => item.done == true);
        setCountTaskDone(tasksDone.length);
    }, [tasks])

    const doneTask = (idx, idTask) => {
        tasks[idx].done = true;
        setTasks([...tasks]);
    }

    const changeInput  = (evt) => {
        let value = evt.target.value;
        setTask(value);
    }


    const addTask = () =>  {
        
        let lastTask = tasks[tasks.length - 1];
    
        let newTask = {
            id: lastTask.id + 1,
            title: task,
            done: false,
        }
        tasks.push(newTask);
        setTasks([...tasks]);
        setTask("");
    }

        return (
            <>
                <h2>Todo List: {countTaskDone } (done) / {tasks.length}</h2>
                <input onChange={changeInput}/>
                <button onClick={addTask}>Add</button>
                <table>
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td></td>
                    </tr>
                    </thead>
                    
                    { tasks.map((task, index) => (
                        <>
                        { !task.done && (
                            <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>
                                    <button onClick={() => doneTask(index, task.id)} >Done</button>
                                </td>
                            </tr>
                        )}
                        </>
                    ))}
                </table>
                
            </>
        )
}

export default TodoList
import { useState } from "react";

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

    const doneTask = (idx, idTask) => {
        tasks[idx].done = true;
        // xu ly logic
        let newData = tasks.filter(item => item.id !== idTask);
        // set lai state -> components re-render lai
        setTasks(newData);
    }

        return (
            <>
                <h2>Todo List</h2>
                <table>
                    <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td></td>
                    </tr>
                    { tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                                <button onClick={() => doneTask(index, task.id)} >Done</button>
                            </td>
                        </tr>
                    ))}
                </table>
                
            </>
        )
}

export default TodoList
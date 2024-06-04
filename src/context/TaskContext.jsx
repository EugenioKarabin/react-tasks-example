import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvide(props) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    },[])


    function crearTask(task) {
        setTasks([...tasks,{
            id: tasks.length,
            title: task.title,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            crearTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
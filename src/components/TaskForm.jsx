import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"


function TaskForm() {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const { crearTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        crearTask({
            title,
            description
        })

        setTitle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">Agrega una Tarea</h2>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <input placeholder="Ingrese una tarea" 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder="Descripción de la Tarea"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                >
                </textarea>
                <button className="bg-indigo-500 
                                    px-3 py-1 
                                    text-white 
                                    hover:bg-indigo-400
                                    rounded-md">
                    Grabar
                </button>
            </form>
        </div>
    )
}

export default TaskForm
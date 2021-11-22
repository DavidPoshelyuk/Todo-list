import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {TodoList} from "./TodoList";


export type  FilterType = 'all' | 'completed' | 'active'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        // {id: v1(), title: "JS", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterType>('all')
    const RemoveTask = (taskId: string) => {
        let tasks01 = tasks.filter(t => t.id !== taskId)
        setTasks(tasks01)
    }
    const ChangeFilter = (value: FilterType) => {
        setFilter(value);
    }

    const AddTask = (NewTaskTitle: string) => {

        const NewTask: TaskType = {
            id: v1(),
            title: NewTaskTitle,
            isDone: false
        }
        // const copyState = [...tasks]
        // copyState.push(NewTask)
        setTasks([NewTask, ...tasks])
    }
    let tasksFortodolist = tasks;
    if (filter === "completed") {
        tasksFortodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksFortodolist = tasks.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            <TodoList title="What to learn"
                      addTask={AddTask}
                      removetask={RemoveTask}
                      task={tasksFortodolist}
                      changeFilter={ChangeFilter}/>
        </div>

    )
}


export default App;
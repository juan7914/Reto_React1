import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import { TaskComponents } from '../pure/task';



const TaskListComponents = () => {
    const defaulTask = new Task ("Example" , "descripcion-default", false , LEVELS.NORMAL)
    return (
        <div>
            <h2>the task is</h2>
            <TaskComponents task={defaulTask}/>
        </div>
    );
};





export default TaskListComponents;

import React from 'react'
import PropTypes from 'prop-types'
import  Task  from '../models/task.class.js';


function TaskComponents({ task }) {
  return (
    <div>
        <h2>
            nombre : { task.name }
        </h2>
        <h3>
            Descriptcion : { task.description }
        </h3>
        <h4>
              level: { task.level }
        </h4>
        <h5>
            this task is : {task.completed ? "COMPLETED" : "PENDING"}
        </h5>
    </div>
  )
}

TaskComponents.propTypes = {
    TaskComponents : PropTypes.instanceOf(Task)
}

export default TaskComponents;




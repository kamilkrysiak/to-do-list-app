import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h1>tasks to be done</h1>
        {activeTasks.length > 0 ? activeTasks : <p>you have no tasks to do</p>}
      </div>

      <hr />

      <div className="done">
        <h3>tasks done <em>({done.length})</em></h3>
        {doneTasks}
      </div>
    </>
  );
}

export default TaskList;
import React from 'react'
import TaskList from './TaskList';
import Button from '@mui/material/Button';

const Task = ({handleAllTaskSubmit, task, taskDate, handleTask, handleTaskDate, allTask,
    handleRemoveTask
}) => {
  return (
    <form className='formtask' action="" onSubmit={handleAllTaskSubmit}>

        <div className='firstrow'>
            <label htmlFor="">Task for today</label> <label htmlFor="">Date <input type="Date" name='taskDate' value={taskDate} onChange={handleTaskDate} /></label>
        </div>

        <div className='secondrow'>
        <textarea name="task" id="" cols="30" rows="5" placeholder='Any Task?' value={task} onChange={handleTask} ></textarea>
        </div>

        <div className='thirdrow'>
            {/* <input className='btnSave' type="submit" value={"SAVE"} /> */}
            <Button type="submit" variant="contained">Save</Button>
        </div>
        <div>
            <TaskList allTask={allTask} handleRemoveTask={handleRemoveTask} />
        </div>

    </form>
  )
}
export default Task;


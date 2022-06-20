import React, {useEffect, useState} from 'react'
import Header from './Header.js';
import '../css/Home.css'
import Task from './Task.js';
import Thoughts from './Thoughts.js';

const retrieveThoughts = localStorage.getItem('allThoughts') ?  JSON.parse(localStorage.getItem('allThoughts')) : []
const retrieveTask = localStorage.getItem('allTask') ?  JSON.parse(localStorage.getItem('allTask')) : []

const Home = () => {

    // variable for Thoughts 
const [id, setID] = useState(Date.now)
const [thoughtsDate, setThoughtsDate] = useState('');
const [thoughts, setThoughts] = useState('');
const [allThoughts, setAllThoughts]= useState(retrieveThoughts);

    

function handleThoughtsDate (event){
  setThoughtsDate(event.target.value);
}
function handleThoughts (event){
  setThoughts(event.target.value)
}

function handleAllThoughtsSubmit(e){
  setID(Date.now())
  e.preventDefault();
  if (thoughts !== "" || thoughtsDate !== "") {
    const data = {
      id,thoughtsDate, thoughts
    }
    setAllThoughts([...allThoughts, data]);
    
    setThoughtsDate('');
    setThoughts('');

  }
}


  //function for deleting thoughts
  function handleRemoveThoughts(e){
    const confirmMessage = window.confirm('Are you sure you want to delete?')
      if (confirmMessage){
      let numId = parseInt(e.target.id);
      let newThoughts = [...allThoughts].filter(thought => {return thought.id !== numId});
      setAllThoughts(newThoughts)
    }
  }

useEffect(()=>{
    window.localStorage.setItem('allThoughts', JSON.stringify(allThoughts))

  }, [allThoughts])



// variable for task
const [taskDate, setTaskDate] = useState('');
const [task, setTask] = useState('');
const [allTask, setAllTask]= useState(retrieveTask);

function handleTaskDate (event){
    setTaskDate(event.target.value);
  }
  function handleTask (event){
    setTask(event.target.value)
  }
  
  function handleAllTaskSubmit(e){
    setID(Date.now())
    e.preventDefault();
    if (task !== "" || taskDate !== "") {
      const data = {
        id,taskDate, task
      }
      setAllTask([...allTask, data]);
      
      setTaskDate('');
      setTask('');
  
    }
  }
  useEffect(()=>{
    window.localStorage.setItem('allTask', JSON.stringify(allTask))

  }, [allTask])


  //function for deleting tasl
  function handleRemoveTask(e){
    const confirmMessage = window.confirm('Are you sure you want to delete?')
      if (confirmMessage){
      let numId = parseInt(e.target.id);
      let newTask = [...allTask].filter(task => {return task.id !== numId});
      setAllTask(newTask)
    }
  }





  return (
    <div>
      <header>
        <Header />
      </header>
        <main>
            <div className='thoughts'>
                <Thoughts thoughtsDate={thoughtsDate} thoughts={thoughts} handleThoughts={handleThoughts} handleThoughtsDate={handleThoughtsDate} handleAllThoughtsSubmit={handleAllThoughtsSubmit} allThoughts={allThoughts}
                handleRemoveThoughts={handleRemoveThoughts}  
                />
            </div>
            <div className='task'>
                <Task taskDate={taskDate} task={task} handleTask={handleTask} 
                handleTaskDate={handleTaskDate} 
                handleAllTaskSubmit={handleAllTaskSubmit} allTask={allTask}
                handleRemoveTask={handleRemoveTask} 
                />
            </div>

        </main>
          
        <footer>

        </footer>
    </div>
  )
}
export default Home;

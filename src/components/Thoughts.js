import React from 'react'
import ThoughtsList from './ThoughtsList';
import Button from '@mui/material/Button';

const Thoughts = ({handleAllThoughtsSubmit, thoughts, thoughtsDate, handleThoughts, handleThoughtsDate, allThoughts,
    handleRemoveThoughts
}) => {
  return (
    <form className='formthoughts' action="" onSubmit={handleAllThoughtsSubmit}>

        <div className='firstrow'>
            <label htmlFor="">Thoughts for the Date</label> <label htmlFor="">Date <input type="Date" name='thoughtsDate' value={thoughtsDate} onChange={handleThoughtsDate} /></label>
        </div>

        <div className='secondrow'>
            <textarea name="thoughts" id="" cols="30" rows="5" placeholder='Any Thoughts?' value={thoughts} onChange={handleThoughts} ></textarea>
        </div>

        <div className='thirdrow'>
            {/* <input className='btnSave' type="submit" value={"SAVE"} /> */}
            <Button type="submit" variant="contained">Save</Button>
        </div>
        <div>
            <ThoughtsList allThoughts={allThoughts} handleRemoveThoughts={handleRemoveThoughts} />
        </div>

    </form>
  )
}
export default Thoughts;

import React from 'react'
import '../css/Table.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TaskIcon from '@mui/icons-material/Task';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const TaskList =  ({allTask, handleRemoveTask}) => {
    const taskList = allTask.map(item =>{
    return <tr>
             <StyledTableCell> {item.taskDate}</StyledTableCell>
             <StyledTableCell >{item.task}  </StyledTableCell>
             <StyledTableCell ><span><TaskIcon color="success"/></span> </StyledTableCell>
             
             <StyledTableCell >
                 <Button color="error" variant="outlined" startIcon={<DeleteIcon />} id={item.id} onClick={handleRemoveTask}>
                   Delete
                 </Button>
             </StyledTableCell>
        </tr>   
    })
  return (
    <table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Date </StyledTableCell>
            <StyledTableCell >Task</StyledTableCell>
            <StyledTableCell colSpan={2} align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <tbody>
            {taskList}
        </tbody>
    </table>
  )
}
export default TaskList;


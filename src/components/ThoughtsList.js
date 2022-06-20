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
  
const ThoughtsList = ({allThoughts, handleRemoveThoughts}) => {
  const thoughtsList = allThoughts.map(item =>{
    return <tr>
                <StyledTableCell> {item.thoughtsDate}  </StyledTableCell>
                <StyledTableCell >{item.thoughts} </StyledTableCell>
                <StyledTableCell ><span><TaskIcon color="success"/></span></StyledTableCell>
                
                <StyledTableCell >
                    <Button color="error" variant="outlined" startIcon={<DeleteIcon />} id={item.id} onClick={handleRemoveThoughts}>
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
            <StyledTableCell >Thoughts</StyledTableCell>
            <StyledTableCell colSpan={2} align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <tbody>
            {thoughtsList}
        </tbody>
    </table>
  )
}
export default ThoughtsList;

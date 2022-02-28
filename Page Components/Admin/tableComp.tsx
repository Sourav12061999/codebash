import React from 'react'
import { Box, Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AddBlog from './addBlog';
function TableComp() {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      const rows = [
        createData('Frozen Yougart', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
  return (
    <Box>
<TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{fontWeight:700}}>
          <TableRow>
            <TableCell><Typography variant='h5'>Heading</Typography></TableCell>
            <TableCell align="right"><Typography variant='h5'>Status</Typography></TableCell>
            <TableCell align="right"><Typography variant='h5'>Views</Typography></TableCell>
            <TableCell align="right"><Typography variant='h5'>Update</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } 
              ,cursor:"pointer",":hover":{background:"#e0e0e0"}}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"><Button>update</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddBlog/>
    </Box>
  )
}

export default TableComp
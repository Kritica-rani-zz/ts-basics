import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {}

function TableData(props: Props) {
    const {} = props

    function createData(
  id: number,
  userId: number,
  title: string,
  body: string,
  
) {
  return { id, userId, title, body };
}
    const rows = [
        createData(1, 1, 'lorem ipsum','lorem ipsum'),
        createData(2, 2, 'lorem ipsum','lorem ipsum'),
        createData(3, 3, 'lorem ipsum','lorem ipsum'),
        createData(4, 4, 'lorem ipsum','lorem ipsum'),
        createData(5, 5, 'lorem ipsum','lorem ipsum'),
        createData(6, 6, 'lorem ipsum','lorem ipsum'),
      ];
    return (
        <div>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align ="right">id</TableCell>
            <TableCell align="right">userId</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default TableData

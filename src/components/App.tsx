import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import TableSearch from './TableSearch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import GridView from './GridView'
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute' as 'absolute',
  left: 500,
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,

};
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [bodyData, setbodyData] = useState<string>("")
  const [toggle, setToggle] = useState<any>(false)
  const handleOpen = (e: any, body: string) => {
    setOpen(true)
    setbodyData(body)
  };
  const handleClose = () => setOpen(false);
  function createData(
    id: number,
    userId: number,
    title: string,
    body: string,

  ) {
    return { id, userId, title, body };
  }
  const rows = [
    createData(1, 1, 'lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
    createData(2, 2, 'lorem ipsum', 'Duis aute irure dolor  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),
    createData(3, 3, 'lorem ipsum', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'),
    createData(4, 4, 'lorem ipsum', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'),
    createData(5, 5, 'lorem ipsum', 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'),
    createData(6, 6, 'lorem ipsum', 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'),
  ];
  const [info, setinfo] = useState<any>(rows)

  const handleToggle = (e: any) => {
    setToggle(!toggle)
   
  }



  return (
    <div className="App">
      <Navbar />

      <TableSearch handleToggle={handleToggle} toggle={toggle} />
      <div>

        {!toggle ? <div> <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>

                <TableCell align="right">id</TableCell>
                <TableCell align="right">userId</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {info.map((row: any) => (
                <><TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.userId}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right" onClick={(e) => handleOpen(e, row.body)}>{row.body}</TableCell>
                </TableRow>

                </>

              ))}
            </TableBody>
          </Table>
        </TableContainer>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a Body
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {bodyData}
              </Typography>
            </Box>
          </Modal>
        </div>
          : <GridView tableData={info} />}
      </div>
      


    </div>
  );
}

export default App;

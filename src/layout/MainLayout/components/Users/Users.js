import React,{useState,useEffect} from 'react'
import {users} from '../../data/usersData'
// import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Users = () => {
    // const [users,setUsers] = useState()
  

    // useEffect(() => {
    //     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    //     axios.get(apiUrl).then((resp) => {
    //       const allPersons = resp.data;
    //       setUsers(allPersons);
    //     });
    //   }, [setUsers]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Web Site</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {users && users.map((user) => {
            return(
                <TableRow
            
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.website}</TableCell>
              </TableRow>
            )
        })}

        
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Users

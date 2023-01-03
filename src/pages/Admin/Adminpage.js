import React, { useEffect, useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './Adminpage.css';

import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'SNO.', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Project Catogery', minWidth: 170, align: 'center' },
  {
    id: 'population',
    label: 'Project Name',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Update',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Delete',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function Adminpage() {
  const [portdeatils, setPortdeatils] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${window.URL}/api/gettingportfolios`).then((res) => {
      setPortdeatils(res.data);
    });
  }, []);

  // FOR UPDATING PORTFOLIOS

  return (
    <>
      <Grid className="container-portfolio">
        <div className="admin-page">
          <Stack className="section-kws">
            <div className="portfolio-admin">
              <Typography
                variant="h3"
                sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
              >
                Provide details for Portfolio
              </Typography>

              <form>
                <p className="form-para">Card Title</p>
                <TextField id="outlined-basic" label="Card Title" variant="outlined" className="text-field-card" />
                <p className="form-para">Card Description</p>
                <TextField
                  id="outlined-basic"
                  label="Card Description"
                  variant="outlined"
                  className="text-field-card"
                />
                <p className="form-para">Card Link</p>
                <TextField id="outlined-basic" label="Card Link" variant="outlined" className="text-field-card" />
                <p className="form-para">Avatar Image Link </p>
                <TextField
                  id="outlined-basic"
                  label="Avatar Image Link"
                  variant="outlined"
                  className="text-field-card"
                />
                <p className="form-para">Card Background Image Link </p>
                <TextField
                  id="outlined-basic"
                  label="Card Background Image Link "
                  variant="outlined"
                  className="text-field-card"
                />

                <p className="form-para">
                  <Button variant="contained">Submit</Button>
                </p>
              </form>

              <Typography
                variant="h3"
                sx={{ marginTop: '15px', marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
              >
                Table for updating and deleting portfolio
              </Typography>

              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {portdeatils &&
                        portdeatils.map((res, index) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell align="center">{portdeatils.indexOf(res) + 1}.</TableCell>
                              <TableCell align="center">{res.portfoliotitle}</TableCell>
                              <TableCell align="center">{res.portfoliotitle}</TableCell>
                              <TableCell align="center">
                                {' '}
                                <Button href={`/update/${res._id}`} variant="contained">
                                  Update
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                {' '}
                                <Button variant="contained">Delete</Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </Stack>

          {/* ---------------------------contract-------------------------- */}

          {/* <Stack className="section-kws">
            <div className="portfolio-admin">
              <h2 className="portfolio-admin-heading">Contract Table</h2>

              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{ minWidth: '170px' }}>
                          S.No.
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: '170px' }}>
                      Project Name
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: '170px' }}>
                          Smart Contract Type
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: '170px' }}>
                          Chain
                        </TableCell>
                        <TableCell align="center" style={{ minWidth: '170px' }}>
                          Explorer Link
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </Stack> */}
        </div>
      </Grid>
    </>
  );
}

export default Adminpage;

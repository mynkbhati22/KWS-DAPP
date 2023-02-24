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
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import AdminNavbar from './AdminNavbar';

const columns = [
  { id: 'name', label: 'SNO.', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Service Image', minWidth: 170, align: 'center' },
  {
    id: 'population',
    label: 'Service Heading',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'population',
    label: 'Service Description',
    minWidth: 170,
    align: 'center',
  },


  {
    id: 'size',
    label: 'Update',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'density',
    label: 'Delete',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function Adminpage() {
  const [serviceimage, setserviceimages] = useState();
  const [serviceheading, setserviceheadings] = useState();
  const [servicedescriptions, setservicedescriptionss] = useState();
  const [portdeatils, setPortdeatils] = useState([]);

  useEffect(() => {
    axios.get(`${window.URL}/api/gettingservices`).then((res) => {
      setPortdeatils(res.data);
      console.log('#', res.data);
    });
  }, []);
  const navigate = useNavigate();
  const CreatePortfolio = async (e) => {
    try {
      e.preventDefault();

      const creatingPortfolio = await axios.post(`${window.URL}/api/addingservices`, {
        serviceimage: serviceimage,
        serviceheading: serviceheading,
        servicedescriptions: servicedescriptions,
  
      });
      {
        /*   .then((creatingPortfolio) => {
          navigate('/dapps-built-by-us');
        }); */
      }
      console.log('createdPortfolio', creatingPortfolio);
    } catch (error) {
      console.log(error);
    }
  };

  const aboutsecondsection = async (id) => {
    try {
      await axios.delete(`${window.URL}/api/deletingservices/${id}`).then((res) => {
        console.log(res);
      });

      window.location.reload('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid className="container-portfolio">
        <div className="admin-page">
          <Stack className="section-kws">
          <div className=''><AdminNavbar /></div>
            <div className="portfolio-admin">
              <Typography
                variant="h3"
                sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
              >
                Provide details for Partner
              </Typography>

              <form onSubmit={CreatePortfolio}>
                <p className="form-para">Service Image</p>
                <TextField
                  id="outlined-basic"
                  label="Service Image"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={serviceimage}
                  onChange={(e) => setserviceimages(e.target.value)}
                />

                <p className="form-para">Service Heading</p>
                <TextField
                  id="outlined-basic"
                  label="Service Heading"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={serviceheading}
                  onChange={(e) => setserviceheadings(e.target.value)}
                />

                <p className="form-para">Service Description</p>
                <TextField
                  id="outlined-basic"
                  label="Service Description"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={servicedescriptions}
                  onChange={(e) => setservicedescriptionss(e.target.value)}
                />
             

                <p className="form-para">
                  <Button variant="contained" type="submit">
                    Create
                  </Button>
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
                              <TableCell align="center"> {res.serviceimage} </TableCell>
                              <TableCell align="center">{res.serviceheading} </TableCell>
                              <TableCell align="center">{res.servicedescriptions} </TableCell>
                           
                              <TableCell align="center">
                                <Button href={`/services-update/${res._id}`} variant="contained">
                                  Update
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                <Button variant="contained" onClick={() => aboutsecondsection(res._id)}>
                                  Delete
                                </Button>
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

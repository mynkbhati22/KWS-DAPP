import { Button, Stack, TextField, Typography } from '@mui/material';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import TextArea from 'antd/lib/input/TextArea';

export default function Portfolioupdate() {
  const [serviceimage, setserviceimages] = useState();
  const [serviceheading, setserviceheadings] = useState();
  const [servicedescriptions, setservicedescriptionss] = useState();
  const { id } = useParams();
  console.log('portfolioid', id);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.URL}/api/updatingservices`, {
        id: id,
        serviceimage: serviceimage,
        serviceheading: serviceheading,
        servicedescriptions: servicedescriptions,
      })
      .then((res) => {
        console.log('updated', res);
        toast.success('Updated Successfully!');
        // navigate('/portfolio');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="admin-page">
        <Stack className="section-kws">
          <div className="portfolio-admin">
            <Typography
              variant="h3"
              sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
            >
              Provide details to Update Services
            </Typography>

            <form onSubmit={handleUpdate}>
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
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

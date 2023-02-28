import { Button, Stack, TextField, Typography } from '@mui/material';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Portfolioupdate() {
  const [projectname, setprojectnames] = useState();
  const [smartcontracttype, setsmartcontracttypes] = useState();
  const [chainnetwork, setchainnetworks] = useState();
  const [explorerlink, setexplorerlinks] = useState();
  const [feature, setfeatures] = useState();
  const { id } = useParams();
  console.log('portfolioid', id);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.URL}/api/updatingcontracts`, {
        id: id,
        projectname: projectname,
        smartcontracttype: smartcontracttype,
        chainnetwork: chainnetwork,
        explorerlink: explorerlink,
        feature:feature,
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
              Provide details to Update Contract
            </Typography>

            <form onSubmit={handleUpdate}>
              <p className="form-para">Project Name</p>
              <TextField
              id="outlined-basic"
              label="Project Name"
              variant="outlined"
              className="text-field-card"
              required
              value={projectname}
              onChange={(e) => setprojectnames(e.target.value)}
            />
            <p className="form-para">Feature</p>
            <TextField
            id="outlined-basic"
            label="Feature"
            variant="outlined"
            className="text-field-card"
            required
            value={feature}
            onChange={(e) => setfeatures(e.target.value)}
          />
              <p className="form-para">Smart Contract Type</p>
              <TextField
                id="outlined-basic"
                label="Smart Contract Type"
                variant="outlined"
                className="text-field-card"
                required
                value={smartcontracttype}
                onChange={(e) => setsmartcontracttypes(e.target.value)}
              />
              <p className="form-para">Chain Network</p>
              <TextField
                id="outlined-basic"
                label="Chain Network"
                variant="outlined"
                className="text-field-card"
                required
                value={chainnetwork}
                onChange={(e) => setchainnetworks(e.target.value)}
              />
              <p className="form-para">Explorer Link</p>
              <TextField
                id="outlined-basic"
                label="Explorer Link"
                variant="outlined"
                className="text-field-card"
                required
                value={explorerlink}
                onChange={(e) => setexplorerlinks(e.target.value)}
              />
            
              <p className="form-para">
                <Button variant="contained" type="submit">
                  Update
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

import { Button, Stack, TextField, Typography } from '@mui/material';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Portfolioupdate() {
  const [description, setPortDescription] = useState();
  const [catogery, setCatogery] = useState();
  const [delivered, setDelivered] = useState();
  const [requirements, setRequirements] = useState();
  const [solutionProvided, setSolutionProvided] = useState();
  const [teamInvolved, setTeamInvolved] = useState();

  const { id } = useParams();
  console.log('portfolioid', id);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.URL}/api/updatingportfolios`, {
        id: id,
        portfoliodescription: description,
        portfoliocatogery: catogery,
        portfoliodeveleron: delivered,
        portfoliorequirements: requirements,
        portfoliosolutionprovider: solutionProvided,
        portfoliteaminvolved: teamInvolved,
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
              Provide details to Update Portfolio
            </Typography>

            <form onSubmit={handleUpdate}>
              {/* <p className="form-para">Card Title</p>
              <TextField id="outlined-basic" label="Card Title" variant="outlined" className="text-field-card" /> */}
              <p className="form-para">Card Description</p>
              <FloatingLabel controlId="floatingTextarea2" label="Description" className="mt-4">
                <Form.Control
                  as="textarea"
                  placeholder="Enter description here"
                  style={{ height: '100px' }}
                  required
                  value={description}
                  onChange={(e) => setPortDescription(e.target.value)}
                />
              </FloatingLabel>
              <p className="form-para">Catogery</p>
              <TextField
                id="outlined-basic"
                label="catogery"
                variant="outlined"
                className="text-field-card"
                required
                value={catogery}
                onChange={(e) => setCatogery(e.target.value)}
              />
              <p className="form-para">Delivered on</p>
              <TextField
                id="outlined-basic"
                label="delivered on"
                variant="outlined"
                className="text-field-card"
                required
                value={delivered}
                onChange={(e) => setDelivered(e.target.value)}
              />
              <p className="form-para">Requirements</p>
              <TextField
                id="outlined-basic"
                label="Requirements"
                variant="outlined"
                className="text-field-card"
                required
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
              <p className="form-para">Soluton Provided</p>
              <FloatingLabel controlId="floatingTextarea2" label="Soultion provided" className="mt-4">
                <Form.Control
                  as="textarea"
                  placeholder="Enter Soultion"
                  style={{ height: '100px' }}
                  required
                  value={solutionProvided}
                  onChange={(e) => setSolutionProvided(e.target.value)}
                />
              </FloatingLabel>
              <p className="form-para">Team Involved</p>
              <TextField
                id="outlined-basic"
                label="Team Involved"
                variant="outlined"
                className="text-field-card"
                required
                value={teamInvolved}
                onChange={(e) => setTeamInvolved(e.target.value)}
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

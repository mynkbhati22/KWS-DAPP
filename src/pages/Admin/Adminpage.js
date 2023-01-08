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

function Adminpage() {
  const [portdeatils, setPortdeatils] = useState([]);
  const [portTitle, setPortTitle] = useState();
  const [portCatogery, setPortCatogery] = useState();
  const [slug, setSlug] = useState();
  const [portDescription, setPortDescription] = useState();
  const [websiteLink, setWebsiteLink] = useState();
  const [portImage, setPortImage] = useState();
  const [portBackgroundImage, setPortBackgroundImage] = useState();
  const [deliveredOn, setDeliveredOn] = useState();
  const [requirements, setRequirements] = useState();
  const [solutionProvided, setSolutionProvided] = useState();
  const [teamInvolved, setTeamInvolved] = useState();

  useEffect(() => {
    axios.get(`${window.URL}/api/gettingportfolios`).then((res) => {
      setPortdeatils(res.data);
    });
  }, []);
  const navigate = useNavigate();
  const CreatePortfolio = async (e) => {
    try {
      e.preventDefault();

      const creatingPortfolio = await axios
        .post(`${window.URL}/api/addingportfolios`, {
          portfoliotitle: portTitle,
          portfoliocatogery: portCatogery,
          generateslug: slug,
          portfoliodescription: portDescription,
          portfoliolink: websiteLink,
          portfolioimage: portImage,
          portbackgroundimage: portBackgroundImage,
          portfoliodeveleron: deliveredOn,
          portfoliorequirements: requirements,
          portfoliosolutionprovider: solutionProvided,
          portfoliteaminvolved: teamInvolved,
        })
        .then((creatingPortfolio) => {
          navigate('/portfolio');
        });
      console.log('createdPortfolio', creatingPortfolio);
    } catch (error) {
      console.log(error);
    }
  };

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

              <form onSubmit={CreatePortfolio}>
                <p className="form-para">Card Title</p>
                <TextField
                  id="outlined-basic"
                  label="Card Title"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={portTitle}
                  onChange={(e) => setPortTitle(e.target.value)}
                />

                <p className="form-para">Generate Slug</p>
                <TextField
                  id="outlined-basic"
                  label="Slug"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />

                <p className="form-para">Catogery</p>
                <TextField
                  id="outlined-basic"
                  label="Catogery"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={portCatogery}
                  onChange={(e) => setPortCatogery(e.target.value)}
                />
                <p className="form-para">Card Description</p>
                <FloatingLabel controlId="floatingTextarea2" label="Description" className="mt-4">
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Description"
                    style={{ height: '100px' }}
                    required
                    value={portDescription}
                    onChange={(e) => setPortDescription(e.target.value)}
                  />
                </FloatingLabel>

                <p className="form-para">Card Website Link</p>
                <TextField
                  id="outlined-basic"
                  label="Website Link"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                />

                <p className="form-para">Card Image Link </p>
                <TextField
                  id="outlined-basic"
                  label="Card Image Link "
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={portImage}
                  onChange={(e) => setPortImage(e.target.value)}
                />
                <p className="form-para">Card Background Image Link </p>
                <TextField
                  id="outlined-basic"
                  label="Card Background Image Link "
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={portBackgroundImage}
                  onChange={(e) => setPortBackgroundImage(e.target.value)}
                />
                <p className="form-para">Delivered on</p>
                <TextField
                  id="outlined-basic"
                  label="delivered on"
                  variant="outlined"
                  className="text-field-card"
                  required
                  value={deliveredOn}
                  onChange={(e) => setDeliveredOn(e.target.value)}
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

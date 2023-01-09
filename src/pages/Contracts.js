import React, { useState, useEffect } from 'react';

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
} from '@mui/material';
import axios from 'axios';
import Client from '../Client';
import Page from '../components/Page';
import './Contracts.css';

export default function DenseTable() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${window.URL}/api/gettingcontracts`).then((res) => {
        // console.log('gettingcontracts', res.data);
        setContracts(res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);

  return (
    <Page title="KWS || Contracts">
      <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
        {/* <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: '20px',
            marginTop: '50px',
            fontWeight: '900',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            color: '#27ADE3',
          }}
        >
          Contracts by KWS
        </Typography> */}
        <Typography variant="h3" sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          Contract By Us
        </Typography>

        <div className="row mt-5">
          <div className="col-xl-1 col-lg-3 col-md-6 col-sm-12">
            <div className="contractheading">
              <h3 className="projectname">SNO.</h3>

              {contracts &&
                contracts.map((res, index) => {
                  return (
                    <>
                      <p className="text-left" key={index}>
                        {contracts.indexOf(res) + 1}.
                      </p>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contractheading">
              <h3 className="projectname">Project Name</h3>

              {contracts &&
                contracts.map((res, index) => {
                  return (
                    <>
                      <p className="text-left name" key={index}>
                        {res.projectname}
                      </p>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contractheading">
              <h3 className="projectname">Smart Contract Type</h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
            <div className="contractheading">
              <h3 className="projectname">Chain</h3>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contractheading">
              <h3 className="projectname">Explorer Link</h3>
            </div>
          </div>
        </div>

        {/* <TableContainer component={Paper} sx={{ border: '1px solid', padding: '20px 0px' }} id="table-contract">
          <Table sx={{ minWidth: 65 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '22px' }}>SNo.</TableCell>
                <TableCell align="center" sx={{ fontSize: '22px' }}>
                  Project Name
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '22px' }}>
                  Smart Contract Type
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '22px' }}>
                  Chain
                </TableCell>
                <TableCell align="left" sx={{ fontSize: '22px' }}>
                  Explorer Link
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts && contracts.length > 0 ? (
                contracts.map((res, index) => (
                  <TableRow key={index}>
                    <TableCell>{contracts.indexOf(res) + 1}.</TableCell>
                    <TableCell align="center">{res.projectname}</TableCell>
                    <TableCell align="center">{res.smartcontracttype}</TableCell>
                    <TableCell align="center">{res.chainnetwork}</TableCell>
                    <TableCell>
                      <Link target="_blank" href={res.explorerlink} sx={{ display: 'block', margin: 'auto' }}>
                        {res.explorerlink}{' '}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <div className="nodata">
                  <p className="data">Loading...</p>
                </div>
              )}
              {contractTableInfo.map(renderContractsDetails)}
              {console.log(contractTableInfo.map(renderContractsDetails))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </Container>
    </Page>
  );
}

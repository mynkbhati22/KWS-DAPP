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

const URL = 'https://7903-2402-4cc0-2502-39e-5d4a-f759-71b6-9a79.in.ngrok.io';

export default function DenseTable() {
  const [contracts, setContracts] = useState();

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${URL}/api/gettingcontracts`).then((res) => {
        console.log('gettingcontracts', res.data);
        setContracts(res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);
  // useEffect(() => {
  //   Client.fetch(
  //     `*[_type=="contracts"] {
  //       sno,
  //       projectname,
  //       smartcontracttype,
  //       chain,
  //       explorerlink,
  //     }`
  //   ).then((data) => setContracts(data));
  // }, []);

  // const contractTableInfo = [
  //   {
  //     Sno: '1',
  //     ProjectName: 'Contract 1',
  //     SmartContractType: 'SCT',
  //     Chain: '1',
  //     ExplorerLink: '#',
  //   },
  //   {
  //     Sno: '2',
  //     ProjectName: 'Contract 2',
  //     SmartContractType: 'SCT',
  //     Chain: '2',
  //     ExplorerLink: '#',
  //   },
  //   {
  //     Sno: '3',
  //     ProjectName: 'Contract 3',
  //     SmartContractType: 'SCT',
  //     Chain: '3',
  //     ExplorerLink: '#',
  //   },
  //
  //     Sno: '4',
  //     ProjectName: 'Contract 4',
  //     SmartContractType: 'SCT',
  //     Chain: '4',
  //     ExplorerLink: '#',
  //   },
  //   {
  //     Sno: '5',
  //     ProjectName: 'Contract 5',
  //     SmartContractType: 'SCT',
  //     Chain: '5',
  //     ExplorerLink: '#',
  //   },
  // ];

  // const renderContractsDetails = (contractTableInfo, index) => {
  //   return (
  //     <TableRow key={index}>
  //       <TableCell>{contractTableInfo.Sno}</TableCell>
  //       <TableCell align="center">{contractTableInfo.ProjectName}</TableCell>
  //       <TableCell align="center">{contractTableInfo.SmartContractType}</TableCell>
  //       <TableCell align="center">{contractTableInfo.Chain}</TableCell>
  //       <TableCell align="center">{contractTableInfo.ExplorerLink}</TableCell>
  //     </TableRow>
  //   );
  // };

  return (
    <Page title="KWS: Contracts">
      <Container maxWidth="xl">
        <Typography
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
        </Typography>
        <TableContainer component={Paper} sx={{ border: '1px solid', padding: '20px 0px' }} id="table-contract">
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
              {contracts &&
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
                ))}
              {/* {contractTableInfo.map(renderContractsDetails)}
              {console.log(contractTableInfo.map(renderContractsDetails))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Page>
  );
}

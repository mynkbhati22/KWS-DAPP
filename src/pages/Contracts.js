import * as React from 'react';

import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import Page from '../components/Page';

export default function DenseTable() {
  const contractTableInfo = [
    {
      Sno: '1',
      ProjectName: 'Contract 1',
      SmartContractType: 'SCT',
      Chain: '1',
      ExplorerLink: '#',
    },
    {
      Sno: '2',
      ProjectName: 'Contract 2',
      SmartContractType: 'SCT',
      Chain: '2',
      ExplorerLink: '#',
    },
    {
      Sno: '3',
      ProjectName: 'Contract 3',
      SmartContractType: 'SCT',
      Chain: '3',
      ExplorerLink: '#',
    },
    {
      Sno: '4',
      ProjectName: 'Contract 4',
      SmartContractType: 'SCT',
      Chain: '4',
      ExplorerLink: '#',
    },
    {
      Sno: '5',
      ProjectName: 'Contract 5',
      SmartContractType: 'SCT',
      Chain: '5',
      ExplorerLink: '#',
    },
  ];

  const renderContractsDetails = (contractTableInfo, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{contractTableInfo.Sno}</TableCell>
        <TableCell align="center">{contractTableInfo.ProjectName}</TableCell>
        <TableCell align="center">{contractTableInfo.SmartContractType}</TableCell>
        <TableCell align="center">{contractTableInfo.Chain}</TableCell>
        <TableCell align="center">{contractTableInfo.ExplorerLink}</TableCell>
      </TableRow>
    );
  };

  return (
    <Page title='KWS: Contracts'>
      <Container maxWidth="xl">
      <Typography variant='h3' align='center' sx={{marginBottom:"20px"}}>Contracts By Us</Typography>
        <TableContainer component={Paper} sx={{border:"1px solid"}}>
          <Table sx={{ minWidth: 65 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize:"22px"}}>Sno</TableCell>
                <TableCell align="center" sx={{fontSize:"22px"}}>Project Name</TableCell>
                <TableCell align="center" sx={{fontSize:"22px"}}>Smart Contract Type</TableCell>
                <TableCell align="center" sx={{fontSize:"22px"}}>Chain</TableCell>
                <TableCell align="center" sx={{fontSize:"22px"}}>Explorer Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contractTableInfo.map(renderContractsDetails)}
              {console.log(contractTableInfo.map(renderContractsDetails))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Page>
  );
}

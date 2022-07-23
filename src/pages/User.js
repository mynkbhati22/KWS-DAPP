import { filter } from 'lodash';
import { useState } from 'react';

// material
import {
  Container,
  Typography,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Checkbox,
  Box,
  FormControlLabel,
  Grid,
  FormHelperText,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import useStyles from '../components/style';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

// ARRAY(SELECT TOKENS)
const tokenValues = [
  {
    value: 'Basic Token',
    label: 'Basic Token',
  },
  {
    value: 'Baby Token',
    label: 'Baby Token',
  },
  {
    value: 'Reflection Token',
    label: 'Reflection Token',
  },
  {
    value: 'Apy Token',
    label: 'Apy Token',
  },
];
const ContentStyle = styled('div')(({ theme }) => ({
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px 20px',
  border: '1px solid',
  borderRadius: '12px',
}));

// CHECKBOX
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function User() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  // TOKENS
  const [tokens, setTokens] = useState('Basic Token');
  // ROUTERS
  const [age, setAge] = useState('Pancakeswap');
  // CLASSES
  const classes = useStyles();

  const handleChange = (e) => {
    setTokens(e.target.value);
    setAge(e.target.value);
  };
  // CHECKBOX
  const [checked, setChecked] = useState([true, false]);

  const handleChange2 = (e) => {
    setChecked([checked[0], e.target.checked]);
  };

  const handleChange3 = (e) => {
    setChecked([e.target.checked, checked[1]]);
  };

  return (
    <Page title="User">
      <Container maxWidth="xl">
      <Typography variant='h2' sx={{textAlign:"center", marginBottom:"10px"}}>
        Create Token
      </Typography>
        <ContentStyle>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Token"
              value={tokens}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {tokenValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-search" label="Name" type="text" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-search" label="Symbol" type="text" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="outlined-search"
              label="Decimal"
              defaultValue="18"
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="filled-number" label="Total Supply" type="number" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Router</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Pancakeswap">Pancakeswap</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography>Wallet to Wallet transfer without fee</Typography>
            <Box>
              <FormControlLabel
                label="Yes"
                control={<Checkbox checked={checked[1]} onChange={handleChange2} className={classes.checkbox} />}
              />
              <FormControlLabel
                label="No"
                control={<Checkbox checked={checked[0]} onChange={handleChange3} className={classes.checkbox} />}
              />
            </Box>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography>Max Transaction Limit Available</Typography>
            <Box>
              <FormControlLabel
                label="Yes"
                control={<Checkbox checked={checked[1]} onChange={handleChange2} className={classes.checkbox} />}
              />
              <FormControlLabel
                label="No"
                control={<Checkbox checked={checked[0]} onChange={handleChange3} className={classes.checkbox} />}
              />
            </Box>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography>Max Wallet Limit Available</Typography>
            <Box>
              <FormControlLabel
                label="Yes"
                control={<Checkbox checked={checked[1]} onChange={handleChange2} className={classes.checkbox} />}
              />
              <FormControlLabel
                label="No"
                control={<Checkbox checked={checked[0]} onChange={handleChange3} className={classes.checkbox} />}
              />
            </Box>
          </FormControl>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl>
                <TextField id="filled-number" label="Total Buy Fees" type="number" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl>
                <TextField id="filled-number" label="Total Sell Fees (<=25)" type="number" />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h4" fontWeight="900" fontFamily="Poppins, sans-serif">
            Fees Share
          </Typography>
          <FormHelperText sx={{ color: 'red', fontSize: '15px' }}>Shares Should be up to 100 </FormHelperText>
          <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl>
                <TextField id="filled-number" label="Liquidity Share" type="number" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl>
                <TextField id="filled-number" label="Marketing Share" type="number" />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl sx={{ marginTop: '10px' }}>
            <TextField id="outlined-search" label="Marketing Wallet" type="text" />
          </FormControl>
          <Button sx={{ border: '1px solid', display: 'block', margin: '20px auto', width: '100%' }}>
            Create Token
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}

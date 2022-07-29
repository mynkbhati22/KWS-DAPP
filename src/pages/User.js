import { filter } from 'lodash';
import React, { useEffect, useState } from 'react';

// material
import {
  Container,
  Paper,
  FormControl,
  TextField,
  MenuItem,
  Button,
  Stack,
  Modal,
  Fade,
  Box,
  Backdrop,
  Typography,
  ImageList,
  ImageListItem,
  InputLabel,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import { getAccount } from '../components/Web3/Balance';
import Page from '../components/Page';
import meta from '../components/images/meta.png';
import connect from '../components/images/connect.svg';
import useStyles from '../components/style';
import 'react-toastify/dist/ReactToastify.css';
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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  background: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Modal Styling

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #22ABE3',
  boxShadow: 24,
  p: 4,
};

// for web3
const web3 = new Web3(window.ethereum);
console.log(web3);

export default function User() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [active, setActive] = useState(false);
  const [refelect, setRefelect] = useState(false);
  const [account, setAccount] = useState('');
  const [babyToken, setBabyToken] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tokens, setTokens] = useState('Basic Token');
  const [selectedValue, setSelectedValue] = useState('no');
  const [selectedValue2, setSelectedValue2] = useState('no');
  const [selectedValue3, setSelectedValue3] = useState('no');

  // CLASSES
  const classes = useStyles();

  // ROUTERS

  const handleChange = (e) => {
    setTokens(e.target.value);
  };
  const handleValue = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleSelectedValue = (e) => {
    setSelectedValue2(e.target.value);
  };
  const handleSelectedValue2 = (e) => {
    setSelectedValue3(e.target.value);
  };

  // connect metamask
  const connectMetamask = async () => {
    if (window.ethereum) {
      const add = await window.ethereum.enable();
      setAccount(add[0]);
      window.location.reload();
      console.log(window.ethereum);
    }
  };

  const ShowInputs = () => {
    setShow(!show);
    setShow2(!show2);
  };

  const ShowActive = () => {
    setActive(!active);
  };

  const ShowNextTokenName = () => {
    setBabyToken(!babyToken);
    setRefelect(!refelect);
    console.log('next token name is showing');
  };

  useEffect(() => {
    async function check() {
      const account = await getAccount();
      web3.eth.getBalance(account);
      setAccount(account);
    }
    check();
  }, []);

  // TOAST WARNING
  const notify = () => toast('Connect Your Wallet First');

  return (
    <Page title="KWS:Create Token">
      <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
        <Stack direction="row" justifyContent="space-around" mb={2}>
          <Item
            sx={{
              marginTop: '7px',
              fontWeight: '900',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '25px',
              color: '#27ADE3',
            }}
          >
            Create Token
          </Item>
          <Button onClick={handleOpen}>
            <Item
              sx={{
                marginTop: '5px',
                fontWeight: '900',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
                color: '#F79A3F',
              }}
            >
              {account ? account.slice(0, 4) + account.slice(38) : 'Connect Wallet'}
            </Item>
          </Button>
        </Stack>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h2"
                sx={{ textAlign: 'center', marginTop: '-20px', color: '#22ABE3' }}
              >
                Connect Your Wallet
              </Typography>

              <ImageList
                id="transition-modal-description"
                sx={{ margin: '20px auto', width: '60%', cursor: 'pointer' }}
              >
                <ImageListItem onClick={connectMetamask}>
                  <img src={meta} alt="" />
                </ImageListItem>
                <ImageListItem sx={{ paddingLeft: '20px' }}>
                  <img src={connect} alt="" />
                </ImageListItem>
              </ImageList>
            </Box>
          </Fade>
        </Modal>
        <ContentStyle>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Token"
              value={tokens}
              onChange={handleChange}
              onClick={() => ShowNextTokenName()}
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
          {babyToken ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                id="outlined-read-only-input"
                label="Decimal"
                defaultValue="18"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>
          ) : (
            ''
          )}

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-search" label="Total Supply" type="number" />
          </FormControl>
          {babyToken ? (
            <>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                  id="outlined-search"
                  label="Reward Token Address (Reward Token cannot be BNB or WBNB)"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField id="outlined-search" label="Minimum Token Balance Needed for Rewards" type="number" />
              </FormControl>
            </>
          ) : (
            ''
          )}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="outlined-read-only-input"
              label="Router"
              defaultValue="Pancakeswap"
              InputProps={{
                readOnly: true,
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Wallet to Wallet transfer without fee</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedValue}
              onChange={handleValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Max Transaction Limit Available</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedValue2}
              onChange={handleSelectedValue}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                onClick={() => {
                  ShowInputs();
                  setShow(true);
                  setShow2(true);
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                onClick={() => {
                  setShow(false);
                  setShow2(false);
                }}
              />
            </RadioGroup>
          </FormControl>
          {show && !babyToken ? (
            <>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField id="outlined-search" label="Max Transaction Limit Percentage For Buy (>=1)" type="number" />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField id="outlined-search" label="Max Transaction Limit Percentage For Sell (>=1)" type="number" />
              </FormControl>
            </>
          ) : (
            ''
          )}
          {show2 && babyToken ? (
            <>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                  id="outlined-search"
                  label="Max Transaction Limit Percentage For Buy (>=0.1)"
                  type="number"
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                  id="outlined-search"
                  label="Max Transaction Limit Percentage For Sell (>=0.1)"
                  type="number"
                />
              </FormControl>
            </>
          ) : (
            ''
          )}

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Max Wallet Limit Available</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedValue3}
              onChange={handleSelectedValue2}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                onClick={() => {
                  ShowActive();
                  setActive(true);
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                onClick={() => {
                  setActive(false);
                }}
              />
            </RadioGroup>
          </FormControl>
          {active ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField id="outlined-search" label="Max Wallet Limit Percentage (>=1)" type="number" />
            </FormControl>
          ) : (
            ''
          )}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-basic" label="Total Buy Fees (<=25)" variant="outlined" type="number" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-basic" label="Total Sell Fees (<=25)" variant="outlined" type="number" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120, fontSize: '25px', color: '#22ABE3', fontWeight: '900' }}>
            Fees Shares
          </FormControl>
          <FormHelperText sx={{ marginTop: '-12px', marginLeft: '9px', color: '#F98434' }}>
            Total Fee Shares Should be Equal to 100
          </FormHelperText>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-basic" label="Liquidity Share" variant="outlined" type="number" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-basic" label="Marketing Share" variant="outlined" type="number" />
          </FormControl>
          {babyToken ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField id="outlined-basic" label="Reward Share" variant="outlined" type="number" />
            </FormControl>
          ) : (
            ''
          )}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField id="outlined-search" label="Marketing Wallet" type="text" />
          </FormControl>
          <Button sx={{ border: '1px solid', display: 'block', margin: '20px auto', width: '100%' }} onClick={notify}>
            Create Token
          </Button>
          <ToastContainer />
        </ContentStyle>
      </Container>
    </Page>
  );
}

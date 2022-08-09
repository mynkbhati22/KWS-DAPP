import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/material';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, background: '#22ABE3 ', color:"#fff" }}
          >
            Create your token with our dapp and enjoy advantages! ★ Instant creation ★ Low Cost ★ FREE Audit Report ★
            User Manual for owners ★ Free presale creation on Pinksale Launchpad
          </Alert>
        </Collapse>
        {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
      </Box>
    </Container>
  );
}

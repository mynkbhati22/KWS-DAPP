import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Portfolioupdate() {
  return (
    <div>
      <div className="container">
        <Typography variant="h3" sx={{ marginTop: '100px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          Provide details for Updating Portfolio
        </Typography>
        <form>
          <p className="form-para">Card Title</p>
          <TextField id="outlined-basic" label="Card Title" variant="outlined" className="text-field-card" required />
          <p className="form-para">Card Description</p>
          <TextField
            id="outlined-basic"
            label="Card Description"
            variant="outlined"
            className="text-field-card"
            required
          />
          <p className="form-para">Card Link</p>
          <TextField id="outlined-basic" label="Card Link" variant="outlined" className="text-field-card" required />
          <p className="form-para">Avatar Image Link </p>
          <TextField
            id="outlined-basic"
            label="Avatar Image Link"
            variant="outlined"
            className="text-field-card"
            required
          />
          <p className="form-para">Card Background Image Link </p>
          <TextField
            id="outlined-basic"
            label="Card Background Image Link "
            variant="outlined"
            className="text-field-card"
            required
          />

          <p className="form-para">
            <Button variant="contained" type="submit">
              Update
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
}

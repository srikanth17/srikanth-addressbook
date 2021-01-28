import React, { useState } from 'react';
import {
  Button,
  Grid,
  Link,
  makeStyles,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import Header from './Header';
import { fetchAddress, regex } from '../utils/utils';
import { AddressesResponse } from '../types/types';
import Form from './Form';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import AddressList from './AddressList';

const useStyles = makeStyles({
  container: {
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  h4: {
    marginBottom: 30,
  },
  button: {
    padding: 14,
    borderRadius: 25,
  },
  link: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  select: {
    marginTop: 30,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  h6: {
    margin: '30px 0',
  },
});

const App = () => {
  const addressBook = useSelector((state: RootState) => state.addresses);
  const classes = useStyles();
  const [manualEntry, setManualEntry] = useState(false);
  const [autoEntry, setAutoEntry] = useState(false);
  const [postcode, setPostcode] = useState('');
  const [addresses, setAddresses] = useState([] as string[]);
  const [selectedAddress, setSelectedAddress] = useState(
    'Please select your address'
  );
  const [postcodeError, setPostcodeError] = useState(false);

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.currentTarget.value);
  };

  const handlePostcode = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (regex.test(postcode)) {
      setPostcodeError(false);
      fetchAddress(postcode).then(response => {
        if (response.ok) {
          response.json().then((addresses: AddressesResponse) => {
            console.log(addresses.addresses);
            setAddresses(addresses.addresses);
          });
        }
      });
    } else setPostcodeError(true);
  };

  const handleAddressChange = (e: any) => {
    setSelectedAddress(e.currentTarget.value);
    setManualEntry(false);
    setAutoEntry(true);
  };

  const onSubmit = () => {
    setManualEntry(false);
    setAutoEntry(false);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
        <Grid
          container
          justify="center"
          className={classes.container}
          spacing={1}
        >
          <Typography variant="h4" className={classes.h4}>
            Add address
          </Typography>
          {postcodeError && (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="p" className={classes.error}>
                  Invalid Postcode or postcode format is not correct
                </Typography>
              </Grid>
            </Grid>
          )}
          <Grid container spacing={3}>
            <Grid item lg={4} xs={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={postcode}
                onChange={handlePostcodeChange}
                required
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handlePostcode}
              >
                Find Address
              </Button>
            </Grid>
          </Grid>
          {addresses.length > 0 && (
            <Grid item xs={12}>
              <Select
                id="select-address"
                value={selectedAddress}
                onChange={handleAddressChange}
                className={classes.select}
              >
                <option value="Please select your address">
                  Please select your address
                </option>
                {addresses.map(address => (
                  <option key={address} value={address}>
                    {address}
                  </option>
                ))}
              </Select>
            </Grid>
          )}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.link} component="p">
                <Link
                  onClick={() => {
                    setAutoEntry(false);
                    setManualEntry(true);
                  }}
                >
                  Enter address manually
                </Link>
              </Typography>
            </Grid>
          </Grid>
          {autoEntry && (
            <Form
              address={selectedAddress}
              postcode={postcode}
              onSubmit={onSubmit}
            />
          )}
          {manualEntry && <Form onSubmit={onSubmit} />}
          {addressBook.length > 0 && (
            <Grid container spacing={3}>
              <Typography variant="h6" className={classes.h6}>
                Saved Addresses
              </Typography>
              <Grid container spacing={3}>
                {addressBook.map(item => (
                  <Grid item xs={6}>
                    <AddressList key={item.postcode} address={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import { addAddress } from '../store/address';
import { fetchCountries } from '../utils/utils';

const useStyles = makeStyles({
  button: {
    padding: 14,
    borderRadius: 25,
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

interface FormProps {
  address?: string;
  postcode?: string;
  onSubmit: () => void;
}

const Form = ({ address = '', postcode, onSubmit }: FormProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const addressInfo = address!.split(',');

  const [line1, setLine1] = useState(address ? addressInfo[0] : '');
  const [line2, setLine2] = useState(address ? addressInfo[1] : '');
  const [line3, setLine3] = useState(address ? addressInfo[2] : '');
  const [town, setTown] = useState(
    address ? addressInfo[addressInfo.length - 2] : ''
  );
  const [postCode, setPostCode] = useState(address ? postcode : '');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([] as any[]);

  const [errorLine1, setErrorLine1] = useState(false);
  const [errorPostcode, setErrorPostcode] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  useEffect(() => {
    fetchCountries().then(response => {
      if (response.ok) {
        response.json().then((countries: any) => {
          setCountries(countries);
        });
      }
    });
  }, []);

  const handleLine1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (line1 !== '') setErrorLine1(false);
    setLine1(e.currentTarget.value);
  };

  const handleLine2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLine2(e.currentTarget.value);
  };

  const handleLine3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLine3(e.currentTarget.value);
  };

  const handleTownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTown(e.currentTarget.value);
  };

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (postCode !== '') setErrorPostcode(false);
    setPostCode(e.currentTarget.value);
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.innerHTML);
  };

  const handleAddAddress = () => {
    if (line1 === '') {
      setErrorLine1(true);
    } else if (postCode === '') {
      setErrorPostcode(true);
    } else if (country === '') {
      setErrorCountry(true);
    } else {
      dispatch(
        addAddress({
          line1: line1,
          line2: line2,
          line3: line3,
          postcode: postCode,
          town: town,
          country: country,
        })
      );
      onSubmit();
    }
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="line1"
            name="line1"
            label="Address line 1"
            defaultValue={line1}
            variant="outlined"
            onChange={handleLine1Change}
            error={errorLine1}
            helperText={errorLine1 && 'This field is mandatory'}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="line2"
            name="line2"
            label="Address line 2"
            defaultValue={line2}
            variant="outlined"
            onChange={handleLine2Change}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="line3"
            name="line3"
            label="Address line 3"
            defaultValue={line3}
            variant="outlined"
            onChange={handleLine3Change}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="postcode"
            name="postcode"
            label="Postcode"
            defaultValue={postCode}
            variant="outlined"
            onChange={handlePostcodeChange}
            error={errorPostcode}
            helperText={errorPostcode && 'This field is mandatory'}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="town"
            name="town"
            label="Town"
            defaultValue={town}
            variant="outlined"
            onChange={handleTownChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="country-select-demo"
            options={countries}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            getOptionLabel={option => option.name}
            renderOption={option => (
              <React.Fragment>{option.name}</React.Fragment>
            )}
            onChange={handleCountryChange}
            renderInput={params => (
              <TextField
                {...params}
                label="Choose a country"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
                error={errorCountry}
                helperText={errorCountry && 'This field is mandatory'}
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAddAddress}
          >
            Add Address
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;

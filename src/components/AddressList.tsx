import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Address } from '../types/types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

interface AddressListProps {
  address: Address;
}

const AddressList = ({ address }: AddressListProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography component="p">{address.line1}</Typography>
        {address.line2 && (
          <Typography component="p">{address.line2}</Typography>
        )}
        {address.line3 && (
          <Typography component="p">{address.line3}</Typography>
        )}
        <Typography component="p">{address.town}</Typography>
        <Typography component="p">{address.postcode}</Typography>
        <Typography component="p">{address.country}</Typography>
      </CardContent>
    </Card>
  );
};

export default AddressList;

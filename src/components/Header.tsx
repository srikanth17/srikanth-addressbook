import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    background: '#364051',
    padding: 32,
    marginBottom: 32,
  },
  title: {
    color: '#fff',
    margin: 0,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Typography variant="h3" component="h3" className={classes.title}>
        Address Book
      </Typography>
    </Grid>
  );
};
export default Header;

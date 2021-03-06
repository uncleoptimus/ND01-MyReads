// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// MaterialUI components
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

// component styles
const styleSheet = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  logo: {
    fontSize: '36px',
    margin: '0 1rem',
    verticalAlign: 'bottom'
  }
});

const LinkButton = withStyles(styleSheet)(({ classes, path, label }) =>
  <Link to={path}>
    <Button raised color="accent" className={classes.button}>
      {label}
    </Button>
  </Link>
);

const Navbar = ({ classes }) =>
  <AppBar color="default">
    <Toolbar>
      <Typography type="display1" color="inherit">
        <Icon className={classes.logo}>import_contacts</Icon>
        My Reads
      </Typography>
      <LinkButton path="/" label="Home" />
      <LinkButton path="search" label="Search" />
    </Toolbar>
  </AppBar>;

export default withStyles(styleSheet)(Navbar);

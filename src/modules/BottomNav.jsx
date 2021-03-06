// @flow

import React from 'react';

// MaterialUI components
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

// component styles
const styleSheet = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  a: {
    '& button': {
      color: 'black'
    }
  }
});

const BottomNav = () =>
  <BottomNavigation
    value={'Github'}
    style={{ width: '100%', textAlign: 'center' }}
  >
    <BottomNavigationButton
      icon={<Icon>cloud</Icon>}
      href="https://github.com/uncleoptimus/ND01-MyReads"
      label="Git It"
      showLabel
    />
  </BottomNavigation>;

export default withStyles(styleSheet)(BottomNav);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { theme } from 'lib/theme';
import { Grow } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    background: 'rgba(0, 0, 0, 0.2)',
  },
}));

interface Props {
  children: any;
  bordered?: boolean;
  placeholder?: boolean;
}

const SectionBackground: React.FC<Props> = ({
  children,
  bordered,
  placeholder,
}) => {
  const classes = useStyles();
  const paperComponent = (
    <Paper
      className={classes.container}
      style={
        bordered
          ? { border: `1px solid ${theme.palette.primary.dark}` }
          : { border: '0px' }
      }
    >
      {children}
    </Paper>
  );
  return !placeholder ? (
    <Grow in={true} timeout={200}>
      {paperComponent}
    </Grow>
  ) : (
    paperComponent
  );
};

export default SectionBackground;

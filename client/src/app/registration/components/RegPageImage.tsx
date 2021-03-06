import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import teamPhoto from 'shared/assets/images/badge.jpg';
import { CenteredGrid } from 'shared/layout/grids';
import { CircularImage } from 'components/images';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginBottom: theme.spacing(1),
  },
}));
const RegImage: React.FC = () => {
  const classes = useStyles();
  return (
    <CenteredGrid>
      <Grid item sm={4} className={classes.imageContainer}>
        <CircularImage image={teamPhoto} size='80px' />
      </Grid>
    </CenteredGrid>
  );
};

export default RegImage;

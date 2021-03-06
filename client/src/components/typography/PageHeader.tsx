import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
// Components
import { BackButton } from 'components/buttons';
import { CenteredGrid } from 'shared/layout/grids';
import CustomTypography from './CustomTypography';

export const useStyles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.secondary.main,
  },
}));

interface Props {
  title: string;
  backTo: string;
}

const PageHeader: React.FC<Props> = ({ title, backTo }) => {
  const classes = useStyles();
  return (
    <>
      <Divider className={classes.divider} />
      <CenteredGrid just='flex-start' dir='row'>
        <BackButton backTo={backTo} disabled={backTo === 'disabled'} />
        <CustomTypography bold main size='lg'>
          {title}
        </CustomTypography>
      </CenteredGrid>
      <Divider className={classes.divider} style={{ marginBottom: '10px' }} />
    </>
  );
};

export default PageHeader;

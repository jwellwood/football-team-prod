import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomExpansion } from 'components/lists';
import { CustomTypography } from 'components/typography';

interface Props {
  data: IVersusWrapper[];
}

interface IVersusWrapper {
  icon: string;
  secondaryList: IVersusGameDetails[];
  title: string;
  value: number;
}

interface IVersusGameDetails {
  conceded: number;
  date: string;
  name: string;
  scored: number;
}

const VersusWrapper: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, i: number) => (
        <CustomExpansion
          key={i}
          title={item.title}
          icon={item.icon}
          value={item.value}
        >
          <CenteredGrid>
            {item.secondaryList.map((match, i: number) => (
              <CenteredGrid key={i} dir='row' just='space-between'>
                <Grid item>
                  <CustomTypography bold main>
                    {match.name}
                  </CustomTypography>
                  <CustomTypography color='warning' size='sm' div>
                    {match.date}
                  </CustomTypography>
                </Grid>
                <CustomTypography bold>
                  {match.scored} - {match.conceded}
                </CustomTypography>
              </CenteredGrid>
            ))}
          </CenteredGrid>
        </CustomExpansion>
      ))}
    </>
  );
};

export default VersusWrapper;

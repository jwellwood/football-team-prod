import React, { ReactElement } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { theme } from 'lib/theme';
import { SectionBackground } from 'shared/layout/containers';
import { GridItem } from 'shared/layout/grids';
import { CustomTypography } from 'components/typography';

interface Props {
  percentage: number;
  total?: number;
  target?: number;
  type: string;
}

const TargetProgress: React.FC<Props> = ({
  percentage,
  total,
  target,
  type,
}) => {
  const totalText: ReactElement | null =
    total || target ? (
      <>
        <CustomTypography main>{total}</CustomTypography>
        <CustomTypography> / {target}</CustomTypography>
      </>
    ) : null;

  const typeText: ReactElement | null = type ? (
    <CustomTypography size='sm' div>
      {type}
    </CustomTypography>
  ) : null;

  return (
    <GridItem xs={4} sm={4} md={3} lg={2} xl={2}>
      <SectionBackground>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            rotation: 1,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            pathTransitionDuration: 10,
            pathColor: theme.palette.success.light,
            trailColor: theme.palette.warning.light,
          })}
        >
          <CustomTypography main bold>
            {percentage} <CustomTypography size='sm'>%</CustomTypography>
          </CustomTypography>
        </CircularProgressbarWithChildren>
        {totalText}
        {typeText}
      </SectionBackground>
    </GridItem>
  );
};

export default TargetProgress;

import React, { useMemo, ReactElement } from 'react';
import { getResultVersus } from '../functions';
import { IResult } from 'shared/types';
import { IResultVersusData, IVersusGame } from '../shared/types';
import VersusWrapper from 'shared/layout/wrappers/VersusWrapper';
import { Placeholder } from 'components/typography';

interface Props {
  results: IResult[];
}

interface IVersusStatsData {
  mostConc: number;
  fewestGoals: number;
  biggestLossDiff: number;
  mostConcededDetails: IVersusGame[];
  fewestGoalsDetails: IVersusGame[];
  biggestDefeatResults: IVersusGame[];
}

const ResultVersusNegative: React.FC<Props> = ({ results }) => {
  const stats: IVersusStatsData = useMemo(() => getResultVersus(results), [
    results,
  ]);

  const {
    mostConc,
    mostConcededDetails,
    fewestGoals,
    fewestGoalsDetails,
    biggestLossDiff,
    biggestDefeatResults,
  } = stats;
  const data: IResultVersusData[] = [
    {
      title: 'Most Conceded',
      icon: 'conceded',
      value: mostConc,
      secondaryList: mostConcededDetails,
    },
    {
      title: 'Fewest Scored',
      icon: 'conceded',
      value: fewestGoals,
      secondaryList: fewestGoalsDetails,
    },
    {
      title: 'Heaviest Defeat',
      icon: 'conceded',
      value: biggestLossDiff,
      secondaryList: biggestDefeatResults,
    },
  ];

  const dataToDisplay: ReactElement = results.length ? (
    <VersusWrapper data={data} />
  ) : (
    <Placeholder />
  );

  return dataToDisplay;
};

export default ResultVersusNegative;

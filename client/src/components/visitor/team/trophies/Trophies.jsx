import React from 'react';
// MUI
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomTable from 'components/ui/tables/CustomTable';
import CustomTableCell from 'components/ui/tables/CustomTableCell';
import Trophy from './Trophy';
import SectionContainer from 'containers/SectionContainer';
import ValueText from 'components/ui/text/ValueText';

const Trophies = ({ trophies }) => {
  const headCells = [
    { id: 'year', label: '' },
    { id: 'winner', label: 'Winner' },
    { id: 'runner-up', label: 'Runner-up' },
  ];
  const rows = trophies.map((trophy) => {
    const { _id, isWinner, year } = trophy;
    const iconModal = (
      <PresentationModal
        buttonElement={
          <CustomIcon
            icon={isWinner ? 'trophy' : 'medal'}
            color={isWinner ? 'warning' : 'secondary'}
            size='2x'
          />
        }
      >
        <Trophy trophy={trophy} />
      </PresentationModal>
    );

    const cellData = [
      <ValueText>{year}</ValueText>,
      trophy.isWinner ? iconModal : null,
      !trophy.isWinner ? iconModal : null,
    ];
    return (
      <TableRow key={_id}>
        {cellData.map((cell, i) => (
          <CustomTableCell key={i} noLines>
            {cell}
          </CustomTableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <SectionContainer title='Trophies'>
      <CustomTable headCells={headCells} rows={rows} />
    </SectionContainer>
  );
};

export default Trophies;

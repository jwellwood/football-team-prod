import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { parseDate } from 'components/utils';
// Routes
import { EDIT_USER } from 'router/route_names';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import SectionContainer from 'containers/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';

const AccountDetails = ({ user }) => {
  const { email, adminStatus, createdAt, updatedAt } = user;

  const details = [
    { text: 'Email', value: email },
    { text: 'Created', value: parseDate(createdAt) },
    { text: 'Last updated', value: parseDate(updatedAt) },
    { text: 'Status', value: adminStatus },
  ];
  return (
    <SectionContainer title='Account' link={EDIT_USER}>
      <ListWrapper>
        {details.map((item) => (
          <ListItemWrapper key={item.text}>
            <ListItemText
              primary={item.text}
              secondary={
                <CustomTypography main bold>
                  {item.value}
                </CustomTypography>
              }
            />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </SectionContainer>
  );
};

export default AccountDetails;

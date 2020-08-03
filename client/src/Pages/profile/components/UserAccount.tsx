import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { user_routes } from 'router';
import { parseDate } from 'shared/utils';
import { IUserData } from 'shared/types';
import SectionContainer from 'shared/layout/SectionContainer';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomTypography from 'components/ui/text/CustomTypography';

interface Props {
  user: IUserData;
}

interface IAccountDetail {
  text: string;
  value: string;
}

const UserAccount: React.FC<Props> = ({
  user: { email, adminStatus, createdAt, updatedAt },
}) => {
  const details: IAccountDetail[] = [
    { text: 'Email', value: email },
    { text: 'Created', value: parseDate(createdAt) },
    { text: 'Last updated', value: parseDate(updatedAt) },
    { text: 'Status', value: adminStatus },
  ];
  return (
    <SectionContainer title='Account' link={user_routes.EDIT_USER}>
      <ListWrapper>
        {details.map(({ text, value }) => (
          <ListItemWrapper key={text}>
            <ListItemText
              primary={text}
              secondary={
                <CustomTypography main bold>
                  {value}
                </CustomTypography>
              }
            />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </SectionContainer>
  );
};

export default UserAccount;
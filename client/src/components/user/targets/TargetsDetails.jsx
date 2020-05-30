import React from 'react';
// Routes
import { EDIT_TARGETS } from 'router/route_names';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import GridItem from 'components/ui/grids/GridItem';
import ProfileSection from '../ProfileSection';

const TargetDetails = ({ user }) => {
  const {
    appsTarget,
    goalsTarget,
    assistsTarget,
    targetsPerGame,
    canEdit,
  } = user;

  const data = [
    { text: 'Apps', value: appsTarget },
    {
      text: 'Goals',
      value: goalsTarget,
      secondary: appsTarget ? `${targetsPerGame.goals}  / game` : null,
    },
    {
      text: 'Assists',
      value: assistsTarget,
      secondary: appsTarget ? `${targetsPerGame.assists} / game` : null,
    },
  ];
  return (
    <GridItem>
      <ProfileSection
        title='Targets'
        link={!canEdit.targets ? 'locked' : EDIT_TARGETS}
      >
        <ListWrapper>
          <ProfileList details={data} />
        </ListWrapper>
      </ProfileSection>
    </GridItem>
  );
};

export default TargetDetails;

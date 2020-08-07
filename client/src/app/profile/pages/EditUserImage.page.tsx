import React from 'react';
import { user_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import EditUserImage from '../containers/EditUserImage.container';

const EditUserImagePage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Photo' backTo={user_routes.PROFILE} />
      <EditUserImage />
    </>
  );
};

export default EditUserImagePage;
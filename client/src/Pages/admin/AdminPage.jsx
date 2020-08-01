import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import Admin from 'components/admin/Admin';
import { visitor_routes } from 'router';

const AdminPage = () => {
  return (
    <div>
      <PageHeader title='Admin' backTo={visitor_routes.HOME} />
      <Admin />
    </div>
  );
};

export default AdminPage;

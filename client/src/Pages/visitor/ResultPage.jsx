import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import ResultLogic from 'components/visitor/result/ResultLogic';

const ResultPage = () => {
  return (
    <div>
      <PageHeader backTo={visitor_routes.RESULTS} />
      <ResultLogic />
    </div>
  );
};

export default ResultPage;

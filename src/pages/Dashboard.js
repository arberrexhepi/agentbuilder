import React from 'react';
import MetricsGraph from '../components/MetricsGraph';
import LogView from '../components/LogView.js';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Metrics Dashboard</h1>
      <MetricsGraph />
      <LogView />
    </div>
  );
}

export default Dashboard;
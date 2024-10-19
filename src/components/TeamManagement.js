import React, { useState } from 'react';

import '../styles/global.css'; // Include global styles for team configuration

import ShadcnButton from './ShadcnButton';

const TeamManagement = () => {
  const [team, setTeam] = useState([]);

  const addAgentProcess = () => {
    setTeam([...team, {
      name: "New Agent",
      type: "Configured"
    }]);
  };

  return (
    <div className="team-management">
      <h1>Team Management</h1>
      <ul>
        {team.map((agent, index) => (
          <li key={index}>
            <h2>{agent.name}</h2>
            <p>{agent.type}</p>
            <ShadcnButton children="Add Agent" onClick={addAgentProcess} />
        </li>
        ))
      } }
    </ul>
    <ShadcnButton children="Add Agent" onClick={addAgentProcess} />
    </div>
  );
};

export default TeamManagement;
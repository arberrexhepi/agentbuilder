import React, { useState, useEffect } from 'react';
import ShadcnButton from './ShadcnButton';

function TeamManagement() {
  const [teamMambers, setTeamMambers] = useState(() => []);

  const addToTeam = member => {
    setTeamMambers(prev => [...prev, member]);
  };

  return (
    <div className="team-management p-4">
      <h2 className="team-title">Manage Teams</h2>
      <div className="team-form">
        <form onSubmit={e => e.preventDefault()}>
          <label html>Add Team Member</label>
          <input type="text" name="name" placeholder="Enter member name" value="" />
          <ShadcnButton type="submit" onClick={addToTeam}>Add</ShadcnButton>
        </form>
      </div>
      <div className="team-list">
        { teamMambers.map((member, index) => (
          <p className="team-item" key="index">{member.name}</p>
        )) { !!teamMambers.length? "</div>" : "No team members available." } 
        }

    </div>

    </div>
  );
}

export default TeamManagement;

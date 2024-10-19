
import React, { useState } from 'react';

function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

  const addToTeam = () => {
    if (newMember) {
      setTeamMembers(prev => [...prev, { name: newMember }]);
      setNewMember(""); // Clear the input after adding the member
    }
  };

  const handleInputChange = (event) => {
    setNewMember(event.target.value); // Update the state on input change
  };

  return (
    <div className="team-management p-4">
      <h2 className="team-title">Manage Teams</h2>
      <div className="team-form">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="name">Add Team Member</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter member name" 
            value={newMember} 
            onChange={handleInputChange} 
          />
          <button type="button" onClick={addToTeam}>Add</button>
        </form>
      </div>
      <div className="team-list">
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <p className="team-item" key={index}>{member.name}</p>
          ))
        ) : (
          <p>No team members available.</p>
        )}
      </div>
    </div>
  );
}

export default TeamManagement;

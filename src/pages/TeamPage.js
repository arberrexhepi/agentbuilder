import React from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';

// TeamPage component will display team members
and use Table to display them
const TeamPage = () => {
  const teamMembers = [
    { name: "Member A", role: "Configurer "},
    { name: "Member B", role: "Team Leader" },
    { name: "Member C", role: "Developer" }
  ];

  return (
    <div className="team-page">
      <h1>Team Management</h1>
      <Table columns={[ "name", "role" ]} rows={teamMembers} />
      <Modal children="Click here to Add Member" onClose={() => alert('Modal closed')) } />
    </div>
  );
};

export default TeamPage;
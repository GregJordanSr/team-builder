import React, { useState } from 'react'
import EditTeam from './EditTeam';

const TeamMember = props => {
  const [teamState, setTeamState] = useState(props.employee)
  return (
    <div>
      <p>{teamState.name}</p>
      <p>{teamState.email}</p>
      <p>{teamState.position}</p>
      <EditTeam  teamState={teamState} setTeamState={setTeamState} />
    </div>
  )
}
 export default TeamMember;
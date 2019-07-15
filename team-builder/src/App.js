import React, {  useState } from 'react';
import './App.css';
import TeamMemberList from './Components/TeamMemberList/TeamMemberList';

const App = props => {
  const [teamMember, setTeamMember] = useState('')


  return (
    <div className="App">
        <TeamMemberList  />
    </div>
  )
}

export default App;

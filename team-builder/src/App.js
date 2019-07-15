import React, {  useState } from 'react';
import './App.css';
import TeamMembers from './Components/TeamMember/TeamMember';

const App = props => {
  const [teamMember, setTeamMember] = useState('')


  return (
    <div className="App">
        <TeamMembers  />
    </div>
  )
}

export default App;

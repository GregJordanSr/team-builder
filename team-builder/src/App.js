import React, {  useState } from 'react';
import './App.css';
import TeamMemberList from './Components/TeamMemberList/TeamMemberList';
import AddForm from './Components/Form/AddForm';
import  {teaminfo}  from './TeamInfo';

const App = props => {
  const [teamEmployee, setTeamEmployee] = useState(teaminfo)


  // const addEmployee = (newEmployee) => {
  //     setTeamEmployee(...teamEmployee, newEmployee)
  // }

  return (
    <div className="App">
        <AddForm setTeamEmployee={setTeamEmployee} teamEmployee={teamEmployee}/>
        <br/>
        <TeamMemberList  teamEmployee={teamEmployee} />
        

    </div>
  )
}

export default App;

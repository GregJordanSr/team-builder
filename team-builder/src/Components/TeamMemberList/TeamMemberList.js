import React, { useState } from 'react'
import TeamMember from '../TeamMember/TeamMember';
import  {teaminfo}  from '../../TeamInfo';

const TeamMemberList = () => {
    const [employees, setEmployees] = useState(teaminfo)
    return (
        <div>
            {employees.map( (employee, i) => {
                return <TeamMember employee={employee} id={i} />
            })}
        
        </div>
    )
}
export default TeamMemberList
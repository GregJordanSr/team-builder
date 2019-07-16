import React from 'react'
import TeamMember from '../TeamMember/TeamMember';


const TeamMemberList = props => {
   
    return (
        <div>
            {props.teamEmployee.map( (employee, i) => {
                return <TeamMember employee={employee} id={i} />
            })}
        
        </div>
    )
}
export default TeamMemberList
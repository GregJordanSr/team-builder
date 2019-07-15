import React from 'react'

const TeamMember = props => {
  console.log('Team Player', props)
  return (
    <div>
      <p>{props.employee.name}</p>
      <p>{props.employee.email}</p>
      <p>{props.employee.position}</p>
    </div>
  )
}
 export default TeamMember;
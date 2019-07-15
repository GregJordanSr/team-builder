import React from 'react'

const TeamMembers = props => {
  console.log('Team', props)
  return (
    <div>
      <h1>{props.first_name}</h1>
    </div>
  )
}
 export default TeamMembers;
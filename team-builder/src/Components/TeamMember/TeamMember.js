import React from 'react'

const TeamMember = props => {
  console.log('Team', props)
  return (
    <div>
      <h1>{props.player.first_name}</h1>
    </div>
  )
}
 export default TeamMember;
import React, { useState } from 'react'
import TeamMember from '../TeamMember/TeamMember';
import  {teaminfo}  from '../../TeamInfo';

const TeamMemberList = () => {
    const [players, setPlayers] = useState(teaminfo)
        console.log('teamInfo', teaminfo)
    return (
        <div>
            {players.map( (player, i) => {
                return <TeamMember player={player} id={i} />
            })}
        
        </div>
    )
}
export default TeamMemberList
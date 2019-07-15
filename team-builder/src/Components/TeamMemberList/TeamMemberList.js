import React from 'react'
import TeamMember from '../TeamMember/TeamMember';
import  {teaminfo}  from '../../TeamInfo';

const TeamMemberList = props => {
    const [players, setPlayers] = useState(teaminfo)
        console.log('teamInfo', teaminfo)
    return (
        <div>
            {props.players.map( (player, i) => {
                return <TeamMember player={player} id={i} />
            })}
        
        </div>
    )
}
export default TeamMemberList
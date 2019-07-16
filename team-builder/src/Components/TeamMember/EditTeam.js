import React from 'react'

const EditEmployee = props => {

    const changeHandler = e => {
    props.setTeamState({...props.teamState, [e.target.name]: e.target.value})
    }

  return (
    <form>
        <input 
            type="text"
            value={props.teamState.name}
            placeholder="name"
            name="name"
            onChange={changeHandler}

            />
            <input 
            type="text"
            value={props.teamState.email}
            placeholder="name"
            name="email"

            />
            <input 
            type="text"
            value={props.teamState.position}
            placeholder="name"
            name="position"
            />
       
      
    </form>
  )
}
export default EditEmployee;
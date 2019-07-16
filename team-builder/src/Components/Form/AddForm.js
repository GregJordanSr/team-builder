import React, { useState } from 'react'

const Form = props => {
    console.log('Form', props)
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        position: ''
    })

    const changeHandler = e => {
        setInputData({
            ...inputData, 
            [e.target.name]: e.target.value
        });
      
    }
    const addMember = e => {
        e.preventDefault()
        props.setTeamEmployee([...props.teamEmployee, inputData])
    }

    return (
      <div>
        <form onSubmit={addMember}>
        <label>
            Employee name:
            <input 
                type="text"
                placeholder="Type name here"
                name="name"
                onChange={changeHandler}  />
        </label>
        <label>
            Employee email:
            <input 
                type="email"
                placeholder="Type email here"
                name="email"
                onChange={changeHandler }  />
        </label>
        <label>
            Employee position:
            <input 
                type="text"
                placeholder="Type position here"
                name="position"
                onChange={changeHandler }  />
        </label>
        <button >Submit</button>
        </form>
      </div>
    )
  }

export default Form;
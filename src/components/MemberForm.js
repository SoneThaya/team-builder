import React from 'react'

function MemberForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form className='member container'>
      <h2>Member Form</h2>

      <label>First Name: 
       <input
          value={values.firstName}
          onChange={onInputChange}
          name='firstName'
          type="text" />
      </label>

      <label>Last Name: 
       <input
          value={values.lastName}
          onChange={onInputChange}
          name='lastName'
          type="text" />
      </label>

      <label>Email: 
       <input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type="text" />
      </label>

      <button onClick={onSubmit}>submit</button>
    
    </form>
  )
}

export default MemberForm
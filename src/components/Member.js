import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Working on fetching your friends....</h3>
  }

  return (
    <div className='member container'>
      <h2>{details.firstName}</h2>
      <h2>{details.lastName}</h2>
      <h2>{details.email}</h2>

    </div>
  )
}

export default Member
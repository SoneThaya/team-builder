import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Working on fetching your friends....</h3>
  }

  return (
    <div class="card">
    <div className='container'>
      <h2>{details.firstName} {details.lastName}</h2>
      <h2>{details.email}</h2>

    </div>
   
      
    </div>
  )
}

export default Member
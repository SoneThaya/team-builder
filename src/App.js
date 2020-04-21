import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import MemberForm from './components/MemberForm';
import Member from './components/Member';

import './App.css';

const initialTeamMembers = [
  {
    id: uuid(),
    firstName: 'Bob',
    lastName: 'Parker',
    email: 'bob@bob.com',
  }
]

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
}

function App() {

  const [members, setMembers] = useState(initialTeamMembers)

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    const newMember = {
      id: uuid(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
    }

    setMembers([...members, newMember])

    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header>
        <h1>Team Members</h1>
      </header>

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

      <MemberForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;

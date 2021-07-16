import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'

const users = [
  { name: 'jose', age: 26, location: 'lisbon' },
  { name: 'santi', age: 25, location: 'buenos aires' },
  { name: 'becca', age: 25, location: 'london' }
];

function SecondPage(props) {
  const {name} = props.match.params
  const [user, setUser] = useState(null)
  console.log("name: ", name)
  
  useEffect(()=>{
    const newUser = users.find(user => user.name === name) 
    setUser(newUser)
  })
  
  return(
      (user ? (
        <div>
          <p>
            This is the second page for user with name {user.name}, age {user.age} and location {user.location}.
          </p>
          <div>
            <button onClick={() => props.history.push('/')}>Go to home page</button>
          </div>
        </div>
      )
      : ''
    )
  )
}

export default SecondPage;

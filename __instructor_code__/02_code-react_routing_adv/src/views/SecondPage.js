import React, { useEffect, useState } from 'react';

const users = [
  { name: 'jose', age: 26, location: 'lisbon' },
  { name: 'santi', age: 25, location: 'buenos aires' },
  { name: 'becca', age: 25, location: 'london' }
];

function SecondPage(props) {
    const [user, setUser] = useState(null)

useEffect(()=>{
      fetchData()
      }, [user])

function fetchData() {
    const { name } = props.match.params;
    const user = users.find(user => user.name === name);
    setUser(user);
  }

  return(
      (user ? (
        <div>
          <p>
            This is the second page for user with name {user.name}, age {user.age} and location {user.location}.
          </p>
          <div>
            <button onClick={() => this.props.history.push('/')}>Go to home page</button>
          </div>
        </div>
      )
      : ''
    )
  )
}

export default SecondPage;

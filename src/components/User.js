import {useState, useEffect} from 'react'

function User() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <h1>User List</h1>
      {isLoading && <div>Loading...</div>}
    
      {users.map((user) => <div key={user.id}>{user.name}</div> ) }
    </div>
  )
}

export default User

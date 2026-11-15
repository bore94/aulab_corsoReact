import { useEffect, useState } from 'react'

export default function LoadingData() {
  const [users, setUsers] = useState(null)
  const [trigger, setTrigger] = useState(false)

  const getData = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await promise.json()
    setUsers(json)
    console.log(json)
  }

  useEffect(() => {
    if (trigger) {
      getData()
    }
  }, [trigger])

  const handleClick = () => {
    setTrigger(true)
  }

  return (
    <div className="loading-data">
      <h1>Loading data</h1>
      <button className="loading-data-button" onClick={handleClick}>
        Clicca qui
      </button>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
      </ul>
    </div>
  )
}

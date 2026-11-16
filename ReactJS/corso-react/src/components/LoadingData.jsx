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
    <div className="card bg-base-100 shadow-sm my-6">
      <div className="card-body items-center">
        <h2 className="card-title">Loading data</h2>
        <button className="btn btn-accent" onClick={handleClick}>
          Clicca qui
        </button>
        <ul className="list bg-base-100 rounded-box w-full">
          {users &&
            users.map((user) => (
              <li key={user.id} className="list-row">
                <div>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-xs opacity-60">{user.email}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

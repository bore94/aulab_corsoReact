import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const incrementByOne = () => {
    setCounter((prev) => prev + 1)
  }

  const decrementByOne = () => {
    setCounter((prev) => prev - 1)
  }

  return (
    <div className="card bg-base-100 shadow-sm my-6">
      <div className="card-body items-center">
        <h2 className="card-title">Counter</h2>
        <p>Counter value: {counter}</p>
        <div className="flex gap-2">
          <button
            id="increment"
            type="button"
            className="btn btn-primary btn-square"
            onClick={incrementByOne}
          >
            +
          </button>
          <button
            id="decrement"
            type="button"
            className="btn btn-secondary btn-square"
            onClick={decrementByOne}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter

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
    <>
      <h2>Counter</h2>
      <p>Counter value: {counter}</p>
      <div className="button-row">
        <button
          id="increment"
          type="button"
          onClick={incrementByOne}
        >
          +
        </button>
        <button
          id="decrement"
          type="button"
          onClick={decrementByOne}
        >
          -
        </button>
      </div>
    </>
  )
}

export default Counter

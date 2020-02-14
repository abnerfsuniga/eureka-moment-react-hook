import React, {useState} from 'react'

export default function UseStateDemo() {

  const [count, setCount] = useState(0)

  const incr3m3ntTw0C0unt = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  const incrementTwoCount = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h2>useState - prev</h2>
      <button onClick={incrementTwoCount}>Two Count {count}</button>
    </div>
  )
}
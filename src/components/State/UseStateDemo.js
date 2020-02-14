import React, {useState} from 'react'

export default function UseStateDemo() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>useState</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}
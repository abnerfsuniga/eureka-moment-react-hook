import React, {useState} from 'react'

export default function UseStateDemo() {

  const [state, setState] = useState({
    a: 1,
    b: 2
  })

  const incr3m3ntA = () => {
    setState(prevState => ({a: prevState.a + 1}))
  }

  const incrementA = () => {
    setState(prevState => ({...prevState, a: prevState.a + 1}))
  }

  return (
    <div>
      <h2>useState - object</h2>
      <button onClick={incrementA}>Increment a: {state.a} b: {state.b}</button>
    </div>
  )
}
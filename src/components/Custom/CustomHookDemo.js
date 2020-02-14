import React, { useState, useEffect } from 'react'

function useMousePosition () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const logMousePosition = e => {
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)
    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  
  return [x, y]
}

export default function CustomHookDemo() {
  const [x, y] = useMousePosition();

	return (
		<div>
      <h2>Custom Hook</h2>
			<p>x: {x}, y: {y}</p>
		</div>
	)
}

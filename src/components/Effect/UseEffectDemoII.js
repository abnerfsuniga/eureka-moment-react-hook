import React, { useState, useEffect } from 'react'

export default function UseEffectDemoII() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)

    return () => {
			console.log("Cleanup") // Mostrar sem dependency array
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])
	return (
		<div>
      <h2>useEffect - Cleanup</h2>
			<p>x: {x}, y: {y}</p>
		</div>
	)
}

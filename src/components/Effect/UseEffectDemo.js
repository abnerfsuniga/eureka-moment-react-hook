import React, { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [c0unt, setC0unt] = useState(0);

  const foo = () => {
    // props
  }

  useEffect(() => {
    console.log("useEffect call");
    
    // const foo = () => {
    //   props
    // }

    document.title = count;
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <button onClick={() => setCount(count => count + 1)}>
        Click me {count}
      </button>
      <button onClick={() => setC0unt(c0unt => c0unt + 1)}>
        Don't Click me {c0unt}
      </button>
    </div>
  );
}
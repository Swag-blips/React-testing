import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default Counter

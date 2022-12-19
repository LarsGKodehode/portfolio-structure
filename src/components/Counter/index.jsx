// Libraries
import { useState } from 'react';

// CSS specific to this component
import styles from './layout.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(
      (oldCount) => oldCount + 1
    )
  }

  return (
    <div>
      <h4>Counter</h4>
      <h5>{`Count: ${count}`}</h5>

      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter;
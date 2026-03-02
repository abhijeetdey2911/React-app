import { useState } from "react";

function app(){

  const [count, setCount] = useState(0)
  return(
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        add
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}>
        remove
      </button>
    </div>
  )
}

export default app
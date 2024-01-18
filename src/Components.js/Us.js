import React, { useState } from "react";

function Us() {
    const [hathi, setCount] = useState(0);
  return (
      <div>
          <button onClick={()=> setCount(hathi + 1)}>+</button>
          <h1>{hathi}</h1>
          <button onClick={()=> setCount(hathi - 1)}>-</button>
    </div>
  )
}

export default Us
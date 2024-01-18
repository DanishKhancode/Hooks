import React, { useEffect, useState } from "react";

function US1() {
    const [hathi, setCount] = useState(0);
    useEffect(() => {
        console.log("use effect");
        document.title = `Button clicked ${count} times`;
    })
    console.log("render");
  return (
      <div>
          <button onClick={()=> setCount(hathi + 1)}>+</button>
          <h1>{hathi}</h1>
          <button onClick={()=> setCount(hathi - 1)}>-</button>
    </div>
  )
}

export default Us
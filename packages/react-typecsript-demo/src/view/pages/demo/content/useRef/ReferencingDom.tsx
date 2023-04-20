import { useEffect, useRef, useState } from "react";

export default function ReferencingDom() {
  const inputRef = useRef(
    null
  ) as React.MutableRefObject<null | HTMLInputElement>;

  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(inputRef)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(()=>{
    console.log('update ReferencingDom'); 
  })

  useEffect(()=>{
    console.log('mount ReferencingDom'); 
  }, [])

  return (
    <>
      <h3>ReferencingDOM</h3>
      <br />
      <input 
        // ref={inputRef} 
        ref={(node)=> {
          console.log(inputRef);
          inputRef.current = node
        }}
        placeholder="input" 
      />
      <button onClick={handleClick}>Focus the input</button>

      <hr/>
        <h5> Count: {count}</h5>
      <button onClick={increaseCount}>Add Count 1</button>

    </>
  );
}

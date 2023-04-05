import { useRef } from "react";

export default function ReferencingValues() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }
  return (
    <>
      <h3>ReferencingValues</h3>
      <br />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

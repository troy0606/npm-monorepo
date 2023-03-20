import { useEffect, useState } from "react";
import Count from "./count";
import Test from "./test";

export default function Index() {
  const [mutualState, setMutualState] = useState(true);
  useEffect(()=>console.log("re-render Demo Index Component"));
  return (
    <>
      <h3>mutualState: {mutualState? 'true': 'false'}</h3>
      <hr />
      <Count />
      <hr/>
      <Test mutualState={mutualState} setMutualState={setMutualState} />
    </>
  );
}

import { useEffect, useState } from "react";
import Count from "./Count";
import Test from "./Test";

export default function Index() {
  const [mutualState, setMutualState] = useState(true);
  const [parentObj, setParentObj] = useState({parentObject: true});
  useEffect(()=>console.log("re-render Demo Index Component"));
  return (
    <>
      <h2>UseState</h2>
      <hr />
      <h3>mutualState: {JSON.stringify(parentObj)}</h3>
      <br />
      <h3>mutualStateObject: {mutualState? 'true': 'false'}</h3>
      <hr />
      <Count />
      <hr/>
      <Test mutualState={mutualState} setMutualState={setMutualState} parentObj={parentObj} setParentObj={setParentObj}/>
    </>
  );
}

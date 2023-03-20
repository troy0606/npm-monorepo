import { Dispatch, SetStateAction, useEffect, useState } from "react"

let renderTimes = 0;

// interface IProps {
//   mutualState: boolean;
//   setMutualState: Dispatch<SetStateAction<boolean>>;
// }

export default function Count() {
  const [conterA, setCounter] = useState(0);
  const [targetNumber, seTtargetNumber] = useState(0);

  const addCounter = ():void => {
    setCounter(conterA => conterA + 1)
  }

  const decreaseCounter = ():void => {
    setCounter(conterA - 1)
  }

  const pendingTripleAdd = ():void => {
    setCounter(conterA => conterA + 1);
    setCounter(conterA => conterA + 1);
    setCounter(conterA => conterA + 1);
  }

  const upDateTargetNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target) {
      seTtargetNumber(Number(e.target.value));
    }
  }

  const addNumberToCounter = ():void => {
    setCounter(targetNumber);
  }

  useEffect(() => console.log('re-render count component'))

  return (
    <>

      {`renderTimes: ${renderTimes+=1}`}
      <h3>Count Component</h3>
      <br />
      <div>
        <input type="number" placeholder="" className="border-2 border-rose-500" title="setNumber" onChange={upDateTargetNumber} value={targetNumber}/>
        <button type="button" onClick={addNumberToCounter} className="border border-slate-300 hover:border-slate-400">AddNumberToCounter</button>
        <br />
        <br />
        <button type="button" title="counter" onClick={addCounter} className="shadow hover:shadow-lg">ADD 1</button>
        <br />
        <button type="button" title="counter" onClick={decreaseCounter} className="shadow hover:shadow-lg">DEC 1</button>
        <br />
        <button type="button" title="counter" onClick={pendingTripleAdd} className="shadow hover:shadow-lg">ADD 3 times</button>
        <br />
        <h3>{conterA}</h3>
      </div>
    </>
  )
}

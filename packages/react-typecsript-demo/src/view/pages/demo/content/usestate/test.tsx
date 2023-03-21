import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  mutualState: boolean;
  setMutualState: Dispatch<SetStateAction<boolean>>;
  parentObj: { [key: string]: boolean };
  setParentObj: Dispatch<SetStateAction<any>>;
}
export default function Test(props: IProps) {
  let [testObj, setObj] = useState({} as any);

  const changeObjFromMutate = () => {
    testObj.chage = "mutated But not change reference";
    setObj(testObj);
  };

  const changeObjFromNewReference = () => {
    const testObj2 = { chage: "mutated And change reference" };
    setObj(testObj2);
  };

  useEffect(() => {
    console.log("re-render test component");
  });

  const changeMutualState = () => {
    props.setMutualState(!props.mutualState);
  };

  const changeParentObjToSameValue = () => {
    const sameObjDiffRef = { ...props.parentObj };
    props.setParentObj(sameObjDiffRef);
  };

  const changeParentObjToSameReference = () => {
    const sameObjDiffRef = props.parentObj;
    sameObjDiffRef.parentObject = false;
    props.setParentObj(sameObjDiffRef);
  };

  return (
    <>
      <h3>Test Component</h3>
      <br />
      <div>
        <h4>Mutual State Primitive type</h4>
        <button
          type="button"
          onClick={changeMutualState}
          className="border border-slate-300 hover:border-slate-400"
        >
          setMutualState
        </button>
        <p>
          mutualState Primitive is set to {props.mutualState ? "true" : "false"}
        </p>
      </div>
      <br />
      <div>
        <h4>Mutual State Reference type</h4>
        <button
          type="button"
          onClick={changeParentObjToSameValue}
          className="border border-slate-300 hover:border-slate-400"
        >
          setMutualStateObjectBySameValue
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={changeParentObjToSameReference}
          className="border border-slate-300 hover:border-slate-400"
        >
          setMutualStateObjectBySameReference
        </button>
        <p>mutualState Reference is set to {JSON.stringify(props.parentObj)}</p>
      </div>
      <hr />
      <br />
      <div>
        <h4>Own State Reference type</h4>
        <button
          type="button"
          onClick={changeObjFromMutate}
          className="border border-slate-300 hover:border-slate-400"
        >
          changeObjFromMutate
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={changeObjFromNewReference}
          className="border border-slate-300 hover:border-slate-400"
        >
          changeObjFromNewReference
        </button>
        <br />
        <p> changeObj = {JSON.stringify(testObj)}</p>
      </div>
    </>
  );
}

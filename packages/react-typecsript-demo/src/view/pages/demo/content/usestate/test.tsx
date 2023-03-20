import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  mutualState: boolean;
  setMutualState: Dispatch<SetStateAction<boolean>>;
}
export default function Test(props: IProps) {
  useEffect(() => {
    console.log("re-render test component");
  });

  const changeMutualState = () => {
    props.setMutualState(!props.mutualState)
  }
  return (
    <>
      <h3>Test Component</h3>
      <br/>
      <button type="button" onClick={changeMutualState} className="border border-slate-300 hover:border-slate-400">setMutualState</button>
      <p>
        mutualState is set to {props.mutualState? 'true': 'false'}
      </p>
    </>
  );
}

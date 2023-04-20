import UseStateDemo from "./content/useState";
import UseEffect from "./content/useEffect";
import UseRef from "./content/useRef";
import UseCallBack from "./content/useCallback";
import { TArrayGeneric, TlinkObject } from "../../../models/types/common";
import RouteLayout from "./content/RouteLayout";

export default function index() {

  const linkData: TArrayGeneric<TlinkObject> = [{
    path: "usestate",
    element: <UseStateDemo />,
    name: "useState demo"
  },
  {
    path: "useeffect",
    element: <UseEffect />,
    name: "useEffect demo"
  },
  {
    path: "useref",
    element: <UseRef />,
    name: "useRef demo"
  },
  {
    path: "usecallback",
    element: <UseCallBack />,
    name: "useCallback demo"
  },
]

  return (
    <>
    <h4>Demo Place</h4>
      <RouteLayout linkData={linkData}/>
    </>
  );
}

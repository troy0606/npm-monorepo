import { Route, Routes } from "react-router-dom";
import DemoLink from "./content/demoLink";
import UseStateDemo from "./content/useState";
import UseEffect from "./content/useEffect";
import UseRef from "./content/useRef";
import UseCallBack from "./content/useCallback";

export default function index() {

  type linkObject = {
    path: string;
    element: JSX.Element;
    name: string;
  }

  type links = Array<linkObject>;

  const linkData: links = [{
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
      <DemoLink linkData={linkData}/>
      <Routes>
        <Route path="usestate" element={<UseStateDemo />} />
        <Route path="useeffect" element={<UseEffect />} />
        <Route path="useref" element={<UseRef />} />
        <Route path="usecallback" element={<UseCallBack />} />
      </Routes>
    </>
  );
}

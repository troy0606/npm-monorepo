import { Route, Routes } from "react-router-dom";
import DemoLink from "./content/demoLink";
import UseStateDemo from "./content/useState";
import UseEffect from "./content/useEffect";
import UseRef from "./content/useRef";

export default function index() {
  return (
    <>
    <h4>Demo Place</h4>
      <DemoLink/>
      <Routes>
        <Route path="usestate" element={<UseStateDemo />} />
        <Route path="useeffect" element={<UseEffect />} />
        <Route path="useref" element={<UseRef />} />
      </Routes>
    </>
  );
}

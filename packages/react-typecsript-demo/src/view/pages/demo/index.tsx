import { Route, Routes } from "react-router-dom";
import DemoLink from "./content/demoLink";
import UseStateDemo from "./content/usestate";

export default function index() {
  return (
    <>
    <h4>Demo Place</h4>
      <DemoLink/>
      <Routes>
        <Route path="usestate" element={<UseStateDemo />} />
        <Route path="useState" element={<UseStateDemo />} />
      </Routes>
    </>
  );
}

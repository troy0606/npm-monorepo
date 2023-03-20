import { Outlet } from "react-router-dom";
import SideBar from "../view/components/SideBar";

export default function Root() {
  return (
    <div className="container mx-auto px-4">
      <SideBar/>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
